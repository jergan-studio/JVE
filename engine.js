let scene, camera, renderer;
let objects = {};
let selectedObject = null;

let keys = {};
let isFPS = false;
let mouseDown = false;

function initEngine() {
  const canvas = document.getElementById("game");

  scene = new THREE.Scene();
  scene.background = new THREE.Color("skyblue");

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth - 450, window.innerHeight - 100);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7);
  scene.add(light);

  setupControls();
  setupModelLoader();

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  if (isFPS) {
    if (keys["w"]) camera.translateZ(-0.1);
    if (keys["s"]) camera.translateZ(0.1);
    if (keys["a"]) camera.translateX(-0.1);
    if (keys["d"]) camera.translateX(0.1);
    if (keys["q"]) camera.position.y += 0.1;
    if (keys["e"]) camera.position.y -= 0.1;
  }

  renderer.render(scene, camera);
}

function setupControls() {
  window.addEventListener("keydown", e => keys[e.key.toLowerCase()] = true);
  window.addEventListener("keyup", e => keys[e.key.toLowerCase()] = false);

  window.addEventListener("mousedown", e => {
    if (e.button === 2) mouseDown = true;
  });

  window.addEventListener("mouseup", e => {
    if (e.button === 2) mouseDown = false;
  });

  window.addEventListener("mousemove", e => {
    if (mouseDown) {
      camera.rotation.y -= e.movementX * 0.002;
      camera.rotation.x -= e.movementY * 0.002;
    }
  });

  window.addEventListener("contextmenu", e => e.preventDefault());
}

function toggleFPS() {
  isFPS = !isFPS;
}

function setupModelLoader() {
  const loader = new THREE.GLTFLoader();
  document.getElementById("modelInput").addEventListener("change", e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    loader.load(url, gltf => {
      scene.add(gltf.scene);
    });
  });
}

initEngine();
