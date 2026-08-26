"use client";

import { useEffect, useRef, useState } from "react";
import { terminalCommands, terminalWelcome } from "@/data/terminal";
import { cn } from "@/lib/utils";

type Line = { type: "input" | "output"; text: string };

const COMMAND_LIST = Object.keys(terminalCommands);

export function Terminal({ className }: { className?: string }) {
  const [lines, setLines] = useState<Line[]>(
    terminalWelcome.map((text) => ({ type: "output", text }))
  );
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    const nextLines: Line[] = [...lines, { type: "input", text: cmd }];

    if (cmd.toLowerCase() === "clear") {
      setLines([]);
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      return;
    }

    const match = terminalCommands[cmd.toLowerCase()];
    if (match) {
      match.output.forEach((line) => nextLines.push({ type: "output", text: line }));
    } else {
      nextLines.push({
        type: "output",
        text: `command not found: ${cmd} — type 'help' for available commands`,
      });
    }

    setLines(nextLines);
    setHistory((h) => [...h, cmd]);
    setHistoryIndex(-1);
    setValue("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMAND_LIST.find((c) => c.startsWith(value.toLowerCase()));
      if (match) setValue(match);
    }
  }

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border-strong bg-[#0a0b0d] shadow-2xl shadow-black/40",
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">
          moaz@systems: ~
        </span>
      </div>

      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        className="h-72 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:h-80"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={cn(
              "whitespace-pre-wrap break-words",
              line.type === "input" ? "text-white" : "text-white/55"
            )}
          >
            {line.type === "input" ? (
              <span>
                <span className="text-[#2dd9c2]">❯</span> {line.text}
              </span>
            ) : (
              line.text
            )}
          </div>
        ))}

        <div className="flex items-center gap-2 text-white">
          <span className="text-[#2dd9c2]">❯</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="Terminal command input"
            placeholder="type 'help'"
            className="flex-1 bg-transparent outline-none placeholder:text-white/25"
          />
        </div>
      </div>
    </div>
  );
}
