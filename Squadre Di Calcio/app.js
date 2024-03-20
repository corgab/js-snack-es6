// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreList = [
    {nome: "napoli", punti: 0, falliSubiti: 0},
    {nome: "juventus", punti: 0, falliSubiti: 0},
    {nome: "inter", punti: 0, falliSubiti: 0},
    {nome: "roma", punti: 0, falliSubiti: 0},
]

//generare punti e falli
for(let squadra of squadreList) {

    squadra.punti = getRandomInt(0, 100)
    squadra.falliSubiti = getRandomInt(0, 50)

}

//inserire in un nuovo array i numeri generati
const squadreListNew = squadreList.map(({ nome, falliSubiti, punti }) => ({ nome, falliSubiti, punti }));

console.log(squadreListNew)


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}