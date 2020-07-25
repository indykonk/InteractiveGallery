/*************************************************************************************/
/* Some InnerHtml work  to push additional html code */
let vedro = document.createElement('div')
let vedro_2 = []
vedro_2.push(`<div class="container">`)

for (let i = 1; i <= 12; i++) {
  vedro_2.push(`
<img id="myImg" class="myImg" src="img/${i}_L.jpg" alt="Autumn-${i}" style="width:100%;max-width:300px">
`)
}

vedro_2.push(`</div>`)

vedro_2.push(`
  <div id="myModal" class="modal">
    <img class="modal-content" id="img01">
    <div id="caption"></div>
  </div>
 `)

vedro.innerHTML = vedro.innerHTML + vedro_2.join(``)
document.body.appendChild(vedro)
/*************************************************************************************/
/** **** Modal images part function ***********/
/* source : https://www.w3schools.com/howto/howto_css_modal_images.asp */
// Get the modal
const modal = document.getElementById('myModal')
// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName('myImg')
const modalImg = document.getElementById('img01')
const captionText = document.getElementById('caption')
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = 'block'
    modalImg.src = this.src
    captionText.innerHTML = this.alt
  }
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// First, user should click on any image and then continue scrolling images using keyboard arrows
// Right arrow and Up arrow show/pop-up next image from the gallery
// Left arrow and Down arrow show/pop-up previous image from the gallery
// Sources:
// https://css-tricks.com/snippets/javascript/javascript-keycodes/
// https://www.w3schools.com/js/js_comparisons.asp
// In-class exercise "Event Horizon".
let k = 0
document.addEventListener('keydown', function (event) {
  if ((event.which === 38 || event.which === 39) && k < 11) {
    img[k + 1].style.display = 'block'
    modalImg.src = img[k + 1].src
    captionText.innerHTML = img[k + 1].alt
    k = k + 1
  }
  if ((event.which === 37 || event.which === 40) && k > 0) {
    img[k - 1].style.display = 'block'
    modalImg.src = img[k - 1].src
    captionText.innerHTML = img[k - 1].alt
    k = k - 1
  }
})
