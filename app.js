const tavoloVip =
[
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
]

for(let i = 0; i < tavoloVip.length; i++) {
    const vipCorrente = tavoloVip[i]
    //console.log(vipCorrente)

    vipCorrente.nomeTavolo = "tavolo vip"
    vipCorrente.nomeOspite = vipCorrente
    vipCorrente.posto = i+1
    console.log(vipCorrente.nomeOspite)
}

// tavoloVip.forEach((Element) => {

// })