// rexpres.js — funciones compartidas
const API = "https://script.google.com/macros/s/AKfycbx_4-k82bMgzjU6aeCYaQWXfb4XxybjDN7WHsPt8uNNpxCgK8Lus1dI0ZjVCrIVHyFiyg/exec";

function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.drawer') && !e.target.closest('.burger')) closeDrawer();
});

// Hero slider
function initSlider() {
  const slides = document.querySelectorAll('.h-slide');
  const dots = document.querySelectorAll('.h-dot');
  if (!slides.length) return;
  let cur = 0;
  function go(n) {
    slides[cur].classList.remove('on'); dots[cur].classList.remove('on');
    cur = n; slides[cur].classList.add('on'); dots[cur].classList.add('on');
  }
  window._goSlide = go;
  setInterval(() => go((cur + 1) % slides.length), 4500);
}

// Guardar en sessionStorage
function guardar(key, val) { try { sessionStorage.setItem(key, JSON.stringify(val)); } catch(e) {} }
function leer(key) { try { return JSON.parse(sessionStorage.getItem(key)); } catch(e) { return null; } }
