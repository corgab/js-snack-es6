//array con bici con nome e peso
//stampare in console bici con peso minore utilizzando destructuring e template literal
function bici(newnome, newpeso) {
    const biciSingola= {
        nome: newnome,
        peso: newpeso
    }
    return biciSingola
}


const biciList = [
    bici("bici1",20),
    bici("bici2",13),
    bici("bici3",34),

]

const [biciLeggera, ...altreBici] = biciList.sort((a, b) => a.peso - b.peso);

console.log(`La bici più leggera è ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`);
