
const URL = 'https://aztro.sameerkumar.website/?sign=leo&day=today'

const form = document.querySelector('#searchBar');
const sign= ['sagittarius', 'aquarius', 'capricorn', 'aries', 'libra', 'virgo',
'scorpio', 'taurus', 'pisces', 'gemini', 'leo', 'cancer'];

function getData (event) {
    event.preventDefault();
    let textInput = document.querySelector('#inputBar')
    let signName = document.querySelector('#sign-name')

    console.log(textInput)
}

 fetch(URL, {
    method: 'POST'
})
.then(res => res.json())
.then(json => {
    const date = json.current_date;
    const num = json.lucky_number;
    const horoscope = json.description;
    console.log(date, num, horoscope)
});

form.addEventListener("submit", getData)


