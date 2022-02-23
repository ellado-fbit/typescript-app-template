"use strict";
const person = {
    name: 'Pepito Palotes',
    city: 'Navarra',
    country: 'Spain'
};
const year = 2022;
const greet = (user) => `Hello ${user.name} (${year}) ${person.country ? person.country : ''}`;
console.log(greet(person));
