export const modalVacancies = () => {
    const modalInfo = document.querySelector('#modal-info');
    const modalContent = modalInfo.querySelector('.wrapper');
    const vacancyItem = document.querySelectorAll('.vacancies__item');
    const overlay = document.querySelector('.overlay');
    const vacancyBtn = document.querySelector('.vacancies-btn');
    const popupForm = document.querySelector('.vacancies__modal');

    function modal(e) {
        e.preventDefault();
        const data = this.innerHTML;
        modalInfo.classList.toggle('hide');
        overlay.classList.toggle('hide');
        modalContent.innerHTML = data;
    }
    function popup(e) {
        e.preventDefault();
        modalInfo.classList.toggle('hide');
        popupForm.classList.toggle('hide');
    }
    overlay.addEventListener('click', function () {
        modalInfo.classList.add('hide');
        popupForm.classList.add('hide');
    });
    vacancyBtn.addEventListener('click', popup);
    for (let i = 0; i < vacancyItem.length; i++) {
        vacancyItem[i].addEventListener('click', modal);
    }
};
