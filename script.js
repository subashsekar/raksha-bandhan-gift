/* =========================================================
   Divine Cinematic Raksha Bandhan — Story Engine
   Edit storyConfig to personalize everything.
   ========================================================= */

const storyConfig = {
  sisterName: "Haarika Anbazhagan",
  sisterNickname: "Chittu",
  brotherName: "Subash Sekar",

  /* Bump this when you replace images/videos/audio so browsers load the new files */
  assetVersion: "20260825c",

  divineImage: "assets/divine/krishna-draupadi.png",

  bridgePhoto: "assets/memories/memory-02.jpg",
  connectionUsPhoto: "assets/memories/memory-03.jpg",
  finalePhoto: "assets/memories/memory-07.jpg",

  finalePhotos: [
    "assets/memories/memory-01.jpg",
    "assets/memories/memory-03.jpg",
    "assets/memories/memory-06.jpg",
    "assets/memories/memory-07.jpg",
  ],

  finaleMainVideo: "assets/videos/chittu-main.mp4",

  childhood: [
    { src: "assets/childhood/childhood-01.jpg", caption: "The beginning of us." },
    { src: "assets/childhood/childhood-02.jpg", caption: "Side by side, always." },
    { src: "assets/childhood/childhood-03.jpg", caption: "தங்கை பாசம் — forever." },
    { src: "assets/childhood/childhood-04.jpg", caption: "Campus days. Sister days." },
  ],

  timeline: [
    {
      label: "Our first memories",
      caption: "When we were little — and everything was simple.",
      src: "assets/childhood/childhood-01.jpg",
    },
    {
      label: "Growing up",
      caption: "When we didn't realize these moments would become memories.",
      src: "assets/memories/grow-growing.jpg",
    },
    {
      label: "The silly moments",
      caption: "When annoying each other was our favorite hobby.",
      src: "assets/memories/grow-stage-03.jpg",
    },
    {
      label: "The laughter",
      caption: "Still laughing about it.",
      src: "assets/funny/funny-03.jpg",
    },
    {
      label: "The years passing",
      caption: "School, college, life — and you were still there.",
      src: "assets/memories/grow-college.jpg",
    },
    {
      label: "Today",
      caption: "Not by blood. By choice. Forever.",
      src: "assets/memories/grow-today.jpg",
    },
  ],

  funny: [
    {
      src: "assets/funny/funny-01.mp4",
      caption: "This one still makes us laugh",
      type: "video",
    },
    {
      src: "assets/funny/funny-02.jpg",
      caption: "Us, in our own little world",
      type: "image",
    },
    {
      src: "assets/funny/funny-03.jpg",
      caption: "Festival nights & forever chaos",
      type: "image",
    },
  ],

  memories: [
    { src: "assets/memories/memory-01.jpg", caption: "A quiet corridor. A forever us." },
    { src: "assets/memories/memory-02.jpg", caption: "தங்கை பாசம் — older than words." },
    { src: "assets/memories/memory-03.jpg", caption: "Side by side under the sky." },
    { src: "assets/memories/memory-04.jpg", caption: "Campus days. Sister days." },
    { src: "assets/memories/memory-05.jpg", caption: "Ordinary moments that feel like home." },
    { src: "assets/memories/memory-06.jpg", caption: "Smiles that still warm the frame." },
    { src: "assets/memories/memory-07.jpg", caption: "Proud of you — always." },
    { src: "assets/memories/memory-08.jpg", caption: "Brother duty: feed the chaos." },
    { src: "assets/memories/memory-09.jpg", caption: "எனக்கு தந்த வாழ்க்கை உனக்கு மட்டும் தானே." },
    { src: "assets/memories/memory-10.jpg", caption: "Campus light. Sister smile." },
  ],

  storyVideos: [
    {
      src: "assets/videos/video-01.mp4",
      caption: "A gift of a moment.",
    },
    {
      src: "assets/videos/video-02.mp4",
      caption: "God's plan — and us in it.",
    },
    {
      src: "assets/videos/video-03.mp4",
      caption: "Another clip of us.",
    },
    {
      src: "assets/videos/video-04.mp4",
      caption: "Daughter energy. Sister forever.",
    },
    {
      src: "assets/videos/video-05.mp4",
      caption: "One more memory that moves.",
    },
    {
      src: "assets/videos/video-06.mp4",
      caption: "And this one — just for you.",
    },
  ],

  finalVideo: "assets/videos/chittu-main.mp4",
  backgroundMusic: "assets/music/background.mp3",
  divineFlute: "assets/music/divine-flute.mp3",

  letter: `Dear [SISTER_NAME],

There are some things I don't say often enough.

We weren't born into the same family.
But life still gave me a sister — the best kind.

You have been part of so many chapters of my life that sometimes I forget how special that really is.

We've laughed.
We've fought.
We've annoyed each other.
We've grown up.
And we've created memories that I hope we never forget.

Life will continue to change.
We may become busy.
We may travel different paths.

But there is one thing that will never change.

You will always be my sister — not by blood,
but by every choice we ever made to stay.

And I'll always be your brother.

If you ever need someone to stand beside you...
I'll be there.

Not because Raksha Bandhan asks me to.
But because you're my sister.

Happy Raksha Bandhan ❤️

— [YOUR_NAME]`,
};

