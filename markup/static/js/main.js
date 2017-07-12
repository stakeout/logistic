// import '../../components/slick/slick.min';
const slick = require('slick-carousel');
const magnificPopup = require('magnific-popup');
import {filterByType} from '../../components/clients/clients';
$(() => {
    $('.clients__list').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
    });
    $('.office-life__list').slick({
        dots: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });
    filterByType();
    $('.reviews__list').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });
});
