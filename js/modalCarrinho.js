function acaoModal(){
    let msgModal = document.querySelector('.msg-modal-carrinho')

    msgModal.innerHTML = "Produto adicionado ao carrinho"
    msgModal.style.display = 'block';
    setTimeout(function(){
        msgModal.style.display = "none";
    },2000)

}