function assetUrl(path) {
  if (!path) return path;
  const version = storyConfig.assetVersion || "1";
  return `${path}${path.includes("?") ? "&" : "?"}v=${encodeURIComponent(version)}`;
}

function applyAssetVersions() {
  storyConfig.divineImage = assetUrl(storyConfig.divineImage);
  storyConfig.bridgePhoto = assetUrl(storyConfig.bridgePhoto);
  storyConfig.connectionUsPhoto = assetUrl(storyConfig.connectionUsPhoto);
  storyConfig.finalePhoto = assetUrl(storyConfig.finalePhoto);
  storyConfig.finaleMainVideo = assetUrl(storyConfig.finaleMainVideo);
  storyConfig.finalVideo = assetUrl(storyConfig.finalVideo);
  storyConfig.backgroundMusic = assetUrl(storyConfig.backgroundMusic);
  storyConfig.divineFlute = assetUrl(storyConfig.divineFlute);
  storyConfig.finalePhotos = (storyConfig.finalePhotos || []).map(assetUrl);
  storyConfig.childhood = (storyConfig.childhood || []).map((item) => ({
    ...item,
    src: assetUrl(item.src),
  }));
  storyConfig.timeline = (storyConfig.timeline || []).map((item) => ({
    ...item,
    src: assetUrl(item.src),
  }));
  storyConfig.funny = (storyConfig.funny || []).map((item) => ({
    ...item,
    src: assetUrl(item.src),
  }));
  storyConfig.memories = (storyConfig.memories || []).map((item) => ({
    ...item,
    src: assetUrl(item.src),
  }));
  storyConfig.storyVideos = (storyConfig.storyVideos || []).map((item) => ({
    ...item,
    src: assetUrl(item.src),
  }));
}

const CHAPTERS = [
  { id: "ch-divine", label: "01 Divine Bond" },
  { id: "ch-us", label: "02 Our Beginning" },
  { id: "ch-timeline", label: "03 Growing Up" },
  { id: "ch-videos", label: "04 Our Videos" },
  { id: "ch-memories", label: "05 Memories" },
  { id: "ch-vow", label: "06 My Promise" },
  { id: "ch-rakhi", label: "07 Raksha Bandhan" },
  { id: "ch-finale", label: "08 Forever" },
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const lightboxItems = [];
let lightboxIndex = 0;
let revealObserver = null;

function $(sel, root = document) {
  return root.querySelector(sel);
}
function $$(sel, root = document) {
  return [...root.querySelectorAll(sel)];
}

async function mediaExists(url) {
  if (!url) return false;
  try {
    const head = await fetch(url, { method: "HEAD", cache: "force-cache" });
    if (head.status === 404) return false;
    if (head.ok) return true;
  } catch {
    /* continue */
  }

  const lower = url.toLowerCase();
  if (/\.(jpe?g|png|gif|webp|avif|svg)(\?|$)/.test(lower)) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  if (/\.(mp4|webm|ogg|mov)(\?|$)/.test(lower)) {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => resolve(true);
      video.onerror = () => resolve(false);
      video.src = url;
    });
  }

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      cache: "force-cache",
    });
    return res.ok || res.status === 206;
  } catch {
    return false;
  }
}

