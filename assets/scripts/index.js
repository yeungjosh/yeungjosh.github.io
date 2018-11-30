
window.addEventListener("load", function() {
    const $overlay = document.querySelector('.overlay')
    $overlay.classList.add('fade-out')
    setTimeout(function() {
        $overlay.classList.remove('fade-out')
    }, 1500)
})
