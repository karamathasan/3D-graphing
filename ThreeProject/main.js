import * as THREE from 'three'
const scene = new THREE.Scene();

//Scene
const geometry = new THREE.SphereGeometry(3, 64, 64) 
const material = new THREE.MeshStandardMaterial({
  color:"#ffffff"
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light = new THREE.PointLight("0xffffff", 100, 100)
light.position.set(0,10,10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100)
camera.position.z = 20
scene.add(camera)


//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)


const loop = ()=>{
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()
