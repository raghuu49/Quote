let button=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[{quote:"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",person:'Albert Einstien'}
    ,{quote:"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
,person:'Marlyn Monroe'},
{quote:"It does not matter how slowly you go as long as you do not stop.",person:'Confucius'}
,{quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",person:'Steve Jobs'},
{quote:"The way to get started is to quit talking and begin doing.",person:'Walt Disney'},
{quote:"The future belongs to those who believe in the beauty of their dreams.",person:'Eleanor Roosevalt'},
{quote:"Those who think can change the world are the ones who do",person:'Steve Jobs'}
];
let backgrounds=['url("img1.jpg")','url("img2.jpg")','url("img3.jpg")','url("img4.jpg")','url("img5.jpg")'];
button.addEventListener("click",function() {
    let random= Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
    let background=Math.floor(Math.random()*backgrounds.length);
    body.style.backgroundImage=backgrounds[background];
})