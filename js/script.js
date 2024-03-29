// Snack 1

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

const guestsList = []

const invited = guests.forEach((vip, i) => {
    const list = {table : tableName, guest : vip, place : ++i}
    guestsList.push(list)
})
console.log(guestsList)

console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')



// Snack 2

const infoStudents = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78,
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96,
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48,
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74,
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68,
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50,
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84,
    },
]

const promoted = infoStudents.filter(({grades}) => grades >= 70)
console.log(promoted)

const idPromoted = infoStudents.filter(({id,grades}) => id >= 120 && grades >= 70)
console.log(idPromoted)

const plate = infoStudents.forEach(({name}) => console.log(name.toUpperCase()))



console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')


// Snack 3

const bicycles = [
    {
        name : 'Cycloc',
        weight : 10,
    },
    {
        name : 'Fidlock',
        weight : 8,
    },
    {
        name : 'Funkita',
        weight : 12,
    },
    {
        name : 'Exped',
        weight : 17,
    },
    {
        name : 'Ergon',
        weight : 15,
    },
]

console.log(bicycles)

let lighterBike = bicycles[0]

bicycles.forEach(bike => {
    const {weight} = bike
    if (weight < lighterBike.weight) lighterBike = bike
})

console.log(lighterBike)

console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')
console.log('--------------------------------------------------------------')

// Snack 4

const teams = [
    {
        team : 'Roma',
        points : 0,
        fouls : 0, 
    },
    {
        team : 'Lazio',
        points : 0,
        fouls : 0, 
    },
    {
        team : 'Inter',
        points : 0,
        fouls : 0, 
    },
    {
        team : 'Fiorentina',
        points : 0,
        fouls : 0, 
    },
    {
        team : 'Empoli',
        points : 0,
        fouls : 0, 
    },
]

console.log(teams)

const getRandomNumbers = (min, max) => Math.floor(Math.random() * (min - max + 1) + max);

teams.forEach (team => {
    team.points = getRandomNumbers(0, 100)
    team.fouls = getRandomNumbers(0, 100)
})

console.log(teams)

const newTeams = teams.map(({team, fouls}) => ({team, fouls}))
console.log(newTeams)