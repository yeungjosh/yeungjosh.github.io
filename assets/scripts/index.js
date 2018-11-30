// adds fade in when loading the website
window.addEventListener("load", function() {
    // hehehe im not using jquery hehehe take dat wdd
    const $overlay = document.querySelector('.overlay')
    $overlay.classList.add('fade-out')
    setTimeout(function() {
        $overlay.classList.remove('fade-out')
    }, 1500)
})
