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
    //console.log(vipCorrente)
    const vipCorrenteList = {}
    const vipCorrente = tavoloVip[i]

    vipCorrenteList.nomeTavolo = "tavolo vip"
    vipCorrenteList.nomeOspite = vipCorrente
    vipCorrenteList.posto = i + 1

    console.log(vipCorrenteList)
}