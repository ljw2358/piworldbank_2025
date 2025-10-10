// languages.js — 14 languages (UA top → RU bottom; includes pt-BR)
// 모든 언어의 6개 주요 항목(타이틀/설명)과 상단/하단/데모 텍스트 포함
// 스테이킹 문구는 전부 "≤15% APY"로 통일

window.PWB_LANGS = {
  // 1) Ukrainian
  uk: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Надіслати / Оплатити",
    nav_stake: "Стейкінг",
    nav_rewards: "Винагороди",
    nav_support: "Підтримка",
    nav_login: "Увійти",
    ubi_desc: "Пілот Universal Basic Income для піонерів.",
    sendpay_desc: "Швидкі перекази Pi та QR-оплати.",
    stake_desc: "Стейкінг Pi. ≤15% APY (демо).",
    rewards_desc: "Щоденні завдання та винагороди екосистеми.",
    support_desc: "KYC / політика / центр допомоги.",
    login_desc: "Вхід через Pi Browser (демо).",
    qr_title: "One-Touch QR",
    qr_desc: "Скануйте в Pi Browser, щоб миттєво відкрити додаток.",
    demo_title: "Живе демо",
    demo_bullets: [
      "One-tap open в Pi Browser",
      "PWA (офлайн-спершу), встановлюється",
      "Web3: UBI / Pay / Stake / Rewards"
    ],
    status_online: "Готово",
    status_security: "Посилена безпека (демо)",
    status_chain: "Готовність до Mainnet (демо)",
    footer_terms: "Умови",
    footer_policy: "Політика",
    footer_contact: "Контакти"
  },

  // 2) English
  en: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Send / Pay",
    nav_stake: "Staking",
    nav_rewards: "Rewards",
    nav_support: "Support",
    nav_login: "Login",
    ubi_desc: "Universal Basic Income pilot for pioneers.",
    sendpay_desc: "Fast Pi transfers & QR payments.",
    stake_desc: "Stake Pi. ≤15% APY (demo).",
    rewards_desc: "Daily tasks & ecosystem rewards.",
    support_desc: "KYC / policy / help center.",
    login_desc: "Pi Browser login (demo).",
    qr_title: "One-Touch QR",
    qr_desc: "Scan in Pi Browser to open the app instantly.",
    demo_title: "Live Demo",
    demo_bullets: [
      "One-tap open in Pi Browser",
      "Offline-first PWA (installable)",
      "Web3 flows: UBI / Pay / Stake / Rewards"
    ],
    status_online: "Ready",
    status_security: "Security hardened (demo)",
    status_chain: "Mainnet-ready UX (demo)",
    footer_terms: "Terms",
    footer_policy: "Policy",
    footer_contact: "Contact"
  },

  // 3) Korean
  ko: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "송금 / 결제",
    nav_stake: "예치(스테이킹)",
    nav_rewards: "리워드",
    nav_support: "고객센터",
    nav_login: "로그인",
    ubi_desc: "파이오니어를 위한 UBI 파일럿.",
    sendpay_desc: "빠른 파이 송금과 QR 결제.",
    stake_desc: "파이 예치. ≤15% APY (데모).",
    rewards_desc: "일일 미션 & 생태계 보상.",
    support_desc: "KYC / 정책 / 헬프센터.",
    login_desc: "Pi 브라우저 로그인 (데모).",
    qr_title: "원터치 QR",
    qr_desc: "Pi 브라우저로 스캔하면 즉시 실행.",
    demo_title: "라이브 데모",
    demo_bullets: [
      "Pi 브라우저 원탭 실행",
      "설치형 PWA(오프라인 우선)",
      "Web3: UBI / Pay / Stake / Rewards"
    ],
    status_online: "준비됨",
    status_security: "보안 강화 (데모)",
    status_chain: "메인넷급 UX (데모)",
    footer_terms: "이용약관",
    footer_policy: "정책",
    footer_contact: "문의"
  },

  // 4) Chinese (Simplified)
  zh: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "转账 / 支付",
    nav_stake: "质押",
    nav_rewards: "奖励",
    nav_support: "客服",
    nav_login: "登录",
    ubi_desc: "面向先锋者的 UBI 试点。",
    sendpay_desc: "快速 Pi 转账与二维码支付。",
    stake_desc: "质押 Pi。≤15% APY（演示）。",
    rewards_desc: "每日任务与生态奖励。",
    support_desc: "KYC / 政策 / 帮助中心。",
    login_desc: "Pi 浏览器登录（演示）。",
    qr_title: "一键二维码",
    qr_desc: "在 Pi 浏览器中扫描即可立即打开应用。",
    demo_title: "实时演示",
    demo_bullets: [
      "Pi 浏览器一键打开",
      "可安装 PWA（离线优先）",
      "Web3：UBI / 支付 / 质押 / 奖励"
    ],
    status_online: "已就绪",
    status_security: "安全加固（演示）",
    status_chain: "主网级体验（演示）",
    footer_terms: "条款",
    footer_policy: "政策",
    footer_contact: "联系"
  },

  // 5) Spanish
  es: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Enviar / Pagar",
    nav_stake: "Staking",
    nav_rewards: "Recompensas",
    nav_support: "Soporte",
    nav_login: "Iniciar sesión",
    ubi_desc: "Piloto de UBI para pioneros.",
    sendpay_desc: "Transferencias Pi rápidas y pagos por QR.",
    stake_desc: "Haz staking de Pi. ≤15% APY (demo).",
    rewards_desc: "Tareas diarias y recompensas del ecosistema.",
    support_desc: "KYC / políticas / centro de ayuda.",
    login_desc: "Inicio con Pi Browser (demo).",
    qr_title: "QR de un toque",
    qr_desc: "Escanea en Pi Browser para abrir al instante.",
    demo_title: "Demo en vivo",
    demo_bullets: [
      "Apertura con un toque en Pi Browser",
      "PWA instalable (offline-first)",
      "Flujos Web3: UBI / Pagar / Staking / Recompensas"
    ],
    status_online: "Listo",
    status_security: "Seguridad reforzada (demo)",
    status_chain: "UX apta para Mainnet (demo)",
    footer_terms: "Términos",
    footer_policy: "Política",
    footer_contact: "Contacto"
  },

  // 6) Portuguese (Brazil)
  "pt-BR": {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Enviar / Pagar",
    nav_stake: "Staking",
    nav_rewards: "Recompensas",
    nav_support: "Suporte",
    nav_login: "Entrar",
    ubi_desc: "Piloto de Renda Básica Universal para pioneiros.",
    sendpay_desc: "Transferências Pi rápidas e pagamentos por QR.",
    stake_desc: "Faça staking de Pi. ≤15% APY (demo).",
    rewards_desc: "Tarefas diárias e recompensas do ecossistema.",
    support_desc: "KYC / política / central de ajuda.",
    login_desc: "Login pelo Pi Browser (demo).",
    qr_title: "QR de um toque",
    qr_desc: "Escaneie no Pi Browser para abrir instantaneamente.",
    demo_title: "Demo ao vivo",
    demo_bullets: [
      "Abertura com um toque no Pi Browser",
      "PWA instalável (offline-first)",
      "Fluxos Web3: UBI / Pagar / Staking / Recompensas"
    ],
    status_online: "Pronto",
    status_security: "Segurança reforçada (demo)",
    status_chain: "UX pronta para Mainnet (demo)",
    footer_terms: "Termos",
    footer_policy: "Política",
    footer_contact: "Contato"
  },

  // 7) French
  fr: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Envoyer / Payer",
    nav_stake: "Staking",
    nav_rewards: "Récompenses",
    nav_support: "Support",
    nav_login: "Connexion",
    ubi_desc: "Pilote UBI pour pionniers.",
    sendpay_desc: "Transferts Pi et paiements QR rapides.",
    stake_desc: "Staker du Pi. ≤15% APY (démo).",
    rewards_desc: "Tâches quotidiennes & récompenses.",
    support_desc: "KYC / politique / centre d'aide.",
    login_desc: "Connexion Pi Browser (démo).",
    qr_title: "QR en un geste",
    qr_desc: "Scannez dans Pi Browser pour ouvrir instantanément.",
    demo_title: "Démo en direct",
    demo_bullets: [
      "Ouverture en un geste (Pi Browser)",
      "PWA installable (offline-first)",
      "Parcours Web3 : UBI / Paiement / Staking / Récompenses"
    ],
    status_online: "Prêt",
    status_security: "Sécurité renforcée (démo)",
    status_chain: "UX prête Mainnet (démo)",
    footer_terms: "Conditions",
    footer_policy: "Politique",
    footer_contact: "Contact"
  },

  // 8) German
  de: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Senden / Bezahlen",
    nav_stake: "Staking",
    nav_rewards: "Belohnungen",
    nav_support: "Support",
    nav_login: "Anmelden",
    ubi_desc: "UBI-Pilot für Pioniere.",
    sendpay_desc: "Schnelle Pi-Überweisungen & QR-Zahlungen.",
    stake_desc: "Pi staken. ≤15% APY (Demo).",
    rewards_desc: "Tägliche Aufgaben & Ökosystem-Belohnungen.",
    support_desc: "KYC / Richtlinien / Hilfezentrum.",
    login_desc: "Pi Browser Login (Demo).",
    qr_title: "One-Touch-QR",
    qr_desc: "Im Pi Browser scannen und sofort öffnen.",
    demo_title: "Live-Demo",
    demo_bullets: [
      "Ein-Tap-Öffnung im Pi Browser",
      "Installierbare PWA (offline-first)",
      "Web3-Flows: UBI / Pay / Staking / Rewards"
    ],
    status_online: "Bereit",
    status_security: "Gehärtete Sicherheit (Demo)",
    status_chain: "Mainnet-taugliche UX (Demo)",
    footer_terms: "Nutzungsbedingungen",
    footer_policy: "Richtlinie",
    footer_contact: "Kontakt"
  },

  // 9) Italian
  it: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Invia / Paga",
    nav_stake: "Staking",
    nav_rewards: "Ricompense",
    nav_support: "Supporto",
    nav_login: "Accedi",
    ubi_desc: "Progetto pilota UBI per pionieri.",
    sendpay_desc: "Trasferimenti Pi rapidi e pagamenti QR.",
    stake_desc: "Metti in staking Pi. ≤15% APY (demo).",
    rewards_desc: "Attività giornaliere & ricompense dell'ecosistema.",
    support_desc: "KYC / policy / help center.",
    login_desc: "Accesso Pi Browser (Demo).",
    qr_title: "QR One-Touch",
    qr_desc: "Scansiona in Pi Browser per aprire subito.",
    demo_title: "Demo Live",
    demo_bullets: [
      "Apertura con un tocco (Pi Browser)",
      "PWA installabile (offline-first)",
      "Flussi Web3: UBI / Pay / Staking / Rewards"
    ],
    status_online: "Pronto",
    status_security: "Sicurezza rinforzata (demo)",
    status_chain: "UX pronta per Mainnet (demo)",
    footer_terms: "Termini",
    footer_policy: "Politica",
    footer_contact: "Contatto"
  },

  // 10) Arabic
  ar: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "الدخل الأساسي",
    nav_sendpay: "إرسال / دفع",
    nav_stake: "الاستيك",
    nav_rewards: "المكافآت",
    nav_support: "الدعم",
    nav_login: "تسجيل الدخول",
    ubi_desc: "مشروع UBI التجريبي للروّاد.",
    sendpay_desc: "تحويلات Pi سريعة ومدفوعات QR.",
    stake_desc: "استيك Pi. ≤15% APY (تجريبي).",
    rewards_desc: "مهام يومية ومكافآت المنظومة.",
    support_desc: "KYC / السياسات / مركز المساعدة.",
    login_desc: "تسجيل عبر Pi Browser (تجريبي).",
    qr_title: "QR بلمسة واحدة",
    qr_desc: "امسح في Pi Browser للفتح فورًا.",
    demo_title: "عرض حي",
    demo_bullets: [
      "فتح بلمسة واحدة في Pi Browser",
      "PWA قابلة للتثبيت (أولوية عدم الاتصال)",
      "مسارات Web3: UBI / الدفع / الاستيك / المكافآت"
    ],
    status_online: "جاهز",
    status_security: "أمان معزّز (تجريبي)",
    status_chain: "تجربة مستخدم جاهزة للشبكة الرئيسية (تجريبي)",
    footer_terms: "الشروط",
    footer_policy: "السياسة",
    footer_contact: "اتصال"
  },

  // 11) Hindi
  hi: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "भेजें / भुगतान",
    nav_stake: "स्टेकिंग",
    nav_rewards: "रिवॉर्ड्स",
    nav_support: "सपोर्ट",
    nav_login: "लॉगिन",
    ubi_desc: "पायनियर्स के लिए UBI पायलट।",
    sendpay_desc: "तेज़ Pi ट्रांसफ़र और QR भुगतान।",
    stake_desc: "Pi स्टेक करें। ≤15% APY (डेमो)।",
    rewards_desc: "दैनिक कार्य और इकोसिस्टम रिवॉर्ड्स।",
    support_desc: "KYC / नीति / हेल्प सेंटर।",
    login_desc: "Pi ब्राउज़र लॉगिन (डेमो)।",
    qr_title: "वन-टच QR",
    qr_desc: "Pi ब्राउज़र में स्कैन करें और तुरंत खोलें।",
    demo_title: "लाइव डेमो",
    demo_bullets: [
      "Pi ब्राउज़र में वन-टच ओपन",
      "इंस्टॉल योग्य PWA (ऑफ़लाइन-फर्स्ट)",
      "Web3: UBI / भुगतान / स्टेकिंग / रिवॉर्ड्स"
    ],
    status_online: "तैयार",
    status_security: "सुरक्षा सशक्त (डेमो)",
    status_chain: "मेननेट-रेडी UX (डेमो)",
    footer_terms: "नियम",
    footer_policy: "नीति",
    footer_contact: "संपर्क"
  },

  // 12) Thai
  th: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "โอน / จ่าย",
    nav_stake: "สเตกกิ้ง",
    nav_rewards: "รางวัล",
    nav_support: "ศูนย์ช่วยเหลือ",
    nav_login: "เข้าสู่ระบบ",
    ubi_desc: "โครงการนำร่อง UBI สำหรับผู้บุกเบิก.",
    sendpay_desc: "โอน Pi และจ่ายแบบ QR อย่างรวดเร็ว.",
    stake_desc: "สเตก Pi. ≤15% APY (เดโม).",
    rewards_desc: "ภารกิจประจำวันและรางวัลระบบนิเวศ.",
    support_desc: "KYC / นโยบาย / ศูนย์ช่วยเหลือ.",
    login_desc: "ล็อกอิน Pi Browser (เดโม).",
    qr_title: "QR แตะเดียว",
    qr_desc: "สแกนด้วย Pi Browser เพื่อเปิดแอปทันที.",
    demo_title: "เดโมสด",
    demo_bullets: [
      "เปิดด้วยแตะเดียวใน Pi Browser",
      "PWA ติดตั้งได้ (ออฟไลน์ก่อน)",
      "Web3: UBI / จ่าย / สเตก / รางวัล"
    ],
    status_online: "พร้อม",
    status_security: "ความปลอดภัยแข็งแกร่ง (เดโม)",
    status_chain: "UX พร้อมเมนเน็ต (เดโม)",
    footer_terms: "เงื่อนไข",
    footer_policy: "นโยบาย",
    footer_contact: "ติดต่อ"
  },

  // 13) Vietnamese
  vi: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Gửi / Thanh toán",
    nav_stake: "Staking",
    nav_rewards: "Phần thưởng",
    nav_support: "Hỗ trợ",
    nav_login: "Đăng nhập",
    ubi_desc: "Thí điểm UBI cho những người tiên phong.",
    sendpay_desc: "Chuyển Pi nhanh & thanh toán QR.",
    stake_desc: "Staking Pi. ≤15% APY (demo).",
    rewards_desc: "Nhiệm vụ hằng ngày & phần thưởng hệ sinh thái.",
    support_desc: "KYC / chính sách / trung tâm trợ giúp.",
    login_desc: "Đăng nhập Pi Browser (demo).",
    qr_title: "QR một chạm",
    qr_desc: "Quét trong Pi Browser để mở ngay.",
    demo_title: "Bản demo trực tiếp",
    demo_bullets: [
      "Mở một chạm trong Pi Browser",
      "PWA có thể cài (ưu tiên offline)",
      "Luồng Web3: UBI / Thanh toán / Staking / Phần thưởng"
    ],
    status_online: "Sẵn sàng",
    status_security: "Bảo mật tăng cường (demo)",
    status_chain: "UX sẵn sàng mainnet (demo)",
    footer_terms: "Điều khoản",
    footer_policy: "Chính sách",
    footer_contact: "Liên hệ"
  },

  // 14) Russian (Bottom)
  ru: {
    app_title: "PiWorldBank",
    tagline: "The web3 digital bank for all humanity",
    nav_ubi: "UBI",
    nav_sendpay: "Отправить / Оплатить",
    nav_stake: "Стейкинг",
    nav_rewards: "Награды",
    nav_support: "Поддержка",
    nav_login: "Войти",
    ubi_desc: "Пилот UBI для пионеров.",
    sendpay_desc: "Быстрые переводы Pi и QR-платежи.",
    stake_desc: "Стейкинг Pi. ≤15% APY (демо).",
    rewards_desc: "Ежедневные задания и награды экосистемы.",
    support_desc: "KYC / политика / центр помощи.",
    login_desc: "Вход через Pi Browser (демо).",
    qr_title: "QR в одно касание",
    qr_desc: "Сканируйте в Pi Browser для мгновенного запуска.",
    demo_title: "Живое демо",
    demo_bullets: [
      "Открытие в одно касание (Pi Browser)",
      "Устанавливаемый PWA (offline-first)",
      "Web3: UBI / Pay / Staking / Rewards"
    ],
    status_online: "Готово",
    status_security: "Усиленная безопасность (демо)",
    status_chain: "UX, готовый к Mainnet (демо)",
    footer_terms: "Условия",
    footer_policy: "Политика",
    footer_contact: "Контакты"
  }
};
