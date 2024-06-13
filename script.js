function mostrarPorfileButtonsPostRegister() {
    const email = document.getElementById('email-register').value

    switch (email) {
        case "usuario@gmail.com":
            document.getElementById('buttons-header').style.display = 'none';
            document.getElementById('profile-header').style.display = 'flex';
            break
        case "usuariocumple@gmail.com":
            [...document.getElementsByClassName('globo')].forEach(function (element) {
                element.classList.remove('display-none');
            });
            const birthdayModal = document.getElementById('birthdayModal');
            const modalInstance = new bootstrap.Modal(birthdayModal);
            modalInstance.show();
            break
        case "administrador@gmail.com":
            window.location.href = 'administrador.html';
            break
        case "marketing@gmail.com":
            window.location.href = 'marketing.html';
            break
        case "controldesalas@gmail.com":
            window.location.href = 'empleado.html';
            break
        case "vendedorporventanilla@gmail.com":
            window.location.href = 'vendedor.html';
            break
        default:
            break
    }
}

function mostrarPorfileButtonsPostLogin() {
    const email = document.getElementById('email').value

    switch (email) {
        case "usuario@gmail.com":
            document.getElementById('buttons-header').style.display = 'none';
            document.getElementById('profile-header').style.display = 'flex';
            break
        case "usuariocumple@gmail.com":
            [...document.getElementsByClassName('globo')].forEach(function (element) {
                element.classList.remove('display-none');
            });
            const birthdayModal = document.getElementById('birthdayModal');
            const modalInstance = new bootstrap.Modal(birthdayModal);
            modalInstance.show();
            break
        case "administrador@gmail.com":
            window.location.href = 'administrador.html';
            break
        case "marketing@gmail.com":
            window.location.href = 'marketing.html';
            break
        case "controldesalas@gmail.com":
            window.location.href = 'empleado.html';
            break
        case "vendedorporventanilla@gmail.com":
            window.location.href = 'vendedor.html';
            break
        default:
            break
    }
}


