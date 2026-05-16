window.onscroll = function () {
  const backToTop = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

const backToTop = document.getElementById("backToTop");
backToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



function openCVPage(language) {
  // فتح صفحة جديدة بناءً على اللغة المختارة
  let url;
  if (language === 'ar') {
      url = 'cv-ar.html';  // صفحة السيرة الذاتية بالعربية
  } else if (language === 'en') {
      url = 'cv-en.html';  // صفحة السيرة الذاتية بالإنجليزية
  }
  
  // فتح صفحة جديدة
  window.open(url, '_blank');
}