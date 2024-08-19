import { Vector3 } from "three/src/Three.js"

class Controller{
    constructor(camera, document){
        this.camera = camera
        this.document = document
    }

    moveCamera(vector){
        let currentVec = this.camera.position
        this.camera.position.addVectors(currentVec, vector)
    }

    update(){
        const scaleFactor = 0.001;
        this.document.addEventListener('keydown', function(event) {
            let vector = new Vector3(0,0,0)
            if (event.key === 'a') {
                vector.addVectors(vector,new Vector3(-scaleFactor,0,0))
            } 

            if (event.key === 'w') {
                vector.addVectors(vector,new Vector3(0,scaleFactor,0))
            } 

            if (event.key === 'd') {
                vector.addVectors(vector,new Vector3(scaleFactor,0,0))
            } 

            if (event.key === 's') {
                vector.addVectors(vector,new Vector3(0,-scaleFactor,0))
            } 

            this.moveCamera(vector)
            // if (event.key === 'left') {
            //     this.left = true;
            // } else this.left = false
        }.bind(this));
    }
}

export default Controller