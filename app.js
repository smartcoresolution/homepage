// PWA 설치 이벤트 처리 (기본 예시)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'inline-block';
});

window.installPWA = async function() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'none';
};

// 서비스워커 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(console.warn);
  });
}


// ===== 서비스 드롭다운: 모바일/태블릿 클릭 토글 + 바깥 클릭 닫기 =====
(function(){
  const dd = document.getElementById('svcDropdown');
  if (!dd) return;
  const btn = dd.querySelector('.dropbtn');
  const panel = dd.querySelector('.dropdown-content');

  btn.setAttribute('aria-expanded', 'false');

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = dd.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  dd.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dd.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) {
      dd.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
