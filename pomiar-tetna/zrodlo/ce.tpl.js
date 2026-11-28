// Pause to Play · Measure my pause (Wix Custom Element, tag name: measure-my-pause)
// Camera pulse reading (rPPG), all processed on the visitor's device. Nothing is sent anywhere.
const PTP_CSS = __CSS__;
const PTP_HTML = __HTML__;
const PTP_DATA = __DATA__;
const PTP_LOGO = __LOGO__;

function ptpInit(root, host) {
const $ = id => root.getElementById(id);
const D = PTP_DATA, MEAS = 20, WARM = 2;
const BREATH_SLUG = "two-breaths-through-nose-long";
const doyOf = d => Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(2026, 0, 0)) / 864e5);
const TODAY = doyOf(new Date());
const kOf = doy => { const L = D.SEQ.length, i = doy - D.START; return D.SEQ[((i % L) + L) % L]; };
const shown = k => { for (let d = TODAY; d >= D.START && d > TODAY - D.SEQ.length; d--) if (kOf(d) === k) return true; return false; };
const pick = k => { const p = D.PZ[k]; return { k, f: p[0], t: p[1], sec: p[2], steps: p[3], slug: D.S[k], img: D.IMG[p[0]] || D.IMG.stillness }; };

/* which pause: ?pause=<slug> (only if already shown), else today's */
let qs = ""; try { qs = new URLSearchParams(location.search).get("pause") || ""; } catch (e) {}
let k0 = D.S.indexOf(qs); if (k0 < 0 || !shown(k0)) k0 = kOf(TODAY);
const BK = D.S.indexOf(BREATH_SLUG);
const P = BK >= 0 ? pick(BK) : { k: -1, t: "Two breaths in through the nose, one long breath out.", steps: [], img: D.IMG.stillness };
P.sec = 120; P.t = "Two breaths in through the nose, one long breath out.";
$("wc").src = P.img;
$("back").href = "/pause/" + D.S[k0];
$("back").textContent = k0 === kOf(TODAY) ? "Back to today's pause" : "Back to your pause";
$("back").addEventListener("click", e => { e.preventDefault(); try { window.location.href = $("back").href; } catch (x) {} });

let mode = "face", stream = null, track = null, running = false, demo = false, samples = [], res = { b1: null, b2: null };
const vid = $("vid"), work = document.createElement("canvas"), wctx = work.getContext("2d", { willReadFrequently: true });

{ let s = ""; for (let i = 0; i < 60; i++) { const a = i / 60 * 2 * Math.PI, l = i % 5 ? 3 : 7, r1 = 88, r2 = 88 - l; s += `<line x1="${100 + r1 * Math.sin(a)}" y1="${100 - r1 * Math.cos(a)}" x2="${100 + r2 * Math.sin(a)}" y2="${100 - r2 * Math.cos(a)}" stroke-width="${i % 5 ? .5 : .9}"/>`; } $("ticks").innerHTML = s; }
const setProg = p => $("prog").setAttribute("stroke-dasharray", `${Math.max(0, Math.min(100, p * 100))} 100`);
const VIEWS = ["vStart", "vMid", "vPause", "vReady2", "vResult", "vNoCam"];
const show = v => VIEWS.forEach(x => $(x).hidden = x !== v);
const step = n => ["s1", "s2", "s3"].forEach((x, i) => { $(x).className = i + 1 === n ? "on" : i + 1 < n ? "done" : ""; });
const msg = (t, warn) => { $("msg").textContent = t || ""; $("msg").className = "msg" + (warn ? " warn" : ""); };
const LEDE0 = $("lede").textContent;

function setMode(m) { mode = m; $("mFace").setAttribute("aria-pressed", m === "face"); $("mFinger").setAttribute("aria-pressed", m === "finger"); $("tipsFace").hidden = m !== "face"; $("tipsFinger").hidden = m !== "finger"; }
$("mFace").onclick = () => setMode("face"); $("mFinger").onclick = () => setMode("finger");

async function openCam() {
  if (stream) return true;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: mode === "face" ? "user" : { ideal: "environment" }, width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 30 } } });
  } catch (e) { stream = null; noCam(e); return false; }
  track = stream.getVideoTracks()[0];
  vid.srcObject = stream; vid.classList.toggle("mirror", mode === "face");
  try { await vid.play(); } catch (e) {}
  if (mode === "finger") { try { await track.applyConstraints({ advanced: [{ torch: true }] }); } catch (e) {} }
  return true;
}
function closeCam() { if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; track = null; } vid.srcObject = null; }
function noCam(e) {
  const n = e && e.name;
  $("noCamText").textContent = n === "NotAllowedError" || n === "SecurityError" ? "Camera access was not allowed. Allow the camera for this site in your browser settings, or see how it works in a short demo." : "No camera is available on this device. See how it works in a short demo.";
  show("vNoCam"); msg("");
}

