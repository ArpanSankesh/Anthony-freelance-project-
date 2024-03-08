const mainImage = document.querySelector('.img1')
const smallImages = document.querySelectorAll('.small-images')

const carousel = () => {
    smallImages.forEach(img => {
        img.addEventListener('click', function(){
            // mainImage.background.url = smallImages.background.url ;
            // mainImage.style.backgroundImage = `url(${img.style.backgroundImage })`;
            // console.log('hello')
            const backgroundImageUrl = getComputedStyle(img).backgroundImage;
            mainImage.style.backgroundImage = backgroundImageUrl;
        })
    })
}

carousel();