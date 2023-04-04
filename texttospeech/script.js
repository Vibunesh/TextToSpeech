const textarea = document.querySelector("textarea"),
button = document.querySelector("button");

function texttospeech(text){
    let utternance= new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utternance);
}

button.addEventListener("click",e=>{
      texttospeech(textarea.value);
});