function grab() {
  const W = 64, H = 48; work.width = W; work.height = H;
  wctx.drawImage(vid, 0, 0, W, H);
  const d = wctx.getImageData(0, 0, W, H).data;
  let r = 0, g = 0, b = 0, n = 0, tot = 0, lum = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4, R = d[i], G = d[i + 1], B = d[i + 2]; lum += .299 * R + .587 * G + .114 * B;
    if (mode === "face") {
      const ex = (x / W - .5) / .26, ey = (y / H - .47) / .36; if (ex * ex + ey * ey > 1) continue; tot++;
      const Y = .299 * R + .587 * G + .114 * B, Cb = 128 - .1687 * R - .3313 * G + .5 * B, Cr = 128 + .5 * R - .4187 * G - .0813 * B;
      if (Cr < 135 || Cr > 175 || Cb < 80 || Cb > 130 || Y < 40) continue;
    } else tot++;
    r += R; g += G; b += B; n++;
  }
  return { n, frac: tot ? n / tot : 0, lum: lum / (W * H), r: n ? r / n : 0, g: n ? g / n : 0, b: n ? b / n : 0 };
}

function uniform(s, fs) {
  const t0 = s[0].t, t1 = s[s.length - 1].t, N = Math.floor((t1 - t0) * fs), out = { r: [], g: [], b: [] }; let j = 0;
  for (let k = 0; k < N; k++) { const t = t0 + k / fs; while (j < s.length - 2 && s[j + 1].t < t) j++; const a = s[j], c = s[j + 1], f = c.t > a.t ? (t - a.t) / (c.t - a.t) : 0; out.r.push(a.r + (c.r - a.r) * f); out.g.push(a.g + (c.g - a.g) * f); out.b.push(a.b + (c.b - a.b) * f); }
  return out;
}
function pos(u, fs) {
  const N = u.r.length, L = Math.round(1.6 * fs), h = new Array(N).fill(0);
  const sd = a => { const m = a.reduce((x, y) => x + y, 0) / a.length; return Math.sqrt(a.reduce((x, y) => x + (y - m) ** 2, 0) / a.length) || 1e-9; };
  for (let n = 0; n + L <= N; n++) {
    let mr = 0, mg = 0, mb = 0; for (let k = n; k < n + L; k++) { mr += u.r[k]; mg += u.g[k]; mb += u.b[k]; } mr /= L; mg /= L; mb /= L;
    const s1 = [], s2 = []; for (let k = n; k < n + L; k++) { const R = u.r[k] / mr, G = u.g[k] / mg, B = u.b[k] / mb; s1.push(G - B); s2.push(G + B - 2 * R); }
    const al = sd(s1) / sd(s2); const hh = s1.map((v, i) => v + al * s2[i]); const m = hh.reduce((x, y) => x + y, 0) / L;
    for (let k = 0; k < L; k++) h[n + k] += hh[k] - m;
  }
  return h;
}
function detrend(x, fs) { const w = Math.round(fs), o = []; for (let i = 0; i < x.length; i++) { let s = 0, c = 0; for (let k = Math.max(0, i - w); k <= Math.min(x.length - 1, i + w); k++) { s += x[k]; c++; } o.push(x[i] - s / c); } return o; }
function smooth(x, k) { const o = []; for (let i = 0; i < x.length; i++) { let s = 0, c = 0; for (let j = Math.max(0, i - k); j <= Math.min(x.length - 1, i + k); j++) { s += x[j]; c++; } o.push(s / c); } return o; }
function spectrum(x, fs) {
  const N = x.length, out = [];
  for (let bpm = 45; bpm <= 180; bpm += .5) { const f = bpm / 60; let re = 0, im = 0; for (let n = 0; n < N; n++) { const w = .5 - .5 * Math.cos(2 * Math.PI * n / (N - 1)), a = 2 * Math.PI * f * n / fs; re += x[n] * w * Math.cos(a); im -= x[n] * w * Math.sin(a); } out.push(re * re + im * im); }
  return out;
}
function estimate(s, useAll) {
  const fs = 30; if (s.length < 30) return null;
  const u = uniform(s, fs); if (u.r.length < fs * 6) return null;
  let sig = mode === "face" && !demo ? pos(u, fs) : (mode === "face" ? pos(u, fs) : u.r.map((v, i) => -(v * .7 + u.g[i] * .3)));
  sig = smooth(detrend(sig, fs), 1);
  const seg = fs * 8, spec = new Array(271).fill(0); let cnt = 0;
  const start = useAll ? 0 : Math.max(0, sig.length - fs * 12);
  for (let a = start; a + seg <= sig.length; a += fs) { const sp = spectrum(sig.slice(a, a + seg), fs); const tot = sp.reduce((x, y) => x + y, 0) || 1; sp.forEach((v, i) => spec[i] += v / tot); cnt++; }
  if (!cnt) return null;
  let bi = 0; spec.forEach((v, i) => { if (v > spec[bi]) bi = i; });
  let band = 0, tot = 0; spec.forEach((v, i) => { tot += v; if (Math.abs(i - bi) <= 6) band += v; });
  const y0 = spec[bi - 1] || spec[bi], y1 = spec[bi], y2 = spec[bi + 1] || spec[bi], dl = (y0 - y2) / (2 * (y0 - 2 * y1 + y2) || 1);
  return { bpm: 45 + (bi + (isFinite(dl) ? Math.max(-.5, Math.min(.5, dl)) : 0)) * .5, q: band / tot, wave: sig.slice(-fs * 5) };
}

