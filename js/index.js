let Slider = document.querySelector(".slider");
let IconoDerecho = document.querySelector(".icono-derecho");
let IconoIzuierdo = document.querySelector(".icono-izquierdo");
let Imagenes = document.querySelectorAll(".img-slider").length;
let Contador = 0;

function MoverSlider()
  {
    if(Contador > Imagenes - 1)
        {
          Contador = 0;
        } else if(Contador < 0)
                   {
                    Contador =  Imagenes - 1;
                   }
    Slider.style.transition = "all 1s ease"
    Slider.style.marginLeft = `-${100 * Contador}%`;
  }

function MoverDerecha()
  {
     Contador++;
     MoverSlider();
  }
IconoDerecho.addEventListener("click", MoverDerecha);

function MoverIzquierda()
  {
    Contador--;
    MoverSlider();
  }
IconoIzuierdo.addEventListener("click", MoverIzquierda)