function bindImageOrHide(img, src, wrap) {
  if (!img || !src) {
    wrap?.classList.add("is-missing");
    return Promise.resolve(false);
  }
  return new Promise((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => {
      wrap?.classList.add("is-missing");
      resolve(false);
    };
    img.loading = "lazy";
    img.decoding = "async";
    img.src = src;
  });
}

/* ---------- Atmosphere ---------- */
function createDust(container, count = 28) {
  if (!container || reducedMotion) return;
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const d = document.createElement("span");
    d.className = "dust";
    d.style.left = `${Math.random() * 100}%`;
    d.style.animationDuration = `${10 + Math.random() * 14}s`;
    d.style.animationDelay = `${Math.random() * 10}s`;
    d.style.width = `${2 + Math.random() * 3}px`;
    d.style.height = d.style.width;
    container.appendChild(d);
  }
}

function createBurst(container, count = 20) {
  if (!container || reducedMotion) return;
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const d = document.createElement("span");
    d.className = "burst-dot";
    d.style.left = `${40 + Math.random() * 20}%`;
    d.style.top = `${35 + Math.random() * 20}%`;
    d.style.setProperty("--bx", `${(Math.random() - 0.5) * 220}px`);
    d.style.setProperty("--by", `${(Math.random() - 0.5) * 220}px`);
    d.style.animationDelay = `${Math.random() * 2.5}s`;
    container.appendChild(d);
  }
}

function createPetals(container, count = 10) {
  if (!container || reducedMotion) return;
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = `${10 + Math.random() * 80}%`;
    p.style.top = `${20 + Math.random() * 60}%`;
    p.style.animationDelay = `${Math.random() * 3}s`;
    p.style.background = Math.random() > 0.5 ? "#e8b4b8" : "#F2D27A";
    container.appendChild(p);
  }
}

function startStarCanvas(canvas, options = {}) {
  if (!canvas || reducedMotion) return () => {};
  const ctx = canvas.getContext("2d");
  const { count = 70, speed = 0.18 } = options;
  let particles = [];
  let raf = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * devicePixelRatio);
    canvas.height = Math.floor(rect.height * devicePixelRatio);
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * speed,
      vy: -0.08 - Math.random() * speed,
      a: 0.25 + Math.random() * 0.55,
    }));
  }

  function tick() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -8) {
        p.y = rect.height + 8;
        p.x = Math.random() * rect.width;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(242, 210, 122, ${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    raf = requestAnimationFrame(tick);
  }

  resize();
  tick();
  window.addEventListener("resize", resize);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
  };
}

/* ---------- Opening ---------- */
function runOpeningSequence() {
  const scene = $("#opening-scene");
  $$(".opening__line, .opening__actions").forEach((el) => {
    el.classList.remove("is-visible", "is-dim");
  });
  scene?.classList.remove("is-visible", "is-settled");

  window.setTimeout(() => {
    scene?.classList.add("is-visible");
  }, reducedMotion ? 0 : 200);

  window.setTimeout(() => {
    scene?.classList.add("is-settled");
  }, reducedMotion ? 0 : 2400);

  const lines = $$("[data-open]");
  const delays = reducedMotion
    ? [0, 0, 0, 0, 0, 0]
    : [1400, 2800, 4200, 5600, 7000, 8600];

  lines.forEach((el) => {
    const i = Number(el.dataset.open);
    window.setTimeout(() => {
      lines.forEach((line) => {
        if (line === el) {
          line.classList.add("is-visible");
          line.classList.remove("is-dim");
        } else if (
          line.classList.contains("is-visible") &&
          Number(line.dataset.open) < 5 &&
          line.classList.contains("opening__line")
        ) {
          // Keep title + name readable; softly dim earlier lines only
          if (Number(line.dataset.open) <= 1) line.classList.add("is-dim");
        }
      });
      el.classList.add("is-visible");
    }, delays[i] ?? 0);
  });
}