function drawWave(w) {
  const c = $("wave"), dpr = window.devicePixelRatio || 1, W = c.clientWidth, H = c.clientHeight; if (!W) return; c.width = W * dpr; c.height = H * dpr;
  const x = c.getContext("2d"); x.scale(dpr, dpr); x.clearRect(0, 0, W, H);
  x.strokeStyle = "#DCD4C4"; x.lineWidth = 1; x.beginPath(); x.moveTo(0, H / 2); x.lineTo(W, H / 2); x.stroke();
  if (!w || w.length < 2) return; let m = 0; w.forEach(v => m = Math.max(m, Math.abs(v))); m = m || 1;
  const g = x.createLinearGradient(0, 0, W, 0); g.addColorStop(0, "rgba(184,150,79,0)"); g.addColorStop(.25, "#C9A15A"); g.addColorStop(1, "#A47A38");
  x.strokeStyle = g; x.lineWidth = 1.8; x.lineJoin = "round"; x.beginPath();
  w.forEach((v, i) => { const px = i / (w.length - 1) * W, py = H / 2 - v / m * H * .4; i ? x.lineTo(px, py) : x.moveTo(px, py); }); x.stroke();
}

function measure(which) {
  return new Promise(async done => {
    msg("Opening the camera…");
    if (!demo) { const ok = await openCam(); if (!ok) return; }
    running = true; samples = [];
    $("wc").hidden = !demo; vid.hidden = demo; $("oval").hidden = demo || mode !== "face"; $("breath").hidden = true;
    $("readout").hidden = false; $("bpmLive").textContent = "-- bpm"; $("wave").hidden = false;
    VIEWS.forEach(x => $(x).hidden = true); $("back").hidden = true;
    const t0 = performance.now() / 1000; let lastEst = 0, badLight = 0, noFace = 0;
    const finish = () => {
      const e = estimate(samples, true);
      if (!demo) closeCam();
      vid.hidden = true; $("oval").hidden = true; $("wc").hidden = false; $("back").hidden = false;
      if (!e || e.q < .1) { msg("The signal was too faint to read. Try more light and keep very still.", true); $("readout").hidden = true; done(null); return; }
      const bpm = Math.round(e.bpm); $("bpmLive").textContent = bpm + " bpm"; msg(""); done(bpm);
    };
    const tick = () => {
      if (!running) return;
      const t = performance.now() / 1000 - t0;
      if (demo) { const hr = which === 1 ? 74 : 66, ph = 2 * Math.PI * hr / 60 * t; const v = Math.sin(ph) + .35 * Math.sin(2 * ph + .6) + .25 * (Math.random() - .5); samples.push({ t, r: 120 + v * .5, g: 100 + v, b: 90 + v * .3 }); }
      else if (vid.readyState >= 2) {
        const s = grab();
        if (s.lum < 45) badLight++; else badLight = Math.max(0, badLight - 1);
        if (mode === "face" && s.frac < .25) noFace++; else noFace = Math.max(0, noFace - 1);
        if (t > WARM && s.n > 20) samples.push({ t, r: s.r, g: s.g, b: s.b });
      }
      setProg(Math.max(0, (t - WARM) / MEAS));
      if (badLight > 20) msg("A little more light, please. Face a window or a lamp.", true);
      else if (noFace > 20) msg("Bring your face into the oval and hold still.", true);
      else if (t < WARM) msg("Hold still…");
      else msg(t < WARM + 6 ? "Reading your pulse. Breathe normally." : "Nearly there. Stay still.");
      if (t - lastEst > .5 && t > WARM + 7) { lastEst = t; const e = estimate(samples, false); if (e) { drawWave(e.wave); $("bpmLive").textContent = e.q > .12 ? Math.round(e.bpm) + " bpm" : "-- bpm"; } }
      if (t >= WARM + MEAS) { running = false; finish(); return; }
      if (vid.requestVideoFrameCallback && !demo) vid.requestVideoFrameCallback(tick); else requestAnimationFrame(tick);
    };
    tick();
  });
}

