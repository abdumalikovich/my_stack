// После загрузки всеееех элементов, картинок и тд
window.onload = () => {
    let block = document.querySelectorAll('main .block')
    let social = document.querySelectorAll('social img')
    let header = document.querySelector('header')
    let i = 0
    let k = 0
    
    let show_blocks = setInterval(() => {
        block[i].classList.add('active')
        i++

        if(i >= block.length) {
            clearInterval(show_blocks)

            header.classList.add('active')
        }
    }, 500)
    
    let show_social = setInterval(() => {
        social[k].classList.add('active')
        k++

        if(k >= social.length) {
            clearInterval(show_social)
        }
    }, 500)
}