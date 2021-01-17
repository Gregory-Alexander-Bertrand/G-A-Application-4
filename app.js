//variabes for the sliding navbar
const toggle = document.getElementById('toggle');
const modal = document.getElementById('modal');

//function to open the side modal by clicking the hamburger
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-modal');
    document.body.addEventListener('click', closeModal);
});

//Function closes modal when user clicks anywhere in the top navbar
function closeModal(e) {
    if (
        document.body.classList.contains('show-modal') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !==modal &&
        !modal.contains(e.target)
    ) {
        document.body.classList.toggle('show-modal');
        document.body.removeEventListener('click', closeModal);
    }   else if (!document.body.classList.contains('show-modal')) {
        document.body.removeEventListener('click', closeModal);
    }
}
