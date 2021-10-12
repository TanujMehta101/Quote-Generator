const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextBtn = document.getElementById("next-btn");

// nextBtn.addEventListener("click",newQuote);

if(nextBtn){
    nextBtn.addEventListener("click",newQuote);
  }

function newQuote(){
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `~${data.author}`;
        });
}





// var quote = [
//     'A',
//     'B',
//     'C'
// ]

// function newQuote() {
//   var randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber);
//   document.getElementById("quoteDisplay").innerHTML = quote[randomNumber];
// }