function fillPauseCard() { $("pcK").textContent = "Your two-minute pause"; $("pcT").textContent = P.t; $("startPause").textContent = "Begin · 2 min"; }
async function first() {
  step(1); const b = await measure(1);
  if (b === null && !$("vNoCam").hidden) return;
  if (b === null) { show("vStart"); return; }
  res.b1 = b; $("b1").innerHTML = b + "<small> bpm</small>"; $("lede").textContent = "Your pulse before the pause. Now, the pause.";
  fillPauseCard(); show("vMid");
}
$("go").onclick = first;
$("retry").onclick = () => { show("vStart"); msg(""); };
$("demo").onclick = () => { demo = true; first(); };
$("startPause").onclick = () => runPause();

let pTimer = null;
function runPause() {
  step(2); show("vPause"); msg(""); $("readout").hidden = true; $("wave").hidden = true; setProg(0);
  $("pT").textContent = P.t;
  const breath = true, total = demo ? 20 : Math.max(60, P.sec), t0 = performance.now();
  $("wc").hidden = breath; $("breath").hidden = !breath; $("cue").hidden = !breath;
  $("pSteps").innerHTML = ""; $("pSteps").hidden = breath;
  if (!breath) P.steps.forEach(s => { const li = document.createElement("li"); li.textContent = s; $("pSteps").appendChild(li); });
  const seq = [["Breathe in", 2, .85], ["A little more", 1, 1], ["And let it all go", 6, .55]]; let i = 0, until = 0;
  const loop = () => {
    const t = (performance.now() - t0) / 1000;
    if (breath && t >= until) { const s = seq[i % 3]; $("cue").textContent = s[0]; $("orb").style.transitionDuration = s[1] + "s"; $("orb").style.transform = `scale(${s[2] * 2})`; until = t + s[1]; i++; }
    if (!breath) { const n = P.steps.length, cur = Math.min(n - 1, Math.floor(t / (total / n))); [...$("pSteps").children].forEach((li, j) => li.className = j === cur ? "on" : ""); }
    const left = Math.max(0, Math.ceil(total - t)); $("ptime").textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); setProg(t / total);
    if (t >= total) { endPause(); return; } pTimer = requestAnimationFrame(loop);
  };
  loop();
}
function endPause() { cancelAnimationFrame(pTimer); $("breath").hidden = true; $("wc").hidden = false; setProg(1); step(3); show("vReady2"); }
$("skip").onclick = endPause;
$("go2").onclick = async () => { const b = await measure(2); if (b === null) { if ($("vNoCam").hidden) show("vReady2"); return; } res.b2 = b; result(); };

