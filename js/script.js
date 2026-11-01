/* ============================================================
   HISTÓRIA COSTURADA — script
   Door open, chapters, thread progress, dust
   ============================================================ */

(function () {
  "use strict";

  // ---------- Chapter data ----------
  const CHAPTERS = [
    {
      id: "c1",
      num: "01",
      title: "O fio",
      img: "images/01-o-fio.webp",
      caption: "Tudo começou com um fio dourado",
      sub: "Um pontinho de luz, uma linha que não sabia onde ia dar. E de repente, era a gente sendo costurado à mão, ponto a ponto, como quem reza baixinho.",
      alt: "Mão bordando ilustração feltro menina ruiva — Capítulo 1 O fio",
      tag: "Capítulo 1 — O fio",
    },
    {
      id: "c2",
      num: "02",
      title: "Você",
      img: "images/02-voce.webp",
      caption: "Você aparecendo sendo bordada, cabelo de lã vermelha",
      sub: "Cacheada, vermelha, feita de lã quente. Eu te via nascendo no feltro e já sabia: era você, desde sempre, costurada na minha história.",
      alt: "Ilustração feltro menina cacheada vermelha — Capítulo 2 Você",
      tag: "Capítulo 2 — Você",
    },
    {
      id: "c3",
      num: "03",
      title: "Ele",
      img: "images/03-ele.webp",
      caption: "E você, costurado na minha história",
      sub: "Sorriso que aquieta, olhar que fica. Como se tivesse sido bordado junto comigo, no mesmo pedaço de pano, na mesma linha.",
      alt: "Ilustração feltro menino sorriso quente — Capítulo 3 Ele",
      tag: "Capítulo 3 — Ele",
    },
    {
      id: "c4",
      num: "04",
      title: "Testinha",
      img: "images/04-testinha.webp",
      caption: "Testinha com testinha, nosso mundo parou",
      sub: "A testa encosta, o barulho lá fora silencia. Só tem a gente, o respiro curto, o fio dourado dando um nozinho pra gente não se soltar.",
      alt: "Casal testinha com testinha selfie — Capítulo 4 Testinha",
      tag: "Capítulo 4 — Testinha",
    },
    {
      id: "c5",
      num: "05",
      title: "Pertinho",
      img: "images/05-pertinho.webp",
      caption: "Pertinho é sempre melhor",
      sub: "Foto tremida, abraço firme. Quando a gente tá pertinho assim, até a câmera entende que precisa chegar mais perto também.",
      alt: "Selfie pertinho casal abraçado — Capítulo 5 Pertinho",
      tag: "Capítulo 5 — Pertinho",
    },
    {
      id: "c6",
      num: "06",
      title: "Nosso lugar",
      img: "images/06-nosso-lugar.webp",
      caption: "Nosso lugar no mundo",
      sub: "Dois sorrisos, luz amarela, barzinho improvisado. Nosso lugar não é um mapa — é onde a gente tá rindo junto.",
      alt: "Casal selfie barzinho — Capítulo 6 Nosso lugar",
      tag: "Capítulo 6 — Nosso lugar",
    },
    {
      id: "c7",
      num: "07",
      title: "Aconchego",
      img: "images/07-aconchego.webp",
      caption: "Teu abraço é minha casa",
      sub: "Essa é a versão corrigida, clarinha, do jeito que a gente lembra: teu braço em volta, meu rosto escondido, e o mundo inteiro ficando quentinho.",
      alt: "Abraço branquinho aconchego casal — Capítulo 7 Aconchego",
      tag: "Capítulo 7 — Aconchego",
      badge: "corrigida clara",
    },
    {
      id: "c8",
      num: "08",
      title: "Noite nossa",
      img: "images/08-noite-nossa.webp",
      caption: "Nossas noites, nossas risadas",
      sub: "Luz baixa, copo plástico, gargalhada que não cabe na foto. As noites nossas têm esse brilho amassado que só quem tava lá entende.",
      alt: "Casal à noite risadas bar — Capítulo 8 Noite nossa",
      tag: "Capítulo 8 — Noite nossa",
    },
    {
      id: "c9",
      num: "09",
      title: "Sally e McQueen",
      img: "images/09-sally-mcqueen.webp",
      caption: "I'm Sally, I'm Lightning — sempre juntos",
      sub: "Essa é a nova corrigida, tom amarelado quentinho, frente das camisetas pretas: tua Sally azul e meu McQueen vermelho, costurados lado a lado. Nós dois, sempre juntos na pista.",
      alt: "Casal frente camisetas Carros Sally e McQueen — Capítulo 9",
      tag: "Capítulo 9 — Sally e McQueen",
      badge: "tom amarelado corrigido",
    },
    {
      id: "c10",
      num: "10",
      title: "De costas pro mundo",
      img: "images/10-de-costas.png",
      caption: "De costas pro mundo, de frente um pro outro",
      sub: "Original, de costas, abraçados, camisetas do Carros. O mundo desfocado lá atrás, a gente nítido aqui. Mesmo bordado, mesmo enquadramento, com a mesma moldura feltro.",
      alt: "Casal de costas abraçados camisetas Carros — Capítulo 10",
      tag: "Capítulo 10 — De costas pro mundo",
    },
    {
      id: "c11",
      num: "11",
      title: "Memória guardada",
      img: "images/11-memoria.webp",
      caption: "Guardei a gente numa polaroid",
      sub: "Como quem guarda tesouro em caixinha de costura. Pra quando a saudade apertar, é só abrir e lembrar que a gente existe assim, polaroid, eterna.",
      alt: "Mão segurando polaroid do casal — Capítulo 11 Memória guardada",
      tag: "Capítulo 11 — Memória guardada",
    },
    {
      id: "c12",
      num: "12",
      title: "Dois meses",
      img: "images/12-dois-meses.webp",
      caption: "Dois meses do outro lado da porta, e eu ainda quero costurar cada dia contigo",
      sub: "Quase beijo que virou festa. Festa que virou aliança. Dois círculos que se encontram. E eu, ainda aqui, com a agulha na mão, querendo costurar todos os próximos dias contigo.",
      alt: "Casal quase beijo festa alianças — Capítulo 12 Dois meses",
      tag: "Capítulo 12 — Dois meses",
      isLast: true,
    },
  ];

  // ---------- Year ----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Dust / spark particles ----------
  function createDust() {
    const container = document.getElementById("dust");
    if (!container) return;
    const count = window.innerWidth < 600 ? 22 : 40;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      const isSpark = i % 5 === 0;
      const size = isSpark ? 4 : i % 3 === 0 ? 2.6 : i % 3 === 1 ? 1.2 : 1.9;
      const left = ((i * 41) + (i % 7) * 3) % 100;
      const delay = (i * 0.55) % 14;
      const duration = isSpark ? 12 + (i % 5) * 2.2 : 15 + (i % 8) * 2.6;
      const drift = (i % 2 === 0 ? 1 : -1) * (6 + (i % 6) * 6);
      const color =
        i % 5 === 1 ? "var(--pink)" :
        i % 5 === 2 ? "var(--gold-soft)" :
        "var(--gold)";

      s.className = isSpark ? "is-spark" : "is-dot";
      s.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${isSpark ? "transparent" : color};
        box-shadow: ${isSpark ? "none" : `0 0 ${size * 4.5}px ${color}`};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --tx: ${drift}vw;
      `;
      container.appendChild(s);
    }
  }

  // ---------- Door open (unlock → open) ----------
  function openDoor() {
    const door = document.getElementById("door");
    if (!door) return;
    // 1) handles unlock / glow
    setTimeout(() => door.classList.add("is-unlocking"), 280);
    // 2) panels swing open
    setTimeout(() => {
      door.classList.add("is-open");
      door.classList.remove("is-unlocking");
    }, 520);
  }

  // ---------- Render chapters ----------
  function renderChapters() {
    const root = document.getElementById("chapters");
    if (!root) return;

    CHAPTERS.forEach((ch, idx) => {
      const isRight = idx % 2 === 1;

      const section = document.createElement("section");
      section.className = `chapter ${isRight ? "chapter--right" : "chapter--left"}`;
      section.dataset.chap = ch.id;
      section.style.transitionDelay = `${idx * 55}ms`;

      const badgeHtml = ch.badge
        ? `<span class="chapter__badge">${ch.badge}</span>`
        : "";

      const extrasHtml = ch.isLast
        ? `
        <div class="chapter__extras">
          <div class="chapter__extra">
            <div class="chapter__extra-title">✦ festa</div>
            <div class="chapter__extra-text">Luzes de barbante, copo plástico, riso que não cabe na foto.</div>
            <div class="chapter__extra-dots"><span></span><span></span><span></span></div>
          </div>
          <div class="chapter__extra">
            <div class="chapter__extra-title">◍ alianças</div>
            <div class="chapter__extra-text">Dois círculos que se encontram. Promessa em ponto invisível.</div>
            <div class="chapter__extra-line"></div>
          </div>
        </div>`
        : "";

      section.innerHTML = `
        <div class="chapter__node" aria-hidden="true"></div>
        <div class="chapter__node-mobile" aria-hidden="true"></div>
        <article class="chapter__card">
          <span class="chapter__pin chapter__pin--tl" aria-hidden="true"><svg viewBox="0 0 16 16" width="10" height="10"><path d="M8 13.6C3.2 10.2 1.4 7.4 3.4 5.4c1.1-1.1 2.7-.9 4.6 1.1 1.9-2 3.5-2.2 4.6-1.1 2 2 .2 4.8-4.6 8.2z" fill="currentColor"/><path d="M5.2 6.1c.9-.9 2.1-.5 2.8.6" fill="none" stroke="currentColor" stroke-width="0.55" opacity="0.35"/></svg></span>
          <span class="chapter__pin chapter__pin--tr" aria-hidden="true"><svg viewBox="0 0 16 16" width="10" height="10"><path d="M8 13.6C3.2 10.2 1.4 7.4 3.4 5.4c1.1-1.1 2.7-.9 4.6 1.1 1.9-2 3.5-2.2 4.6-1.1 2 2 .2 4.8-4.6 8.2z" fill="currentColor"/></svg></span>
          <span class="chapter__pin chapter__pin--bl" aria-hidden="true"><svg viewBox="0 0 16 16" width="9" height="9"><path d="M8 1.5l1.2 3.6h3.8l-3 2.3 1.1 3.7L8 9.2 4.9 11.1l1.1-3.7-3-2.3h3.8z" fill="currentColor"/><circle cx="8" cy="7.2" r="1.1" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.4"/></svg></span>
          <span class="chapter__pin chapter__pin--br" aria-hidden="true"><svg viewBox="0 0 16 16" width="9" height="9"><path d="M8 1.5l1.2 3.6h3.8l-3 2.3 1.1 3.7L8 9.2 4.9 11.1l1.1-3.7-3-2.3h3.8z" fill="currentColor"/></svg></span>

          <div class="chapter__media">
            <div class="chapter__frame">
              <img src="${ch.img}" alt="${ch.alt}" loading="${idx < 2 ? "eager" : "lazy"}" decoding="async" />
              <span class="chapter__tag">${ch.tag}</span>
            </div>
          </div>

          <div class="chapter__body">
            <div class="chapter__meta">
              <span class="chapter__num">capítulo ${ch.num}</span>
              <span class="chapter__meta-line"></span>
            </div>
            <h2 class="chapter__title">${ch.title}</h2>
            <blockquote class="chapter__quote">
              <span class="chapter__quote-mark" aria-hidden="true">“</span>
              <p class="chapter__caption">${ch.caption}</p>
              <p class="chapter__sub">${ch.sub}</p>
            </blockquote>
            <div class="chapter__footer">
              <div class="chapter__needle" aria-hidden="true"><span></span></div>
              <span class="chapter__fio">fio #${String(idx + 1).padStart(2, "0")} costurado</span>
              ${badgeHtml}
            </div>
            ${extrasHtml}
          </div>
        </article>
      `;

      root.appendChild(section);
    });
  }

  // ---------- Chapter reveal ----------
  function observeChapters() {
    const sections = [...document.querySelectorAll(".chapter")];
    if (!sections.length) return;

    // All chapters visible — empty "holes" on mobile are worse than no fade
    sections.forEach((s, i) => {
      // staggered subtle fade only for first paint
      s.style.transitionDelay = Math.min(i * 40, 280) + "ms";
      s.classList.add("is-visible");
    });
  }

  // ---------- Thread progress (desktop) ----------
  function setupThread() {
    const path = document.getElementById("threadPath");
    const bead = document.getElementById("threadBead");
    const story = document.getElementById("story");
    if (!path || !bead || !story) return;

    let totalLength = 0;
    try {
      totalLength = path.getTotalLength();
    } catch (e) {
      return;
    }

    path.style.strokeDasharray = String(totalLength);
    path.style.strokeDashoffset = String(totalLength);

    function update() {
      const rect = story.getBoundingClientRect();
      const vh = window.innerHeight;
      const height = rect.height;
      if (height <= 0) return;
      const progress = Math.min(
        Math.max((-rect.top + vh * 0.18) / height, 0),
        1
      );
      path.style.strokeDashoffset = String(totalLength * (1 - progress));
      bead.style.top = `${progress * 100}%`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  // ---------- Music ----------
  // Volume tuned for phone speakers + laptop (~0.48). Fade-in avoids jump.
  const TARGET_VOLUME = 0.48;
  const FADE_MS = 1400;

  function setupMusic() {
    const audio = document.getElementById("song");
    const btn = document.getElementById("musicBtn");
    if (!audio || !btn) return;

    audio.volume = 0;
    audio.loop = true;

    let fadeTimer = null;
    let unlocked = false;

    function setPlayingUI(playing) {
      btn.classList.toggle("is-playing", playing);
      btn.setAttribute("aria-pressed", playing ? "true" : "false");
      btn.setAttribute("aria-label", playing ? "Pausar música" : "Tocar música");
    }

    function clearFade() {
      if (fadeTimer) {
        cancelAnimationFrame(fadeTimer);
        fadeTimer = null;
      }
    }

    function fadeTo(target, duration) {
      clearFade();
      const start = audio.volume;
      const diff = target - start;
      if (Math.abs(diff) < 0.01) {
        audio.volume = target;
        return Promise.resolve();
      }
      const t0 = performance.now();
      return new Promise((resolve) => {
        function step(now) {
          const t = Math.min(1, (now - t0) / duration);
          // ease-out
          const e = 1 - Math.pow(1 - t, 2.2);
          audio.volume = Math.max(0, Math.min(1, start + diff * e));
          if (t < 1) {
            fadeTimer = requestAnimationFrame(step);
          } else {
            fadeTimer = null;
            resolve();
          }
        }
        fadeTimer = requestAnimationFrame(step);
      });
    }

    async function play() {
      try {
        // Start near-silent then fade up (friendlier on mobile)
        if (audio.volume < 0.05) audio.volume = 0.02;
        await audio.play();
        unlocked = true;
        setPlayingUI(true);
        await fadeTo(TARGET_VOLUME, FADE_MS);
      } catch (err) {
        // Autoplay blocked — wait for explicit tap (button already handles it)
        setPlayingUI(false);
      }
    }

    async function pause() {
      await fadeTo(0.02, 350);
      audio.pause();
      setPlayingUI(false);
    }

    let busy = false;
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (busy) return;
      busy = true;
      try {
        if (audio.paused) {
          await play();
        } else {
          await pause();
        }
      } finally {
        busy = false;
      }
    });

    // First user gesture anywhere can unlock audio (iOS/Android policy)
    function unlockOnGesture() {
      if (unlocked || !audio.paused) return;
      // Don't auto-start on scroll alone — only on real interaction with intent.
      // The button is the primary control; this just pre-warms the element.
      audio.load();
    }
    document.addEventListener("touchstart", unlockOnGesture, { once: true, passive: true });
    document.addEventListener("click", unlockOnGesture, { once: true });

    // When song ends (if loop fails) reset UI
    audio.addEventListener("ended", () => setPlayingUI(false));
    audio.addEventListener("pause", () => {
      if (audio.paused) setPlayingUI(false);
    });
    audio.addEventListener("play", () => setPlayingUI(true));

    // Soft autoplay attempt after door (often blocked on mobile — button is primary)
    setTimeout(() => {
      if (audio.paused) {
        play().catch(() => {});
      }
    }, 1100);
  }

  // ---------- Init ----------
  function init() {
    createDust();
    renderChapters();
    observeChapters();
    openDoor();
    setupMusic();
    requestAnimationFrame(() => {
      setupThread();
    });
    // Retry any image that fails to load (network blip / race)
    document.querySelectorAll(".chapter img").forEach((img) => {
      img.addEventListener("error", () => {
        const src = img.getAttribute("src");
        if (!src || img.dataset.retried) return;
        img.dataset.retried = "1";
        img.src = src.split("?")[0] + "?r=" + Date.now();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
