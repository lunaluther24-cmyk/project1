// التحديات اليومية
const challenges = [
  "اكتب 3 أشياء تحبها في نفسك",
  "ابتسم لشخص غريب اليوم",
  "خذ 5 دقائق للتنفس العميق",
  "اكتب إنجازاً صغيراً حققته",
  "ارسل رسالة شكر لصديق",
];

const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
document.getElementById("challenge").innerText = randomChallenge;

// تسجيل الـ Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('✅ Service Worker Registered'))
    .catch(err => console.error('❌ Error', err));
}

// إشعار ترحيبي عند الدخول
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

if (Notification.permission === "granted") {
  new Notification("✨ مرحبًا بك!", {
    body: "لا تنسَ تحدي نفسك اليوم 💪",
    icon: "icons/icon-192x192.png"
  });
}