function result() {
  const a = res.b1, b = res.b2, d = b - a;
  $("bRes").innerHTML = `${a} <span style="color:#B8964F">→</span> ${b}<small> bpm</small>`;
  $("lede").textContent = "Before and after your pause.";
  $("resWhy").textContent = d <= -2 ? `Your pulse slowed by ${-d} beats a minute. That's your body settling.` : d < 2 ? "Your pulse held steady. Calm doesn't always show as a lower number, and it still counts." : "Your pulse rose a little. That happens, deep breaths can lift it for a moment. Sit quietly for a minute and measure again.";
  $("readout").hidden = true; $("wave").hidden = true; $("dial").hidden = true; $("steps").hidden = true; show("vResult"); msg("");
  makeCard(a, b);
}
function lines(x, t, maxW) { const w = t.split(" "); let line = "", out = []; w.forEach(s => { const tr = line ? line + " " + s : s; if (x.measureText(tr).width > maxW && line) { out.push(line); line = s; } else line = tr; }); out.push(line); return out; }
let cardBlob = null;
function makeCard(a, b) {
  const c = document.createElement("canvas"), W = 1080, H = 1350; c.width = W; c.height = H; const x = c.getContext("2d");
  const go = () => {
    x.fillStyle = "#34362A"; x.fillRect(0, 0, W, H);
    x.save(); x.beginPath(); x.arc(W / 2, 470, 300, 0, Math.PI * 2); x.fillStyle = "#FBF9F4"; x.fill(); x.clip(); try { x.drawImage($("wc"), W / 2 - 270, 200, 540, 540); } catch (e) {} x.restore();
    const g = x.createLinearGradient(W / 2 - 340, 130, W / 2 + 340, 810); g.addColorStop(0, "#F6E7BC"); g.addColorStop(.42, "#C9A15A"); g.addColorStop(.68, "#ECD79F"); g.addColorStop(1, "#A47A38");
    x.strokeStyle = g; x.lineWidth = 5; x.beginPath(); x.arc(W / 2, 470, 330, 0, Math.PI * 2); x.stroke();
    x.lineWidth = 1.5; for (let i = 0; i < 60; i++) { const t = i / 60 * Math.PI * 2, r1 = 318, r2 = r1 - (i % 5 ? 10 : 22); x.beginPath(); x.moveTo(W / 2 + r1 * Math.sin(t), 470 - r1 * Math.cos(t)); x.lineTo(W / 2 + r2 * Math.sin(t), 470 - r2 * Math.cos(t)); x.stroke(); }
    x.textAlign = "center"; x.fillStyle = "#D2B57A"; x.font = '400 30px "Jost"'; x.fillText("THE DAILY PAUSE", W / 2, 92);
    x.fillStyle = "#F4EFE5"; x.font = '500 150px "EB Garamond"'; x.fillText(`${a}`, W / 2 - 200, 980); x.fillText(`${b}`, W / 2 + 200, 980);
    x.fillStyle = g; x.font = '400 110px "EB Garamond"'; x.fillText("→", W / 2, 972);
    x.fillStyle = "#C9C4B2"; x.font = '300 34px "Jost"'; x.fillText("beats per minute, before and after", W / 2, 1046);
    let fs = 44, L; do { x.font = `italic 400 ${fs}px "EB Garamond"`; L = lines(x, "“" + P.t + "”", 860); fs -= 2; } while (L.length > 2 && fs > 30);
    x.fillStyle = "#F4EFE5"; L.slice(0, 3).forEach((l, i) => x.fillText(l, W / 2, 1126 + i * (fs + 10)));
    x.fillStyle = "#D2B57A"; x.font = '300 30px "Jost"'; x.fillText("pause-to-play.com", W / 2, 1290);
    x.fillStyle = "rgba(201,196,178,.7)"; x.font = '300 22px "Jost"'; x.fillText("Indicative camera reading, not medical", W / 2, 1326);
    try { c.toBlob(bl => { if (!bl) return; cardBlob = bl; const u = URL.createObjectURL(bl); $("cardImg").src = u; $("save").href = u; }, "image/png"); } catch (e) { $("cardImg").hidden = true; }
  };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
}
$("share").onclick = async () => {
  if (!cardBlob) return; const f = new File([cardBlob], "my-pause.png", { type: "image/png" });
  try { if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: "My pause", text: "One small pause a day. pause-to-play.com" }); return; } } catch (e) { if (e.name === "AbortError") return; }
  msg("Sharing isn't available here. Use Save image instead.");
};
$("again").onclick = () => { res = { b1: null, b2: null }; demo = false; $("dial").hidden = false; $("steps").hidden = false; step(0); setProg(0); $("lede").textContent = LEDE0; show("vStart"); msg(""); };

window.addEventListener("pagehide", closeCam);
document.addEventListener("visibilitychange", () => { if (document.hidden && running) { running = false; closeCam(); vid.hidden = true; $("oval").hidden = true; $("wc").hidden = false; $("back").hidden = false; msg("Paused because you left the page. Tap to measure again.", true); show(res.b1 ? "vReady2" : "vStart"); } });
host._ptpStop = () => { running = false; closeCam(); };
show("vStart");
}

class MeasureMyPause extends HTMLElement {
  connectedCallback() {
    if (this._ptp) return; this._ptp = true;
    if (!document.getElementById("ptp-fonts")) {
      const l = document.createElement("link"); l.id = "ptp-fonts"; l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap";
      document.head.appendChild(l);
    }
    const root = this.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + PTP_CSS + "</style>" + PTP_HTML;
    try { ptpInit(root, this); } catch (e) { console.error("measure-my-pause", e); }
  }
  disconnectedCallback() { if (this._ptpStop) this._ptpStop(); }
}
if (!customElements.get("measure-my-pause")) customElements.define("measure-my-pause", MeasureMyPause);
