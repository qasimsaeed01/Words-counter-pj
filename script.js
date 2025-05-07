
let textinput = document.getElementById("text-input");
let words = document.getElementById("words");
let character = document.getElementById("charac");

textinput.addEventListener(`input`, () =>{
    let text = textinput.value.trim();

    // let wordcount = text ? text.split(/\s+/).length : 0;
    
    if (text) {
        wordcount = text.split(/\s+/).length;    
    }
    else{
        wordcount = 0;     
    }
   let charactercount = text.length;

    words.textContent = wordcount
    character.textContent = charactercount
}
)