/* ---------- Music ---------- */
const Music = (() => {
  let audio = null;
  let ready = false;

  function syncUI(playing) {
    const toggleBtn = $("#music-toggle");
    const enableBtn = $("#enable-music");
    if (toggleBtn) {
      toggleBtn.hidden = false;
      toggleBtn.classList.toggle("is-playing", playing);
      toggleBtn.setAttribute("aria-pressed", playing ? "true" : "false");
      toggleBtn.setAttribute(
        "aria-label",
        playing ? "Pause music" : "Play music"
      );
    }
    if (enableBtn) {
      enableBtn.innerHTML = playing
        ? '<span aria-hidden="true">♪</span> Music playing'
        : '<span aria-hidden="true">🎵</span> Turn on the music';
    }
  }

  async function play() {
    if (!audio) return false;
    try {
      await audio.play();
      syncUI(true);
      return true;
    } catch {
      syncUI(false);
      return false;
    }
  }

  function pause() {
    if (!audio) return;
    audio.pause();
    syncUI(false);
  }

  async function toggle() {
    if (!audio) return;
    if (audio.paused) await play();
    else pause();
  }

  async function init() {
    const toggleBtn = $("#music-toggle");
    const enableBtn = $("#enable-music");
    const path = storyConfig.backgroundMusic;

    if (!(await mediaExists(path))) {
      if (enableBtn) enableBtn.hidden = true;
      if (toggleBtn) toggleBtn.hidden = true;
      return;
    }

    audio = new Audio(path);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.45;
    ready = true;

    // Always show the floating music icon
    if (toggleBtn) toggleBtn.hidden = false;
    syncUI(false);

    enableBtn?.addEventListener("click", () => play());
    toggleBtn?.addEventListener("click", () => toggle());

    // Keep UI in sync if audio ends unexpectedly
    audio.addEventListener("play", () => syncUI(true));
    audio.addEventListener("pause", () => syncUI(false));
  }

  return { init, play, pause, toggle, isReady: () => ready };
})();

/* ---------- Exclusive video playback ---------- */
function pauseAllVideosExcept(active) {
  $$("video").forEach((video) => {
    if (video !== active && !video.paused) {
      video.pause();
    }
  });
}

function setupExclusiveMedia() {
  document.addEventListener(
    "play",
    (event) => {
      const el = event.target;
      if (!(el instanceof HTMLVideoElement)) return;
      pauseAllVideosExcept(el);
      Music.pause();
    },
    true
  );
}

/* ---------- Builders ---------- */
async function buildChildhood() {
  const rail = $("#childhood-rail");
  if (!rail) return;
  rail.innerHTML = "";

  for (const item of storyConfig.childhood) {
    if (!(await mediaExists(item.src))) continue;
    const fig = document.createElement("figure");
    fig.className = "polaroid";
    fig.setAttribute("role", "listitem");
    fig.tabIndex = 0;
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption || "Memory";
    img.loading = "lazy";
    const cap = document.createElement("figcaption");
    cap.textContent = item.caption || "";
    fig.append(img, cap);
    fig.addEventListener("click", () => openLightbox(item.src, item.caption));
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item.src, item.caption);
      }
    });
    rail.appendChild(fig);
  }
}

async function buildTimeline() {
  const root = $("#life-timeline");
  if (!root) return;
  root.innerHTML = "";

  for (const stage of storyConfig.timeline) {
    const row = document.createElement("div");
    row.className = "life-stage";
    const rail = document.createElement("div");
    rail.className = "life-stage__rail";
    rail.innerHTML =
      '<span class="life-stage__dot"></span><span class="life-stage__line"></span>';

    const content = document.createElement("div");
    const label = document.createElement("p");
    label.className = "life-stage__label";
    label.textContent = stage.label;
    const caption = document.createElement("p");
    caption.className = "life-stage__caption";
    caption.textContent = stage.caption || "";
    const photo = document.createElement("div");
    photo.className = "life-stage__photo";
    const img = document.createElement("img");
    img.alt = stage.label;
    img.loading = "lazy";
    photo.appendChild(img);
    content.append(label, caption, photo);
    row.append(rail, content);
    root.appendChild(row);

    const ok = await bindImageOrHide(img, stage.src, photo);
    if (ok) {
      photo.addEventListener("click", () => openLightbox(stage.src, stage.caption));
    }
    observeRevealElements([row]);
  }
}

