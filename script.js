// const baseUrl = "https://aztro.sameerkumar.website"


//  let sign = ['sagittarius', 'aquarius', 'capricorn', 'aries', 'libra', 'virgo',
// 'scorpio', 'taurus', 'pisces', 'gemini', 'leo', 'cancer'];
// let day = ['today', 'yesterday', 'tomorrow'];

let scrollToTopBtn = document.getElementById("scrollToTopBtn")
let rootElement = document.documentElement

function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scrollToTopBtn.addEventListener("click", scrollToTop)

const URL = `https://aztro.sameerkumar.website?sign=LEO&day=today`


const form = document.querySelector('#search');


function getData (event) {
    event.preventDefault();
    let options = document.querySelector('input[type="radio"]:checked').value;
    let signName = document.querySelector('#sign-name')
    let horoscope = document.querySelector("#description")

    console.log(options)


 fetch(`https://aztro.sameerkumar.website?sign=${options}&day=today`, {
     method: 'POST'
 })
.then(res => res.json())
.then(data => {
    document.querySelector('#sign-detail').innerHTML = `
        <p>Color🌈: ${data.color} </p>
        <p>Compatibility🤞: ${data.compatibility} </p>
        <p>Current Date📆: ${data.current_date} </p>
        <p>Date Range🗓️: ${data.date_range} </p>
        <p>Horoscope👀: ${data.description} </p>
        <p>Lucky Number🍀: ${data.lucky_number} </p>
        <p>Lucky Time⏰: ${data.lucky_time} </p>
        <p>Mood🙈: ${data.mood} </p>
        `
})
.catch(err => console.log(err))
}

form.addEventListener("submit", getData)

document.getElementById('#sign-detail').style.fontSize = "30px";


  