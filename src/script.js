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
    closed: true,
    width: 300,
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
scene.add(camera);



const interaction = new Interaction(renderer, scene, camera);




// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//Controls

const controls = new OrbitControls(camera, canvas)
controls.enabled = true
controls.screenSpacePanning = true
controls.minAzimuthAngle = THREE.Math.degToRad(180 + 150)
controls.maxAzimuthAngle = THREE.Math.degToRad(180 - 140);
controls.minPolarAngle = THREE.Math.degToRad(45)
controls.maxPolarAngle = THREE.Math.degToRad(90);
controls.minDistance = 10;
controls.maxDistance = 50;
controls.mouseButtons.LEFT = THREE.MOUSE.PAN
// controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE

controls.touches.ONE = THREE.TOUCH.PAN


//Light
const light1 = new THREE.PointLight("#ffff", 3, 50);
light1.position.set(15.429, 13.675, 18.854);
scene.add(light1);



gui.add(light1.position, 'x').min(-100).max(100).step(0.001).name("PointLight1X")
gui.add(light1.position, 'y').min(-100).max(100).step(0.001).name("PointLight1Y")
gui.add(light1.position, 'z').min(-600).max(100).step(0.001).name("PointLight1Z")



const DirectionalLight = new THREE.DirectionalLight('#ffff', 0.1)
scene.add(DirectionalLight)
DirectionalLight.position.set(20, 10, 30)









let holding1position = []
let holding2position = []
let holding3position = []
let holding4position = []
let holding5position = []
let holding6position = []
let holding7position = []
let holding8position = []
let holding9position = []
let holding10position = []
let holding11position = []
let holding12position = []
let holding13position = []
let holding14position = []

function holding1() {
    
    // controls.target = holding1position[0].position
    gsap.to(camera.position, {
        duration: 4,
        x: 14.309,
        y: 7.795,
        z: 8.222,
        ease: "Power4.easeOut",
    })
    // camera.lookAt(holding1position[0].position)
    // camera.updateProjectionMatrix();
}
function holding2() {
    gsap.to(camera.position, {
        duration: 2,
        x: 14.309,
        y: 7.795,
        z: -28.343,
        ease: "Power4.easeOut",
    })
    // controls.target = holding2position[0].position
    // camera.lookAt(holding2position[0].position)
}
function holding3() {
    gsap.to(camera.position, {
        duration: 2,
        x: 7.8,
        y: 9.1,
        z: -72.348,
        ease: "Power4.easeOut",
    })
    // controls.target = holding3position[0].position
    // camera.lookAt(holding3position[0].position)
}
function holding4() {
    gsap.to(camera.position, {
        duration: 2,
        x: 7.257,
        y: 9.813,
        z: -110.881,
        ease: "Power4.easeOut",
    })
    // controls.target = holding4position[0].position
    // camera.lookAt(holding4position[0].position)
}
function holding5() {
    gsap.to(camera.position, {
        duration: 2,
        x: 7.656,
        y: 9.836,
        z: -150.612,
        ease: "Power4.easeOut",
    })
    // controls.target = holding5position[0].position
    // camera.lookAt(holding5position[0].position)
}
function holding6() {
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -188.69400000000002,
        ease: "Power4.easeOut",
    })
    // controls.target = holding6position[0].position
    // camera.lookAt(holding6position[0].position)
}
function holding7() {
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -225.143,
        ease: "Power4.easeOut",
    })
    // controls.target = holding7position[0].position
    // camera.lookAt(holding7position[0].position)
}
function holding8() {
    // controls.target = holding8position[0].position
    // camera.lookAt(holding8position[0].position)
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -263.148,
        ease: "Power4.easeOut",
    })
}
function holding9() {
    // controls.target = holding9position[0].position
    // camera.lookAt(holding9position[0].position)
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -303.596,
        ease: "Power4.easeOut",
    })
}
function holding10() {
    // controls.target = holding10position[0].position
    // camera.lookAt(holding10position[0].position)
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -345.044,
        ease: "Power4.easeOut",
    })
}
function holding11() {
    // controls.target = holding11position[0].position
    // camera.lookAt(holding11position[0].position)
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -382.05,
        ease: "Power4.easeOut",
    })
}
function holding12() {
    // controls.target = holding12position[0].position
    // camera.lookAt(holding13position[0].position)
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -420.055,
        ease: "Power4.easeOut",
    })
}
function holding13() {
    // controls.target = holding13position[0].position
    // camera.lookAt(holding13position[0].position)
        gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -460.052,
        ease: "Power4.easeOut",
    })
}
function holding14() {
    // camera.lookAt(holding14position[0].position)
    // controls.target = holding14position[0].position
    gsap.to(camera.position, {
        duration: 2,
        x: 7.309,
        y: 9.795,
        z: -500.508,
        ease: "Power4.easeOut",
    })
}


