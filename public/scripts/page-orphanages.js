//criei uma const pap no qual atribuo o obj L que contem
// uma função map que pega o id do map e em seguida mostra a altitude e longitude e o zoom
const map = L.map('mapid').setView([-3.7804902,-38.5488861], 15); //passo 1


L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criando um icone especifico //passo3
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",//localizacao do icone
    iconSize: [58, 68],  //tamanho do icone largura e altura
    iconAnchor: [29, 68], //onde vai ficar ancorado
    popupAnchor: [170, 2]  //quando abrir fica ao lado

})

//criando o poupup //passo 4
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.htm?id=1" class= "choose-orphanage"> <img src= "./public/images/arrow-white.svg" > </a>')

//passo 2
L
.marker([-3.7804902,-38.5488861], { icon }) //cria uma marcação nessa posição
.addTo(map) //adciona ao mapa
.bindPopup(popup) //Ligue o poupup
