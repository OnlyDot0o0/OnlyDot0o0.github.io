import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

async function generateIcon() {
  const response = new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
          borderRadius: 14,
        },
        children: {
          type: "span",
          props: {
            style: {
              fontSize: 34,
              fontWeight: 700,
              color: "#2dd9c2",
              fontFamily: "monospace",
            },
            children: "M_",
          },
        },
      },
    },
    { width: 64, height: 64 }
  );
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(publicDir, "icon.png"), buffer);
  console.log("Wrote public/icon.png");
}

async function generateOgImage() {
  const tags = ["Node.js", "Python", "IBM Maximo", "AI/ML", "Cybersecurity"];
  const response = new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          padding: 80,
          fontFamily: "monospace",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", alignItems: "center", gap: 14 },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      width: 14,
                      height: 14,
                      borderRadius: 999,
                      background: "#2dd9c2",
                      display: "flex",
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: { fontSize: 24, color: "#9aa0a8" },
                    children: "onlydot0o0.github.io",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column", gap: 20 },
              children: [
                {
                  type: "span",
                  props: {
                    style: { fontSize: 68, color: "#f2f3f5", fontWeight: 700 },
                    children: "Moaz Alnageeb",
                  },
                },
                {
                  type: "span",
                  props: {
                    style: { fontSize: 32, color: "#2dd9c2" },
                    children:
                      "Software Engineer · AI & Cybersecurity · Enterprise Solutions",
                  },
                },
                {
                  type: "span",
                  props: {
                    style: { fontSize: 22, color: "#6b7078", maxWidth: 900 },
                    children:
                      "BSc Software Engineering (First Class) · MSc Cybersecurity & AI · IBM Maximo Business Solutions Consultant",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: { display: "flex", gap: 12 },
              children: tags.map((tag) => ({
                type: "div",
                props: {
                  key: tag,
                  style: {
                    display: "flex",
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid #23262b",
                    color: "#9aa0a8",
                    fontSize: 18,
                  },
                  children: tag,
                },
              })),
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(path.join(publicDir, "opengraph-image.png"), buffer);
  console.log("Wrote public/opengraph-image.png");
}

await generateIcon();
await generateOgImage();
