
/*Para hacer funcionar la ventana flotante y poder cerrarla*/

function setupDialog(buttonId, dialogId, closeButtonId) {
    const button = document.getElementById(buttonId);
    const dialog = document.getElementById(dialogId);
    const closeButton = document.getElementById(closeButtonId);

    button.addEventListener('click', () => {
        dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
}

setupDialog('botonCuriosidades', 'dialogCuriosidades', 'cerrarCuriosidades');
setupDialog('botonVideo', 'dialogVideo', 'cerrarVideo');