async function buildFunny() {
  const gallery = $("#funny-gallery");
  if (!gallery) return;
  gallery.innerHTML = "";

  for (const item of storyConfig.funny) {
    if (!(await mediaExists(item.src))) continue;
    const card = document.createElement("div");
    card.className = "funny-card";

    if (item.type === "video") {
      card.classList.add("funny-card--video");
      const video = document.createElement("video");
      video.src = item.src;
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.controls = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", item.caption || "Funny memory");
      card.appendChild(video);
      applyVideoOrientation(video, card);
      const badge = document.createElement("span");
      badge.className = "funny-card__play";
      badge.textContent = "▶ Tap to play";
      card.appendChild(badge);
      video.addEventListener("play", () => {
        badge.hidden = true;
      });
      video.addEventListener("pause", () => {
        if (video.currentTime === 0 || video.ended) badge.hidden = false;
      });
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.caption || "Funny memory";
      img.loading = "lazy";
      card.appendChild(img);
      card.addEventListener("click", () => openLightbox(item.src, item.caption));
    }

    gallery.appendChild(card);
    observeRevealElements([card]);
  }
}

async function buildMemories() {
  const gallery = $("#memory-gallery");
  if (!gallery) return;
  gallery.innerHTML = "";
  lightboxItems.length = 0;

  for (const item of storyConfig.memories) {
    const index = lightboxItems.length;
    lightboxItems.push({ src: item.src, caption: item.caption || "" });

    const el = document.createElement("figure");
    el.className = "memory-item";
    el.tabIndex = 0;
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", item.caption || "Open memory");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption || "Memory";
    img.loading = "lazy";
    img.decoding = "async";
    img.onerror = () => {
      el.remove();
      const idx = lightboxItems.findIndex((m) => m.src === item.src);
      if (idx >= 0) lightboxItems.splice(idx, 1);
    };

    const cap = document.createElement("figcaption");
    cap.className = "memory-item__cap";
    cap.textContent = item.caption || "";
    el.append(img, cap);

    el.addEventListener("click", () => {
      const liveIndex = lightboxItems.findIndex((m) => m.src === item.src);
      openLightboxAt(liveIndex >= 0 ? liveIndex : index);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const liveIndex = lightboxItems.findIndex((m) => m.src === item.src);
        openLightboxAt(liveIndex >= 0 ? liveIndex : index);
      }
    });

    gallery.appendChild(el);
  }

  // Reveal only after story is visible — avoids invisible opacity trap
  if (!$("#main-story")?.hidden) {
    revealMemoryItems();
  }
}

function revealMemoryItems() {
  const items = $$(".memory-item");
  if (!items.length) return;
  if (reducedMotion) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  items.forEach((el, i) => {
    window.setTimeout(() => el.classList.add("is-in"), 80 + i * 70);
  });
  observeRevealElements(items);
}

function applyVideoOrientation(video, container) {
  if (!video || !container) return;
  const setOrientation = () => {
    const w = video.videoWidth;
    const h = video.videoHeight;
    if (!w || !h) return;
    container.classList.remove("is-portrait", "is-landscape", "is-square");
    const ratio = w / h;
    if (ratio > 1.15) container.classList.add("is-landscape");
    else if (ratio < 0.9) container.classList.add("is-portrait");
    else container.classList.add("is-square");
  };
  if (video.readyState >= 1) setOrientation();
  else video.addEventListener("loadedmetadata", setOrientation, { once: true });
}

