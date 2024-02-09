
const URL = 'https://api.thecatapi.com/v1/images/search?limit=';
const contenedorFotos = document.getElementById('fotos');
const numerofotos = document.getElementById('numero');
const cambiarGatito = document.getElementById('actualizar');
const colorCheckbox = document.getElementById('color');
const numeroMsg = document.getElementById('numero_msg');
const colorMsg = document.getElementById('color_msg');
const formulario = document.getElementById('validacion');


/*cambiarGatito.addEventListener('click', gatitoNuevo);*/

function gatitoNuevo(){
    const urlNumero = URL+numerofotos.value;
    console.log(urlNumero)
    fetch(urlNumero)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        
            // Reiniciamos el conteneor para mostrar solo la nueva busqueda
        contenedorFotos.innerHTML = "";
        for (let i=0;i<numerofotos.value;i++){
            let imagenNueva = "<img src='"+data[i].url+"'>";
            contenedorFotos.innerHTML += imagenNueva;
        }
    });
}

function validarNum() {
    const NumeroIndicado = Number(numerofotos.value);

    if (isNaN(NumeroIndicado) || NumeroIndicado < 0 || NumeroIndicado > 10) {
        numeroMsg.textContent = 'Debe ser un número entre 0 y 10.';
        numeroMsg.style.color = 'red';
    } else {
        numeroMsg.textContent = 'Número válido.';
        numeroMsg.style.color = 'green';
    }
  }

  function ColorFondo() {
    if (!colorCheckbox.checked) {
        var body = document.querySelector('body');
        body.style.backgroundImage = "url('fondo.jpg')";
        colorMsg.style.color = 'black';
    } else {
        var body = document.querySelector('body');
        body.style.backgroundImage = "url('fotonegativo.jpg')";
        colorMsg.style.color = 'white';
  
    }
  }
  function validarFormulario(event) {
    // Validar cada campo por separado
    validarNum();
    // Verificar si todos los mensajes están en verde
    if (numeroMsg.style.color == 'green') {
        gatitoNuevo();
        console.log("caso2");
    }
    event.preventDefault();
  }

formulario.addEventListener('submit', validarFormulario);
numerofotos.addEventListener('input', validarNum);
colorCheckbox.addEventListener('change', ColorFondo);



  
