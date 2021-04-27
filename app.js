// Part 1:

let favNumber = 7;
let baseURL = "http://numbersapi.com";

// // 1.
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//     console.log(data);
// });


// // 2.
// let favNumbers = [7, 11, 22];
// $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
//     console.log(data);
// });


// 3.
Promise.all(
    Array.from({ length: 5 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});




// Promise.all([
//     $.getJSON(`${baseURL}/${favNumber}?json`),
//     $.getJSON(`${baseURL}/${favNumber}?json`),
//     $.getJSON(`${baseURL}/${favNumber}?json`),
//     $.getJSON(`${baseURL}/${favNumber}?json`),
//     $.getJSON(`${baseURL}/8?json`),
// ]).then(facts => {
//     $("body").append(`<p>${facts[0].text}</p>`)
//     $("body").append(`<p>${facts[1].text}</p>`)
//     $("body").append(`<p>${facts[2].text}</p>`)
//     $("body").append(`<p>${facts[3].text}</p>`)
//     $("body").append(`<p>${facts[4].text}</p>`)
//     console.log(facts)
// });


















// let planet;

// $.getJSON("https://swapi.dev/api/planets/1/", response => {
//     planet = response;
//     console.log(planet);
//     $.getJSON(planet.residents[0], response => {
//         resident = response;
//         console.log(resident);
//         $.getJSON(resident.films[0], response => {
//             film = response;
//             console.log(film);
//             $.getJSON(film.species[0], response => {
//                 specie = response;
//                 console.log(specie);
//                 $.getJSON(specie.people[0], response => {
//                     people = response;
//                     console.log(people);
//                     $.getJSON(people.species[0], response => {
//                         specie = response;
//                         console.log(specie);
//                     });
//                 });
//             });
//         });

//     });

// });