async function buildVideoGrid() {
  const grid = $("#video-grid");
  if (!grid) return;
  grid.innerHTML = "";

  let shown = 0;
  for (const [i, item] of storyConfig.storyVideos.entries()) {
    const exists = await mediaExists(item.src);
    const card = document.createElement("article");
    card.className = "video-card reveal";

    const label = document.createElement("p");
    label.className = "video-card__label";
    label.textContent = `Clip ${String(i + 1).padStart(2, "0")}`;

    const wrap = document.createElement("div");
    wrap.className = "video-card__player";

    if (exists) {
      const video = document.createElement("video");
      video.src = item.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", item.caption || `Video ${i + 1}`);
      wrap.appendChild(video);
      applyVideoOrientation(video, wrap);
      shown += 1;
    } else {
      wrap.classList.add("is-missing");
      const fallback = document.createElement("p");
      fallback.className = "video-card__fallback";
      fallback.innerHTML = `Add<br><code>${item.src}</code>`;
      wrap.appendChild(fallback);
    }

    const cap = document.createElement("p");
    cap.className = "video-card__caption";
    cap.textContent = item.caption || "";

    card.append(label, wrap, cap);
    grid.appendChild(card);
  }

  if (!shown) {
    const note = document.createElement("p");
    note.className = "video-grid__empty reveal";
    note.textContent =
      "Drop your 4 videos into assets/videos/ as video-01.mp4 … video-04.mp4";
    grid.prepend(note);
  }

  if (!$("#main-story")?.hidden) {
    observeRevealElements($$(".video-card, .video-grid__empty"));
  }
}

async function setupVideo(videoEl, src) {
  if (!videoEl) return;
  const container = videoEl.closest("[data-media]");
  const fallback = container?.querySelector(".media-fallback");
  const ok = await mediaExists(src);
  if (!ok) {
    container?.classList.add("is-missing");
    if (fallback) fallback.hidden = false;
    videoEl.removeAttribute("src");
    return;
  }
  videoEl.src = src;
  applyVideoOrientation(videoEl, container);
}

function buildLetter() {
  const body = $("#letter-body");
  if (!body) return;
  body.textContent = storyConfig.letter
    .replaceAll("[SISTER_NAME]", storyConfig.sisterName)
    .replaceAll("[YOUR_NAME]", storyConfig.brotherName);
}

function personalize() {
  const nick = storyConfig.sisterNickname || storyConfig.sisterName;
  const sisterEl = $("#finale-sister");
  const brotherEl = $("#finale-brother");
  if (sisterEl) sisterEl.textContent = `${nick} ❤️`;
  if (brotherEl) brotherEl.textContent = storyConfig.brotherName;
  document.title = `Our Sacred Story — Happy Raksha Bandhan, ${storyConfig.sisterName}`;
}

async function bindStaticPhotos() {
  const bridge = $('[data-media="bridge-photo"]');
  if (bridge) {
    await bindImageOrHide(bridge.querySelector("img"), storyConfig.bridgePhoto, bridge);
  }

  for (const sel of ['[data-media="divine-story"]']) {
    const el = $(sel);
    const img = el?.querySelector("img");
    if (img && !(await mediaExists(img.getAttribute("src") || storyConfig.divineImage))) {
      el?.classList.add("is-missing");
    }
  }
}

async function buildFinalePhotos() {
  const root = $("#finale-photos");
  if (!root) return;
  root.innerHTML = "";

  for (const src of storyConfig.finalePhotos || []) {
    if (!(await mediaExists(src))) continue;
    const fig = document.createElement("figure");
    fig.className = "finale-photos__item";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "A forever memory";
    img.loading = "lazy";
    fig.appendChild(img);
    fig.addEventListener("click", () => openLightbox(src, "Forever"));
    root.appendChild(fig);
  }

  if (!root.children.length) root.hidden = true;
}

/* ---------- Lightbox ---------- */
function openLightbox(src, caption = "") {
  const idx = lightboxItems.findIndex((i) => i.src === src);
  if (idx >= 0) openLightboxAt(idx);
  else {
    lightboxItems.push({ src, caption });
    openLightboxAt(lightboxItems.length - 1);
  }
}

