/**
 * @name leave-call-hotkey
 * @version 0.0.2
 * @description a small better discord plugin which leaves call when Ctrl + Shift + s key pressed
 * @author Oskar#2843
 *   
 */

 let hotkeys = {
    leaveCall: "F17",
    toggleCamera: "F18"
}


 module.exports = class oskar {
    
    load() {}
    start() {
        window.onkeyup = function(e){
            let functionName = Object.keys(hotkeys)[Object.values(hotkeys).indexOf(e.key)]
            if(hotkeyFunctions[functionName]){
                hotkeyFunctions[functionName]()
            }
        }
    }
    stop() {}
}

let hotkeyFunctions = {
    leaveCall(){
        console.log("[BETTER_DICORD]: leaveCall hotkey function triggered.")
        try {
            document.querySelector("button[aria-label='Verbindung trennen'").click()
        } catch (error) {
            console.log("Leve call element not found")
        }
        
    },
    toggleCamera(){
        const cameraOnButton = document.querySelector("button[aria-label='Kamera anschalten']")
        const cameraOffButton = document.querySelector("button[aria-label='Kamera ausschalten']")
        console.log("[BETTER_DICORD]: toggleCamera hotkey function triggered.")
        if(cameraOnButton){
            cameraOnButton.click()
        }else{
            cameraOffButton.click()
        }

    }
}

