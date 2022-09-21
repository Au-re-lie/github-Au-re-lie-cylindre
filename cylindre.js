const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, .1, 1000)

const geometry = new THREE.CylinderGeometry(5, 5, 5, 5)
const material = new THREE.MeshBasicMaterial({ color: 0x985245, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
camera.position.z = 10

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


function animate() {
    cylinder.rotation.x += 0.001
    cylinder.rotation.y += 0.001

    renderer.render(scene, camera)

requestAnimationFrame(animate);
}

animate()
