import { Vector3 } from "three/src/Three.js"

class Controller{
    constructor(camera, document){
        this.camera = camera
        this.document = document

        this.a = false
        this.d = false
        this.w = false
        this.s = false

        this.left = false
        this.right = false
        this.up = false
        this.down = false
    }

    moveCamera(vector){
        let currentVec = this.camera.position
        this.camera.position.addVectors(currentVec, vector)
    }

    update(){
        this.document.addEventListener('keydown', function(event) {
            // Check the key code or key value
            const scaleFactor = 0.000001;
            let vector = new Vector3(0,0,0)
            if (event.key === 'a') {
                // this.a = true;
                vector += new Vector3(-1,0,0)
            } 
            // else this.a = false

            if (event.key === 'w') {
                // this.w = true;
                vector += new Vector3(1,0,0)
            } 
            // else this.w = false

            if (event.key === 'd') {
                // this.d = true;
                vector += new Vector3(1,0,0)
            } 
            // else this.d = false

            if (event.key === 's') {
                // this.s = true;
                vector += new Vector3(0,1,0)
            } 
            // else this.s = false
            this.moveCamera(vector * scaleFactor)

            // if (event.key === 'left') {
            //     this.left = true;
            // } else this.left = false
        }.bind(this));
    }
}

export default Controller