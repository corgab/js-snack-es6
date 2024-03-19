// stampare lista studenti con nome
// creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


const studentiList = [
    studente("Marco della Rovere", 213, 78),
    studente("Paola Cortellessa", 110, 96),
    studente("Andrea Mantegna", 250, 96),
    studente("Gaia Borromini", 145, 74),
    studente("Luigi Grimaldello", 196, 68),
    studente("Piero della Francesca", 102, 50),
    studente("Francesca da Polenta", 120, 84),
];

//array vuoti
const studentiListVoti = []
const studentiListVotiId = []

console.log(studentiList)
console.log(studentiListVotiId)
console.log(studentiListVoti)

//ciclo per pushare gli array
for(let i = 0; i < studentiList.length; i++) {
    const idMin = 120
    const gradesMin = 70

    const gradesList = studentiList[i].grades
    const idList = studentiList[i].id

    if (gradesList > gradesMin && idList > idMin) {
        studentiListVotiId.push(studentiList[i])
    } else if (gradesList > gradesMin) {
        studentiListVoti.push(studentiList[i])
    }
    
}



//s
function studente(newname, newid, newgrades) {
    
    const newNameUpper = newname.toUpperCase()

    const studenteObj = {
        nome : newNameUpper,
        id : newid,
        grades : newgrades
    }

    
    return studenteObj
}
