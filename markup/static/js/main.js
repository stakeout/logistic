import slick from 'slick-carousel';
// const slick = require('slick-carousel');
const magnificPopup = require('magnific-popup');
const jqValidation = require('jquery-validation');
const wowJs = require('wow.js');
// const mixitup = require('mixitup');
// import mixitup from 'mixitup';
import {filterByType, carousel} from '../../components/clients/clients';
import {map} from '../../components/map/map';
import {stickyNav} from '../../components/header/header';
import {validation, showForm} from '../../components/request-form/request-form';
$(() => {
    stickyNav();
    showForm();
    validation();
    carousel.slick({
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
