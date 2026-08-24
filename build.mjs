import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

const siteFiles = ["index.html", "style.css", "script.js"];
const assetsDir = join(root, "assets");

function listFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of siteFiles) {
  const src = join(root, file);
  if (!existsSync(src)) {
    throw new Error(`Required file missing: ${file}`);
  }
  cpSync(src, join(dist, file));
}

if (!existsSync(assetsDir)) {
  throw new Error("Required folder missing: assets/");
}

cpSync(assetsDir, join(dist, "assets"), { recursive: true });

// Skip Jekyll on GitHub Pages so every asset folder is published as-is.
writeFileSync(join(dist, ".nojekyll"), "");

const copied = listFiles(dist);
const images = copied.filter((f) => /\.(png|jpe?g|webp|gif|svg|ico|avif)$/i.test(f));
const videos = copied.filter((f) => /\.(mp4|webm|mov)$/i.test(f));
const audio = copied.filter((f) => /\.(mp3|wav|ogg)$/i.test(f));

const referenced = [
  "assets/divine/opening-scene.png",
  "assets/divine/krishna-draupadi.png",
  "assets/memories/memory-01.jpg",
  "assets/memories/memory-02.jpg",
  "assets/memories/memory-03.jpg",
  "assets/memories/memory-04.jpg",
  "assets/memories/memory-05.jpg",
  "assets/memories/memory-06.jpg",
  "assets/memories/memory-07.jpg",
  "assets/memories/memory-08.jpg",
  "assets/memories/memory-09.jpg",
  "assets/memories/memory-10.jpg",
  "assets/memories/grow-growing.jpg",
  "assets/memories/grow-stage-03.jpg",
  "assets/memories/grow-college.jpg",
  "assets/memories/grow-today.jpg",
  "assets/childhood/childhood-01.jpg",
  "assets/childhood/childhood-02.jpg",
  "assets/childhood/childhood-03.jpg",
  "assets/childhood/childhood-04.jpg",
  "assets/funny/funny-01.mp4",
  "assets/funny/funny-02.jpg",
  "assets/funny/funny-03.jpg",
  "assets/videos/chittu-main.mp4",
  "assets/videos/video-01.mp4",
  "assets/videos/video-02.mp4",
  "assets/videos/video-03.mp4",
  "assets/videos/video-04.mp4",
  "assets/videos/video-05.mp4",
  "assets/videos/video-06.mp4",
  "assets/music/background.mp3",
  "assets/music/divine-flute.mp3",
];

const missing = referenced.filter((rel) => !existsSync(join(dist, rel)));
if (missing.length) {
  console.warn("Referenced files not found (site already hides missing media):");
  for (const file of missing) console.warn(`  - ${file}`);
}

console.log("Build complete.");
console.log(`  output: ${relative(root, dist) || "dist"}/`);
console.log(`  files:  ${copied.length}`);
console.log(`  images: ${images.length}`);
console.log(`  videos: ${videos.length}`);
console.log(`  audio:  ${audio.length}`);
