const modal = document.querySelector(".modal") /* quando clicar no endereço aparece a localizacao */
const mascara = document.querySelector(".mascara-modal") /* esconde modal */

function mostrarModal(){
   modal.style.left = '50%'
   mascara.style.visibility = 'visible'
}

function esconderModal(){
    modal.style.left = '-30%'
   mascara.style.visibility = 'hidden'
}