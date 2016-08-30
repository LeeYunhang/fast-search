
const searchButton = document.querySelector('.lsbb > button.lsb')
const input = document.getElementById('lst-ib')

searchButton.addEventListener('click', handler)
input.addEventListener('click', handler)

function handler() {
    setTimeout(() => {
        document.body.onmousedown = (e) => {
            const target = e.target
            if (target.parentElement.nodeName === 'H3') {
                target.href = target.dataset.href
            }   
        }
    }, 1000)
}


handler()