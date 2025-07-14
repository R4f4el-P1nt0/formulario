//criar botao de click
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener("click", function () {

    const topicos = document.querySelectorAll('textarea');

    topicos.forEach(topicos => {

        const spanExistente = topicos.parentNode.querySelector('span');
        if (spanExistente) {
            spanExistente.remove();
        }

        if (topicos.value.trim() !== '') {
            topicos.classList.add('borda-verde');
        } else if (topicos.value.trim() === '') {
            topicos.classList.add('borda-vermelha');


            const span = document.createElement('span');
            span.textContent = 'campo obrigatório';
            span.style.color = 'red'; 
            span.style.fontSize = '10px';
            span.style.display = 'block';
            span.style.position = 'absolute';
            span.style.paddingLeft = '2px'

            topicos.parentNode.appendChild(span);
        } else {
            topicos.classList.remove('borda-verde');
        }
    });
});
