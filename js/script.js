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


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
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