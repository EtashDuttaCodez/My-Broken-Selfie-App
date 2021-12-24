var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function Start() {
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content
    if (content =="take my selfie"){
        Speak()
        take_snapshot()
    }
       
}

Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})
camera = document.getElementById("camera")

function Speak() {
    synth = window.speechSynthesis;
    speakData = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterthis)
    Webcam.attach(camera)
}

function take_snapshot(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + image + '">'
    })

    
}