function openLightboxAt(index) {
  if (!lightboxItems.length) return;
  lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
  const item = lightboxItems[lightboxIndex];
  const box = $("#lightbox");
  const img = $("#lightbox-image");
  const cap = $("#lightbox-caption");
  if (!box || !img) return;
  img.src = item.src;
  img.alt = item.caption || "Memory";
  if (cap) cap.textContent = item.caption || "";
  box.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const box = $("#lightbox");
  if (!box) return;
  box.hidden = true;
  document.body.style.overflow = "";
}

function setupLightbox() {
  $("#lightbox-close")?.addEventListener("click", closeLightbox);
  $("#lightbox-prev")?.addEventListener("click", () => openLightboxAt(lightboxIndex - 1));
  $("#lightbox-next")?.addEventListener("click", () => openLightboxAt(lightboxIndex + 1));
  $("#lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });

  let touchX = null;
  $("#lightbox")?.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  $("#lightbox")?.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].screenX - touchX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) openLightboxAt(lightboxIndex + 1);
        else openLightboxAt(lightboxIndex - 1);
      }
      touchX = null;
    },
    { passive: true }
  );

  document.addEventListener("keydown", (e) => {
    const box = $("#lightbox");
    if (!box || box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") openLightboxAt(lightboxIndex + 1);
    if (e.key === "ArrowLeft") openLightboxAt(lightboxIndex - 1);
  });
}

/* ---------- Progress ---------- */
function buildChapterNav() {
  const list = $("#chapter-list");
  if (!list) return;
  list.innerHTML = "";
  CHAPTERS.forEach((ch) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${ch.id}`;
    a.textContent = ch.label;
    a.title = ch.label;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(ch.id)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
      });
    });
    li.appendChild(a);
    list.appendChild(li);
  });
}

function updateProgress() {
  const links = $$("#chapter-list a");
  const bar = $("#chapter-bar");
  let activeId = CHAPTERS[0].id;
  let activeIndex = 0;
  const mid = window.innerHeight * 0.4;

  CHAPTERS.forEach((ch, i) => {
    const el = document.getElementById(ch.id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= mid && rect.bottom > mid) {
      activeId = ch.id;
      activeIndex = i;
    }
  });

  links.forEach((a) => {
    a.setAttribute(
      "aria-current",
      a.getAttribute("href") === `#${activeId}` ? "true" : "false"
    );
  });

  if (bar) {
    const pct = ((activeIndex + 1) / CHAPTERS.length) * 100;
    bar.style.width = `${pct}%`;
  }
}

/* ---------- Reveals ---------- */
function observeRevealElements(elements) {
  const list = [...elements].filter(Boolean);
  if (!list.length) return;

  if (reducedMotion) {
    list.forEach((el) => el.classList.add("is-in"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.delay || 0) * 160;
            window.setTimeout(() => entry.target.classList.add("is-in"), delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
  }

  list.forEach((el) => revealObserver.observe(el));
}

function setupReveals() {
  observeRevealElements($$(".reveal, .funny-card, .memory-item, .life-stage"));
}

function setupVow() {
  const section = $("#ch-vow");
  const lines = $$(".vow-line");
  if (!section || !lines.length) return;
  let played = false;

  const play = () => {
    if (played) return;
    played = true;
    lines.forEach((line, i) => {
      window.setTimeout(
        () => line.classList.add("is-visible"),
        reducedMotion ? 0 : i * 1300
      );
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        play();
        io.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  io.observe(section);
}

function setupMemoriesChapter() {
  const section = $("#ch-memories");
  if (!section) return;
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        section.classList.add("is-shown");
        revealMemoryItems();
        io.disconnect();
      }
    },
    { threshold: 0.12 }
  );
  io.observe(section);
}

function setupRakhi() {
  const section = $("#ch-rakhi");
  if (!section) return;
  createPetals($("#rakhi-petals"), 12);
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        section.classList.add("is-active");
        io.disconnect();
      }
    },
    { threshold: 0.35 }
  );
  io.observe(section);
}

