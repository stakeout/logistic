// import '../../components/slick/slick.min';
const slick = require('slick-carousel');
const magnificPopup = require('magnific-popup');
const jqValidation = require('jquery-validation');
import {filterByType} from '../../components/clients/clients';
import {map} from '../../components/map/map';
import {stickyNav} from '../../components/header/header';
import {validation} from '../../components/request-form/request-form';
$(() => {
    stickyNav();
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
    map();
    // validation();
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
