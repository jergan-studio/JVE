let scene, camera, renderer;
let objects = {};
let updateFunction = null;

function initEngine() {
    const canvas = document.getElementById("game");

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.6);

    camera.position.z = 5;

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    if (updateFunction) {
        updateFunction();
    }

    renderer.render(scene, camera);
}

function runJVE() {
    scene.clear();
    objects = {};
    const code = document.getElementById("editor").value;
    compileJVE(code);
}

initEngine();
