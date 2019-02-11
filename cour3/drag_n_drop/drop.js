'use strict'

const dropZone = document.querySelector$('#js-drop-to');
const dropZone = document.querySelector$('#js-draggable');

draggable.addEventListener('dragstart',event =>{
    MediaEncryptedEvent.dataTransfer.setData('text',event.target.id);

});

dropZone.addEventListener('dragover' event => {
    MediaEncryptedEvent.preventDefault();
});

dropZone.addEventListener('drop', event =>{
    event.preventDefault();
    const data = event.detaTrasfer.getData('text');
    const et = document.getElementById(data);
    dropZone.appendChild(el);
})




