interface User {
  name: string
  city: string
  country?: string
}

const person: User = {
  name: 'Pepito Palotes',
  city: 'Navarra',
  country: 'Spain'
}

const year = 2022

const greet = (user: User): string => `Hello ${user.name} (${year}) ${person.country ? person.country : ''}`

console.log(greet(person))
