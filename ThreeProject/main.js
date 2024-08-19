import * as THREE from 'three'
import Controller from './controls';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)

//Scene
const geometry = new THREE.SphereGeometry(3, 64, 64) 
const material = new THREE.MeshStandardMaterial({
  color:"#ffffff"
})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light = new THREE.PointLight("#aaffaa", 100, 100)
light.position.set(0,10,10)
scene.add(light)

//Camera
const camera = new THREE.PerspectiveCamera(45, 800 / 600, 0.1, 100)
camera.position.z = 20
// camera.position.x = 2
scene.add(camera)

//Lines
const lineMaterial = new THREE.LineBasicMaterial({
	color: 0xccccff
});

const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3( -2e9, 0, 0 ),new THREE.Vector3( 2e9, 0, 0 )]);
const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3( 0, -2e9, 0 ),new THREE.Vector3( 0, 2e9, 0 )]);
const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3( 0, 0, -2e9 ),new THREE.Vector3( 0, 0, 2e9  )]);

const lineX = new THREE.Line( xAxisGeometry, lineMaterial );
const lineY = new THREE.Line( yAxisGeometry, lineMaterial );
const lineZ = new THREE.Line( zAxisGeometry, lineMaterial );
scene.add( lineX,lineY, lineZ );

const cameraController = new Controller(camera,document)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)

const loop = ()=>{
  renderer.render(scene,camera)
  cameraController.update()
  window.requestAnimationFrame(loop)
}
loop()
