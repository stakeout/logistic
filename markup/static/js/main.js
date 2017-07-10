// import '../../components/slick/slick.min';
const slick = require('slick-carousel');
import {filterByType} from '../../components/clients/clients';
$(() => {
    $('.clients__list').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
    });
    filterByType();
});
