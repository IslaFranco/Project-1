// console.log("I love pizza");
// const url = ""

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))
const URL = 'https://aztro.sameerkumar.website/?sign=leo&day=today';

fetch(URL, {
    method: 'POST'
})
.then(res => res.json())
.then(json => {
    const date = json.current_date;
    console.log(date)
});