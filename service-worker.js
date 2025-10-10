// script.js — language binding, PWA install, SW registration, demo actions
// ── APY 문구를 모든 언어에서 '≤15% APY'로 강제 보정합니다.

const LANG_DEFAULT = "uk"; // Ukrainian first
const langSwitcher = document.getElementById("langSwitcher");

const i18nTargets = {
  app_title: "app_title",
  tagline: "tagline",
  nav_ubi: "nav_ubi",
  nav_sendpay: "nav_sendpay",
  nav_stake: "nav_stake",
  nav_rewards: "nav_rewards",
  nav_support: "nav_support",
  nav_login: "nav_login",
  ubi_desc: "ubi_desc",
  sendpay_desc: "sendpay_desc",
  stake_desc: "stake_desc",
  rewards_desc: "rewards_desc",
  support_desc: "support_desc",
  login_desc: "login_desc",
  qr_title: "qr_title",
  qr_desc: "qr_desc",
  demo_title: "demo_title",
  demo_bullets: "demo_bullets",
  status_online: "status_online",
  status_security: "status_security",
  status_chain: "status_chain",
  footer_terms: "footer_terms",
  footer_policy: "footer_policy",
  footer_contact: "footer_contact"
};

function forceStakeAPR15(){
  const el = document.getElementById("stake_desc");
  if(!el) return;
  // 어떤 언어 문자열이든 APY 숫자를 ≤15%로 정규화
  // 1) APY 숫자 교체
  let text = el.textContent || "";
  // APY 숫자 패턴 치환 (31.4, 31, 20 등 → 15)
  text = text.replace(/(\d+([.,]\d+)?)\s*%/g, "15%");
  // 2) '≤' 기호 보장
  if(!/≤\s*15%/.test(text)){
    // '15%' 앞에 '≤'가 없으면 추가
    text = text.replace(/15%/, "≤15%");
  }
  // 3) 'APY' 없으면 보강
  if(!/APY/i.test(text)){
    text += " APY";
  }
  el.textContent = text;
}

function applyLanguage(code){
  const dict = (window.PWB_LANGS && window.PWB_LANGS[code]) || window.PWB_LANGS[LANG_DEFAULT];
  if(!dict) return;

  Object.entries(i18nTargets).forEach(([key, id])=>{
    const el = document.getElementById(id);
    if(!el) return;
    if(key === "demo_bullets" && Array.isArray(dict[key])){
      el.innerHTML = dict[key].map(li => `<li>${li}</li>`).join("");
    }else{
      el.textContent = dict[key] || "";
    }
  });

  // 언어 적용 후 APY 문구 보정
  forceStakeAPR15();

  document.documentElement.lang = code;
  localStorage.setItem("pwb_lang", code);
}

langSwitcher?.addEventListener("change", (e)=>{
  applyLanguage(e.target.value);
});

// Initialize language
(function initLang(){
  const saved = localStorage.getItem("pwb_lang");
  if(saved && window.PWB_LANGS?.[saved]) {
    langSwitcher.value = saved;
    applyLanguage(saved);
  } else {
    langSwitcher.value = LANG_DEFAULT;
    applyLanguage(LANG_DEFAULT);
  }
})();

// PWA Install
let deferredPrompt = null;
const btnInstall = document.getElementById("btnInstall");
window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  btnInstall?.classList.remove("hidden");
});
btnInstall?.addEventListener("click", async ()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
});

// Manual cache trigger
document.getElementById("btnCache")?.addEventListener("click", async ()=>{
  if("serviceWorker" in navigator && navigator.serviceWorker.controller){
    await fetch("./index.html").catch(()=>{});
    alert("Core content cached for offline.");
  } else {
    alert("Service worker not active yet. Reload once after first load.");
  }
});

// Service Worker Registration
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("./sw.js")
      .catch(console.error);
  });
}

// Demo actions
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const action = card.getAttribute("data-action");
    switch(action){
      case "ubi": alert("UBI demo: Claim cycle & distribution (mock)."); break;
      case "sendpay": alert("Send/Pay demo: QR pay & transfer flow (mock)."); break;
      case "stake": alert("Staking demo: ≤15% APY simulation (mock)."); break;
      case "rewards": alert("Rewards demo: Daily tasks & ecosystem benefits (mock)."); break;
      case "support": alert("Support: KYC / policy / help center (links coming soon)."); break;
      case "login": alert("Login demo: Pi Browser SSO placeholder."); break;
    }
  });
});
