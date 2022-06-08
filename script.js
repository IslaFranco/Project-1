
const URL = 'https://aztro.sameerkumar.website/?sign=leo&day=today'


const form = document.querySelector('#searchBar');
const sign = ['sagittarius', 'aquarius', 'capricorn', 'aries', 'libra', 'virgo',
'scorpio', 'taurus', 'pisces', 'gemini', 'leo', 'cancer'];
const day = ['today', 'yesterday', 'tomorrow'];



function getData (event) {
    event.preventDefault();
    let textInput = document.querySelector('#inputBar').value;
    let signName = document.querySelector('#sign-name')
    let horoscope = document.querySelector("#description")

    console.log(textInput)


 fetch(URL, {
    method: 'POST'
})
.then(res => res.json())
.then(json => {
    const date = json.current_date;
    const num = json.lucky_number;
    const horoscope = json.description;
    const vibe = json.mood;
    const match = json.compatibility;
    const shade = json.color;
    console.log(date, num, horoscope, vibe, match, shade)
});
}

form.addEventListener("submit", getData)

// this lets you get info that you've console logged, you want this in the dom but dont know how.
//you have the link but they're specified to a certain sign already, i need them blank so when 
//someone wants to search for others, it can work. (string interpilation)
// so far you can enter one thing in the textbox and itll still print out but its not what you wnat to search for.
//if you enter in "3" itll give you what ive console logged.


