const container = document.getElementById('lottie-container');

lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation.json' // مسیر فایل Lottie
});
