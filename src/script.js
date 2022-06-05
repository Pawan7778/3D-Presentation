import './style.css'
import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Interaction } from 'three.interaction-fixed';
import gsap from 'gsap'






// Debug
// const debugObject = {}
const gui = new dat.GUI({
    width: 400
})

/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)



const interaction = new Interaction(renderer, scene, camera);



// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enabled = true
controls.screenSpacePanning = false
controls.minPolarAngle = 1
controls.maxPolarAngle = 90
controls.mouseButtons.LEFT = THREE.MOUSE.PAN
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE

controls.touches.ONE = THREE.TOUCH.PAN
controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE








let holding1position = []
let holding2position = []
let holding3position = []
let holding4position = []


function holding2() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-31.343,
        ease : "Power4.easeOut",
    })
}
function holding3() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-70.229,
        ease : "Power4.easeOut",
    })
}
function holding4() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-100.797,
        ease : "Power4.easeOut",
    })
}
function holding5() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-138.69,
        ease : "Power4.easeOut",
    })
}
function holding6() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-178.69400000000002,
        ease : "Power4.easeOut",
    })
}
function holding7() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-217.143,
        ease : "Power4.easeOut",
    })
}
function holding8() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-256.148,
        ease : "Power4.easeOut",
    })
}
function holding9() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-295.596,
        ease : "Power4.easeOut",
    })
}
function holding10() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-335.044,
        ease : "Power4.easeOut",
    })
}
function holding11() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-374.05,
        ease : "Power4.easeOut",
    })
}
function holding12() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-413.055,
        ease : "Power4.easeOut",
    })
}
function holding13() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-452.052,
        ease : "Power4.easeOut",
    })
}
function holding14() {
    gsap.to(camera.position,{
        duration: 2,
        x : 14.309,
        y :7.795,
        z:-491.508,
        ease : "Power4.easeOut",
    })
}


var i = 0

var arr = [
    "test",
    holding2,
    holding3,
    holding4,
    holding5,
    holding6,
    holding7,
    holding8,
    holding9,
    holding10,
    holding11,
    holding12,
    holding13,
    holding14,
]


function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
}

const btn_nxt = document.querySelector('button.next_btn');
btn_nxt.onclick = (event) => {
    event.preventDefault();
    const nxt = nextItem()
    nxt()
};

const btn_prev = document.querySelector('button.prev_btn');
btn_prev.onclick = (event) => {
    event.preventDefault();
    const prev = prevItem()
    prev()
};




/**
 * Model
 */
 gltfLoader.load(
    'LAST.glb',
    (gltf) =>
    {
   
        scene.add(gltf.scene)
        console.log(gltf.scene);
        
        for(const holding of gltf.scene.children)
        {
            if (holding.name === "a") {
                holding.cursor = 'Pointer'
                holding.on('click' , (ev) => {
                    document.querySelector("div.buttons").style.visibility = 'visible'
                    camera.lookAt(ev.target.position)
                    gsap.to(camera.position,{
                        duration: 2,
                        x : 14.309,
                        y :7.795,
                        z:8.222,
                        ease : "Power4.easeOut",
                    })
                })
                holding.on('touchstart' , (ev) => {
                    document.querySelector("div.buttons").style.visibility = 'visible'
                    camera.lookAt(ev.target.position)
                    gsap.to(camera.position,{
                        duration: 2,
                        x : 0,
                        y :11.706,
                        z:13.007,
                        ease : "easeOut",
                    })
                })
            }
            if (holding.name === "b") {
                holding2position.push(holding)
             
            }
            if (holding.name === "c") {
                holding3position = holding
              

            }  
            if (holding.name === "d") {
                holding4position = holding
            }  
        scene.add(gltf.scene)
}})

console.log(holding2position);


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/**
 * Camera
 */
// Base camera
camera.position.x = 14.309
camera.position.y = 7.795
camera.position.z = 27.889

gui.add(camera.position , 'x').min(-100).max(100).step(0.001).name('cameraX')
gui.add(camera.position , 'y').min(-100).max(100).step(0.001).name('cameraY')
gui.add(camera.position , 'z').min(-600).max(100).step(0.001).name('cameraZ')


scene.add(camera)

const light1 = new THREE.PointLight( "#ffff", 2, 300 );
light1.position.set( 45, 50, 70 );
scene.add( light1 );
const light2 = new THREE.PointLight( "#ffff", 1, 300 );
light2.position.set( 45, 50, -150 );
scene.add( light2 );
const light3 = new THREE.PointLight( "#ffff", 2, 300 );
light3.position.set( 45, 50, -300 );
scene.add( light3 );





/**
 * Renderer
 */

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding



/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    //Update material portal light
    // portalLightMaterial.uniforms.uTime.value = elapsedTime

    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