function setupSecret() {
  $("#last-secret")?.addEventListener("click", () => {
    const reveal = $("#secret-reveal");
    const btn = $("#last-secret");
    if (!reveal) return;
    reveal.hidden = false;
    if (btn) btn.hidden = true;
  });
}

/* ---------- Start / Replay ---------- */
function enterStory() {
  const opening = $("#opening");
  const story = $("#main-story");
  const rail = $("#chapter-rail");
  const bar = $("#chapter-bar");

  // Start / continue looping music when entering the story
  Music.play();

  const veil = $("#opening-transition");
  veil?.classList.add("is-active");

  opening?.classList.add("is-exiting");

  window.setTimeout(
    () => {
      if (opening) opening.hidden = true;
      veil?.classList.remove("is-active");
      if (story) story.hidden = false;
      if (rail) rail.hidden = false;
      if (bar) bar.hidden = false;
      setupReveals();
      revealMemoryItems();
      setupMemoriesChapter();
      observeRevealElements($$(".video-card, .video-grid__empty"));
      $$(".funny-card, .life-stage, .video-card").forEach((el, i) => {
        window.setTimeout(() => el.classList.add("is-in"), reducedMotion ? 0 : 60 + i * 50);
      });
      setupVow();
      setupRakhi();
      createBurst($("#bridge-particles"), 22);
      createDust($("#finale-dust"), 30);
      startStarCanvas($("#promise-stars"), { count: 40, speed: 0.15 });
      startStarCanvas($("#vow-stars"), { count: 35, speed: 0.12 });
      startStarCanvas($("#finale-stars"), { count: 65, speed: 0.22 });
      window.scrollTo({ top: 0, behavior: "auto" });
      requestAnimationFrame(updateProgress);
    },
    reducedMotion ? 0 : 700
  );
}

function replayStory() {
  closeLightbox();
  const secret = $("#secret-reveal");
  const secretBtn = $("#last-secret");
  if (secret) secret.hidden = true;
  if (secretBtn) secretBtn.hidden = false;

  const mainVid = $("#finale-main-video");
  if (mainVid) {
    mainVid.pause();
    try {
      mainVid.currentTime = 0;
    } catch {
      /* ignore */
    }
  }

  $("#main-story") && ($("#main-story").hidden = true);
  const opening = $("#opening");
  if (opening) {
    opening.hidden = false;
    opening.classList.remove("is-exiting");
  }
  $("#chapter-rail") && ($("#chapter-rail").hidden = true);
  $("#chapter-bar") && ($("#chapter-bar").hidden = true);

  $$(".opening__line, .opening__actions").forEach((el) => {
    el.classList.remove("is-visible", "is-dim");
  });
  $("#opening-scene")?.classList.remove("is-visible", "is-settled");
  $("#opening-transition")?.classList.remove("is-active");
  $$(".vow-line").forEach((el) => el.classList.remove("is-visible"));
  $("#ch-rakhi")?.classList.remove("is-active");

  window.scrollTo({ top: 0, behavior: "auto" });
  runOpeningSequence();
}

/* ---------- Init ---------- */
async function init() {
  applyAssetVersions();
  personalize();
  buildLetter();
  buildChapterNav();
  setupLightbox();
  setupSecret();
  setupExclusiveMedia();
  createDust($("#opening-dust"), 32);
  startStarCanvas($("#opening-stars"), { count: 80, speed: 0.2 });

  runOpeningSequence();
  $("#enter-story")?.addEventListener("click", enterStory);
  $("#replay-story")?.addEventListener("click", replayStory);

  window.addEventListener(
    "scroll",
    () => {
      if (!$("#main-story")?.hidden) updateProgress();
    },
    { passive: true }
  );

  await Promise.all([
    Music.init(),
    bindStaticPhotos(),
    buildChildhood(),
    buildTimeline(),
    buildFunny(),
    buildVideoGrid(),
    buildMemories(),
    buildFinalePhotos(),
    setupVideo($("#finale-main-video"), storyConfig.finaleMainVideo),
  ]);
}

document.addEventListener("DOMContentLoaded", init);
