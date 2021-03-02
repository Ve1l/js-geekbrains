window.onload = function () {
  var image = document.getElementsByTagName('img')
  for (var i = 0; i < image.length; i++) {
    image[i].onclick = showBigImages
  }
}

function showBigImages(event) {
  var bigImagesBlock = document.getElementById('bigImages')
  bigImagesBlock.innerHTML = ''
  var smallImages = event.target
  var imageNameParts = smallImages.id.split('_')
  var path = 'big/' + imageNameParts[1] + '.jpeg'
  var bigImages = document.createElement('img')
  bigImages.src = path
  bigImages.style.width = '450px'
  bigImages.style.height = '700px'
  bigImagesBlock.appendChild(bigImages)
  bigImages.onerror = function () {
    alert('Картинка не найдена')
  }
}
