export const modalVacancies = () => {
    const vacancyItem = document.querySelectorAll('.vacancies__item');
    const overlay = document.querySelector('.overlay');
    const vacancyBtn = document.querySelector('.vacancies-btn');
    const modalContent = document.querySelector('.wrapper');
    const modalInfo = document.querySelector('.vacancies__modal-info');
    const popupForm = document.querySelector('.vacancies__modal');

    function modal(e) {
        e.preventDefault();
        const data = this.innerHTML;
        modalInfo.classList.toggle('hide');
        overlay.classList.toggle('hide');
        modalContent.innerHTML = data;
    }
    if (vacancyItem) {
        overlay.addEventListener('click', function () {
            modalInfo.classList.add('hide');
            popupForm.classList.add('hide');
        });
        for (let i = 0; i < vacancyItem.length; i++) {
            vacancyItem[i].addEventListener('click', modal);
        }
    }
    if (vacancyBtn) {
        vacancyBtn.addEventListener('click', function (e) {
            e.preventDefault();
            modalInfo.classList.toggle('hide');
            popupForm.classList.toggle('hide');
        });
    }

};
