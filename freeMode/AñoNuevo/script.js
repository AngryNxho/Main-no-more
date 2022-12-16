const inputName = document.getElementById('name');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
btn.addEventListener('click', () => {
    if (inputName.value == 'Ignacio'){
        let message = document.createElement('p');
        message.textContent = 'Bienvenido Ignacio';                                   
        content.appendChild(message);
        location.href = 'ignacio.html'
    }else if (inputName.value == 'Francisca'){
        let message = document.createElement('p');
        message.textContent = 'Bienvenida Francisca';                                   
        content.appendChild(message);
        location.href = 'francisca.html'
    }else if (inputName.value == 'Alejandra'){
        let message = document.createElement('p');
        message.textContent = 'Bienvenida Alejandra';                                   
        content.appendChild(message);
        location.href = 'alejandra.html'
    }else if (inputName.value == 'Lucas'){
        let message = document.createElement('p');
        message.textContent = 'Bienvenido Lucas';
        location.href = 'lucas.html'
        content.appendChild(message);
    }else if (inputName.value == 'Esteban'){
        let message = document.createElement('p');
        message.textContent = 'Bienvenido Esteban';                                   
        content.appendChild(message);
        location.href = 'esteban.html'

    }


});



