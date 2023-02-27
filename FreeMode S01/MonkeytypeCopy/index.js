let words = [' hello', ' world', ' bye', ' attachment', ' just', ' help', ' name', ' call', ' visual', ' chrome'];
let empty = [];
const start = document.querySelector('.begin');
const text = document.querySelector('.text');

function randomWords(){
    console.log('function');
    words.forEach(e => {
        let random = (Math.trunc(Math.random() * words.length));
        let word = (words[random])
        empty.push(word);
        let a = document.createElement('p');
        a.textContent = e;
        text.appendChild(a);
    })
    
    return empty;

}

function checkWord(){
    for (let x = 0; x < text.textContent.length; x++){
        console.log(text.textContent[x] == 'h');
    }

}

start.addEventListener('click', () => {
    randomWords();
    checkWord();
})


