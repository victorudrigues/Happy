//Tirando o zoom do mapa 1º criar obj
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//criei uma const pap no qual atribuo o obj L que contem
// uma função map que pega o id do map e em seguida mostra a altitude e longitude e o zoom
// Tirando o zoom do mapa 2º passa o obj como argumento
const map = L.map('mapid', options).setView([-3.7804902,-38.5488861], 15); //passo 1


L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criando um icone especifico //passo3
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",//localizacao do icone
    iconSize: [58, 68],  //tamanho do icone largura e altura
    iconAnchor: [29, 68], //onde vai ficar ancorado
    popupAnchor: [170, 2]  //quando abrir fica ao lado

})

//passo 2
L
.marker([-3.7804902,-38.5488861], { icon }) //cria uma marcação nessa posição
.addTo(map) //adciona ao mapa

// Galeria de imagens
function selectImage(event) {
    const button = event.currentTarget //O alvo altual que esta disparando == botão
    
    //remover todas as classes active 1º passo
    //Peercorrendo todos os buttons de image logica1

    const buttons = document.querySelectorAll(".images button") 
    buttons.forEach(removeActiveClass) //Para cada botão remove active

    //Criando uma função remove e passando como parametro para botão 2º passo
    function removeActiveClass(button) {
        button.classList.remove("active") //Lista de classe remove a active logica2
    }


    //selecionar a imagem clicada
    const image = button.children[0]
    //Vai no orphanage details e pega a primeira imagem(O prieiro nivel de imagem)
    const imageContainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de imagem (A imagem grande)
    imageContainer.src = image.src
    // adiconar a classe active no button clicado
    button.classList.add('active')
}
