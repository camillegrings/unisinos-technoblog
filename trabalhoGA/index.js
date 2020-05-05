const minFontSize = 1;
const maxFontSize = 3;

let currentFontSize = localStorage.getItem('currentFontSize') || 1;


if (currentFontSize == minFontSize) document.getElementById('diminuiFonte').disabled = true;
if (currentFontSize >= maxFontSize) document.getElementById('aumentaFonte').disabled = true;

const ajustaTextos = () => {
  document.querySelectorAll('p[class|="texto"]').forEach(el => {
    el.classList.remove(el.classList.item(0));
    el.classList.add(`texto-${currentFontSize}`);
  })
}

const diminuiFonte = () => {
  localStorage.setItem('currentFontSize', --currentFontSize);
  document.getElementById('aumentaFonte').disabled = false;
  ajustaTextos();

  if (currentFontSize === minFontSize) document.getElementById('diminuiFonte').disabled = true;
}

const aumentaFonte = () => {
  localStorage.setItem('currentFontSize', ++currentFontSize);
  document.getElementById('diminuiFonte').disabled = false;
  ajustaTextos();

  if (currentFontSize >= maxFontSize) document.getElementById('aumentaFonte').disabled = true;
}

ajustaTextos();