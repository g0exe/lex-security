const separator = document.querySelector('.separator');

function handleScroll() {
    const separatorTop = separator.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (separatorTop < windowHeight) {
        separator.classList.add('show');
    } else {
        separator.classList.remove('show');
    }
}

window.addEventListener('scroll', handleScroll);