var i = 0

var arr = [
    holding1,
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
    i = i + 1;
    i = i % arr.length;
    return arr[i];
}

function prevItem() {
    if (i === 0) {
        i = arr.length;
    }
    i = i - 1;
    return arr[i];
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

let start = []
/**
 * Model
 */
gltfLoader.load(
    'start added.glb',
    (gltf) => {

        scene.add(gltf.scene)
        console.log(gltf.scene);
        

        for (const holding of gltf.scene.children) {
            if (holding.name === "start") {
                holding.position.y = 5
                holding.position.x = 14
                holding.position.z = 16

                camera.lookAt(holding.position)
                holding.cursor = 'Pointer'
                holding.on('click', (ev) => {
                    const t2 = gsap.timeline({onComplete : () => {
                        document.querySelector("div.buttons").style.visibility = 'visible'
                        camera.lookAt(holding1position[0].position)
                        camera.updateProjectionMatrix()
                    }})
                    t2.to(camera.position, { z: -500, duration: 8, delay: 0.5 })
                    t2.to(camera.position, {
                        x: 14.309,
                        y: 7.795,
                        z: 10.222, duration: 1
                    })
                    const t1 = gsap.timeline()

                    t1.to(light1.position, { z: -500, duration: 8, })
                    t1.to(DirectionalLight, { intensity: 1.2, duration: 5, ease: "easeOut" })
                    t1.to(light1, { intensity: 0, duration: 1 })

                    
                })
                holding.on('touchstart', (ev) => {
                    document.querySelector("div.buttons").style.visibility = 'visible'
                    const t2 = gsap.timeline({onComplete : () => {
                        camera.lookAt(holding1position[0].position)
                        camera.updateProjectionMatrix()
                    }})
                    t2.to(camera.position, { z: -500, duration: 8, delay: 0.5 })
                    t2.to(camera.position, {
                        x: 14.309,
                        y: 7.795,
                        z: 10.222, duration: 1
                    })
                    const t1 = gsap.timeline()

                    t1.to(light1.position, { z: -500, duration: 8, })
                    t1.to(DirectionalLight, { intensity: 1.2, duration: 5, ease: "easeOut" })
                    t1.to(light1, { intensity: 0, duration: 1 })

                    
                })
            }
            if (holding.name === "a") {
                holding1position.push(holding)
                
            }
            if (holding.name === "b") {
                holding2position.push(holding)

            }
            if (holding.name === "c") {
                holding3position.push(holding)
            }
            if (holding.name === "d") {
                holding4position.push(holding)
            }
            if (holding.name === "e") {
                holding5position.push(holding)
            }
            if (holding.name === "f") {
                holding6position.push(holding)
            }
            if (holding.name === "g") {
                holding7position.push(holding)
            }
            if (holding.name === "h") {
                holding8position.push(holding)
            }
            if (holding.name === "i") {
                holding9position.push(holding)
            }
            if (holding.name === "j") {
                holding10position.push(holding)
            }
            if (holding.name === "k") {
                holding11position.push(holding)
            }
            if (holding.name === "l") {
                holding12position.push(holding)
            }
            if (holding.name === "m") {
                holding13position.push(holding)
            }
            if (holding.name === "n") {
                holding14position.push(holding)
            }
            
        }
    })


window.addEventListener('resize', () => {
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
camera.position.x = 24.414
camera.position.y = 17.992
camera.position.z = 37.27

gui.add(camera.position, 'x').min(-100).max(100).step(0.001).name('cameraX')
gui.add(camera.position, 'y').min(-100).max(100).step(0.001).name('cameraY')
gui.add(camera.position, 'z').min(-600).max(100).step(0.001).name('cameraZ')

scene.add(camera)

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

const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


