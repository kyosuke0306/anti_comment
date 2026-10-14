"use strict";

/* =========================================================
 * SVGアイコン集（絵文字は使わない）
 * すべて固定文字列なので innerHTML で挿入してよい。
 * ========================================================= */

const svg = (viewBox, inner, extra = "") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" aria-hidden="true" focusable="false" ${extra}>${inner}</svg>`;

// 線で描くUIアイコン（色は currentColor）
const line = (inner) =>
  svg("0 0 24 24", inner, 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"');

// アバター用：背景の円＋顔
const face = (bg, inner) =>
  svg("0 0 48 48", `<circle cx="24" cy="24" r="24" fill="${bg}"/>${inner}`);

const ICONS = {
  reply: line('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.2-4.6A8 8 0 1 1 21 12z"/>'),
  repost: line('<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>'),
  heart: line('<path d="M12 20s-7-4.4-9.2-9A4.9 4.9 0 0 1 12 6.2 4.9 4.9 0 0 1 21.2 11C19 15.6 12 20 12 20z"/>'),
  heartFill: svg("0 0 24 24", '<path fill="currentColor" d="M12 20s-7-4.4-9.2-9A4.9 4.9 0 0 1 12 6.2 4.9 4.9 0 0 1 21.2 11C19 15.6 12 20 12 20z"/>'),
  back: line('<path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/>'),
  warning: line('<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
  lock: line('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  camera: line('<path d="M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="4"/>'),
  trophy: line('<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/>'),
  eye: line('<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>'),

  // ロゴ：吹き出し＋稲妻
  logo: svg("0 0 64 64",
    '<path fill="#1d9bf0" d="M32 6c15 0 26 9.6 26 22S47 50 32 50c-3 0-5.8-.4-8.4-1.1L12 56l2.6-10.4C9.3 41.7 6 35.2 6 28 6 15.6 17 6 32 6z"/>' +
    '<path fill="#ffd23f" stroke="#0b0d12" stroke-width="2" stroke-linejoin="round" d="M35 13L22 31h9l-4 15 14-19h-9z"/>'),

  // 論破ゲージのつまみ：交差した剣
  swords: svg("0 0 32 32",
    '<g stroke="#0b0d12" stroke-width="1.5" stroke-linejoin="round">' +
    '<path fill="#e8ecf3" d="M4 4l3 0 13 13-3 3L4 7z"/><path fill="#ffd23f" d="M15 21l6-6 2 2-6 6z"/><path fill="#8b5a2b" d="M20 22l2-2 5 5-2 2z"/>' +
    '<path fill="#e8ecf3" d="M28 4l-3 0-13 13 3 3L28 7z"/><path fill="#ffd23f" d="M17 21l-6-6-2 2 6 6z"/><path fill="#8b5a2b" d="M12 22l-2-2-5 5 2 2z"/>' +
    "</g>"),

  // 演出用
  flame: svg("0 0 32 40",
    '<path fill="#ff3b1f" d="M16 2c2 7 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 1 4 3 6 5 6-2-6 0-13 2-18z"/>' +
    '<path fill="#ffb02e" d="M16 18c1 4 7 6 7 12a7 7 0 0 1-14 0c0-3 2-5 3-6 .5 2 1.5 3 3 3-1-3 0-6 1-9z"/>' +
    '<path fill="#fff3b0" d="M16 28c.5 2 3 3 3 5a3 3 0 0 1-6 0c0-1.5 1-2.5 3-5z"/>'),
  anger: svg("0 0 32 32",
    '<g fill="none" stroke="#ff3b4e" stroke-width="4" stroke-linecap="round">' +
    '<path d="M4 12c5 0 8-3 8-8"/><path d="M20 4c0 5 3 8 8 8"/><path d="M28 20c-5 0-8 3-8 8"/><path d="M12 28c0-5-3-8-8-8"/></g>'),
  skull: svg("0 0 32 32",
    '<path fill="#e8ecf3" d="M16 3C9 3 4 8 4 14.5c0 4 2 7 5 8.6V28h14v-4.9c3-1.6 5-4.6 5-8.6C28 8 23 3 16 3z"/>' +
    '<circle cx="11" cy="15" r="3.4" fill="#0b0d12"/><circle cx="21" cy="15" r="3.4" fill="#0b0d12"/>' +
    '<path fill="#0b0d12" d="M16 19l-2 3.5h4z"/><path stroke="#0b0d12" stroke-width="1.5" d="M13 25v3M16 25v3M19 25v3"/>'),

  // アバター
  me: face("#1d9bf0",
    '<circle cx="24" cy="19" r="8" fill="#e8ecf3"/><path fill="#e8ecf3" d="M9 40c2-8 8-12 15-12s13 4 15 12a24 24 0 0 1-30 0z"/>'),
  lv1: face("#7ee787",
    '<circle cx="17" cy="21" r="3" fill="#0b0d12"/><circle cx="31" cy="21" r="3" fill="#0b0d12"/>' +
    '<path d="M16 31q8 5 16 0" fill="none" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path d="M22 33h6v3a3 3 0 0 1-6 0z" fill="#ff7b9c"/>'),
  lv2: face("#56d4dd",
    '<path d="M13 21h8M27 21h8" stroke="#0b0d12" stroke-width="3" stroke-linecap="round"/>' +
    '<circle cx="17" cy="23" r="2" fill="#0b0d12"/><circle cx="31" cy="23" r="2" fill="#0b0d12"/>' +
    '<path d="M18 33h12" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>'),
  lv3: face("#79c0ff",
    '<g fill="none" stroke="#0b0d12" stroke-width="2.5"><circle cx="17" cy="21" r="5.5"/><circle cx="31" cy="21" r="5.5"/><path d="M22.5 21h3M8 19l3.5 1M40 19l-3.5 1"/></g>' +
    '<circle cx="17" cy="21" r="1.8" fill="#0b0d12"/><circle cx="31" cy="21" r="1.8" fill="#0b0d12"/>' +
    '<path d="M18 34h12" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>'),
  lv4: face("#d2a8ff",
    '<path d="M12 15l8 2M28 18l8-3" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path d="M13 22q4 -3 8 0M27 22q4 -3 8 0" fill="none" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>' +
    '<path d="M17 33q9 2 15-4" fill="none" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>'),
  lv5: face("#ff7b72",
    '<path fill="#ffd23f" stroke="#0b0d12" stroke-width="1.5" stroke-linejoin="round" d="M12 13l3-9 5 6 4-8 4 8 5-6 3 9z"/>' +
    '<path d="M13 20l8 3M35 20l-8 3" stroke="#0b0d12" stroke-width="3" stroke-linecap="round"/>' +
    '<circle cx="18" cy="25" r="2.2" fill="#0b0d12"/><circle cx="30" cy="25" r="2.2" fill="#0b0d12"/>' +
    '<path d="M18 35q6 3 12 0" fill="none" stroke="#0b0d12" stroke-width="2.5" stroke-linecap="round"/>'),
};

// アイコン付きの要素を作る
function iconEl(name, cls = "icon") {
  const s = document.createElement("span");
  s.className = cls;
  s.innerHTML = ICONS[name];
  return s;
}
