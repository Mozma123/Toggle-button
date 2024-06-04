const themeButton = document.getElementById('themeButton')
const body = document.body;
themeButton.addEventListener('click',  function() {
    if (themeButton.classList.contains('pm')) {
        themeButton.classList.remove('pm');
        body.style.backgroundColor = 'orange'; }
    else {
        themeButton.classList.add('pm');
        body.style.backgroundColor = 'black';
    }
});