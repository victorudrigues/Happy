//criei uma const pap no qual atribuo o obj L que contem
// uma função map que pega o id do map e em seguida mostra a altitude e longitude e o zoom
const map = L.map('mapid').setView([-3.7804902,-38.5488861], 15); //passo 1


L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

//criando um icone especifico //passo3
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",//localizacao do icone
    iconSize: [58, 68],  //tamanho do icone largura e altura
    iconAnchor: [29, 68], //onde vai ficar ancorado
   

})

let marker;

// Marcando o mapa

//passo 2 armazenar longitude e latitude em u8m variavel
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    //Removendo icon
    marker && map.removeLayer(marker)
    //idd icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map) //Add map
}) //quando ouvir um clique no mapa execute a função


// Adicionar campos de fotos
function addPhotoField() {
    //pegar o container de photos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem add
    const newFieldContainer = fieldsContainer[ fieldsContainer.length - 1].cloneNode(true) //para subtrair o numero de imagem que encontrou por 1

    // Verificar se o campo ta vazio sse sim n add ao container de imagem
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return 
    }
    

    // Limpar o campo antes de add ao container de imagens
    input.value = ""
    //adicionar o clone ao container de image
    container.appendChild(newFieldContainer) //pegue o filho e acrescente ao container

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return

    }

    //deletar o campo
   span.parentNode.remove()
}