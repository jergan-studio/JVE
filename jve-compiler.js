function compileJVE(code) {

    // Scene background
    const bgMatch = code.match(/background:\s*(\w+);/);
    if (bgMatch) {
        scene.background = new THREE.Color(bgMatch[1]);
    }

    // Cube creation
    const cubeRegex = /cube\s+(\w+)\s*{([\s\S]*?)}/g;
    let match;

    while ((match = cubeRegex.exec(code)) !== null) {
        const name = match[1];
        const body = match[2];

        const sizeMatch = body.match(/size:\s*(\d+);/);
        const colorMatch = body.match(/color:\s*(\w+);/);
        const posMatch = body.match(/position:\s*([\d\-]+),\s*([\d\-]+),\s*([\d\-]+);/);

        const size = sizeMatch ? parseInt(sizeMatch[1]) : 1;
        const color = colorMatch ? colorMatch[1] : "white";

        const geometry = new THREE.BoxGeometry(size, size, size);
        const material = new THREE.MeshBasicMaterial({ color });
        const cube = new THREE.Mesh(geometry, material);

        if (posMatch) {
            cube.position.set(
                parseInt(posMatch[1]),
                parseInt(posMatch[2]),
                parseInt(posMatch[3])
            );
        }

        scene.add(cube);
        objects[name] = cube;
    }

    // onUpdate block
    const updateMatch = code.match(/onUpdate\s*{([\s\S]*?)}/);

    if (updateMatch) {
        const updateCode = updateMatch[1];

        updateFunction = function() {
            for (let name in objects) {
                const obj = objects[name];

                if (updateCode.includes(name + ".rotateY")) {
                    obj.rotation.y += 0.01;
                }
            }
        };
    }
}
