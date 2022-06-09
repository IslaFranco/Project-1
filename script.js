// const baseUrl = "https://aztro.sameerkumar.website"


 let sign = ['sagittarius', 'aquarius', 'capricorn', 'aries', 'libra', 'virgo',
'scorpio', 'taurus', 'pisces', 'gemini', 'leo', 'cancer'];
let day = ['today', 'yesterday', 'tomorrow'];

const URL = 'https://aztro.sameerkumar.website?sign=leo&day=today'


const form = document.querySelector('#search');


function getData (event) {
    event.preventDefault();
    let textInput = document.querySelector('#sign-search').value;
    let signName = document.querySelector('#sign-name')
    let horoscope = document.querySelector("#description")

    console.log(textInput)


 fetch(URL, {
    method: 'POST'
})
.then(res => res.json())
.then(data => console.log(data))
}

form.addEventListener("submit", getData)


  