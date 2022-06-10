// const baseUrl = "https://aztro.sameerkumar.website"


//  let sign = ['sagittarius', 'aquarius', 'capricorn', 'aries', 'libra', 'virgo',
// 'scorpio', 'taurus', 'pisces', 'gemini', 'leo', 'cancer'];
// let day = ['today', 'yesterday', 'tomorrow'];

const URL = `https://aztro.sameerkumar.website?sign=LEO&day=today`


const form = document.querySelector('#search');


function getData (event) {
    event.preventDefault();
    let options = document.querySelector('#virgo').value;
    let signName = document.querySelector('#sign-name')
    let horoscope = document.querySelector("#description")

    console.log(options)


 fetch(`https://aztro.sameerkumar.website?sign=${options}&day=today`, {
     method: 'POST'
 })
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))
}

form.addEventListener("submit", getData)


  