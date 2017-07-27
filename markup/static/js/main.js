import slick from 'slick-carousel';
// const slick = require('slick-carousel');
import magnificPopup from 'magnific-popup';
const jqValidation = require('jquery-validation');
const wowJs = require('wow.js');
import {filterByType, carousel} from '../../components/clients/clients';
import {map} from '../../components/map/map';
import {stickyNav} from '../../components/header/header';
import {validation, showForm} from '../../components/request-form/request-form';
$(() => {
    stickyNav();
    showForm();
    validation();
    carousel.slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
        ]
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
    let wow = new wowJs(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 300,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
);
    wow.init();
});
