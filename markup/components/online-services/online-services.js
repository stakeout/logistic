export const modalOnlineServices = () => {
    const item = document.querySelectorAll('.online-services__item');
    if (item) {
        const overlay = document.querySelector('.overlay');
        const info = document.querySelector('.online-services__modal');
        const wrap = document.querySelector('.wrap');

        function online() {
            const header = this.children[1].innerHTML;
            const data = this.children[2].innerHTML;
            info.classList.toggle('hide');
            overlay.classList.toggle('hide');
            wrap.innerHTML = header + data;
        }
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', online);
        }
        overlay.addEventListener('click', function () {
            info.classList.add('hide');
            this.classList.add('hide');
        });
    }
};
