(function () {
  // Champ de particules limité au hero (.home). Canvas en position absolute
  // dans la section, en fond (z-index 0) sous le contenu. Pause dès que le
  // hero sort de l'écran (économie batterie).
  var section = document.querySelector('.home');
  if (!section || typeof THREE === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.id = 'particles-bg';
  section.insertBefore(canvas, section.firstChild);

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 9;

  // Texture de point doux (générée en canvas).
  function makeDotTexture() {
    var size = 64;
    var c = document.createElement('canvas');
    c.width = c.height = size;
    var ctx = c.getContext('2d');
    var g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.4)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(c);
  }
  var dotTex = makeDotTexture();

  // Volume couvrant largement le hero.
  var BX = 16, BY = 10, BZ = 8;

  var COUNT = 180;
  var pos = new Float32Array(COUNT * 3);
  for (var i = 0; i < COUNT; i++) {
    pos[i * 3]     = (Math.random() - 0.5) * 2 * BX;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 2 * BY;
    pos[i * 3 + 2] = (Math.random() - 0.5) * BZ - 1;
  }
  var geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  var particles = new THREE.Points(geo, new THREE.PointsMaterial({
    size: 0.1,
    map: dotTex,
    color: 0x9aa0ff,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  }));
  particles.frustumCulled = false;
  scene.add(particles);

  function resize() {
    var w = section.clientWidth;
    var h = section.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  // Parallaxe souris amortie.
  var mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener('pointermove', function (e) {
    tx = (e.clientX / window.innerWidth) * 2 - 1;
    ty = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  // Pause hors-écran / onglet inactif.
  var visible = true, raf = null, t = 0;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible && !raf) animate();
    }, { threshold: 0 }).observe(section);
  }
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && visible && !raf) animate();
  });

  function animate() {
    if (!visible || document.hidden) { raf = null; return; }
    raf = requestAnimationFrame(animate);
    t += 0.016;

    mx += (tx - mx) * 0.04;
    my += (ty - my) * 0.04;

    particles.rotation.y = t * 0.03;
    particles.position.x = mx * 0.5;
    particles.position.y = -my * 0.5;

    renderer.render(scene, camera);
  }
  animate();
})();
