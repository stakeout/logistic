export const modalVacancies = () => {
    const vacancyItem = document.querySelectorAll('.vacancies__item');
    const overlay = document.querySelector('.overlay');
    const vacancyBtn = document.querySelector('.vacancies-btn');
    const modalContent = document.querySelector('.wrapper');
    const modalInfo = document.querySelector('.vacancies__modal-info');

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
            overlay.classList.add('hide');
        });
        for (let i = 0; i < vacancyItem.length; i++) {
            vacancyItem[i].addEventListener('click', modal);
        }
    }
    if (vacancyBtn) {
        vacancyBtn.addEventListener('click', function (e) {
            modalInfo.classList.toggle('hide');
            overlay.classList.add('hide');
        });
    }

};
