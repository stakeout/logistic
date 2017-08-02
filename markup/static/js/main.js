import slick from 'slick-carousel';
// const slick = require('slick-carousel');
import magnificPopup from 'magnific-popup';
const jqValidation = require('jquery-validation');
const wowJs = require('wow.js');
import {filterByType, carousel, slickCarouselSettins} from '../../components/clients/clients';
import {reviewsMagnificPopup, reviewsCarousel} from '../../components/reviews/reviews';
import {ourTeamCarousel} from '../../components/content/about-us/main';
import {map} from '../../components/map/map';
import {stickyNav, mobileNav} from '../../components/header/header';
import {validation, showForm} from '../../components/request-form/request-form';
$(() => {
    stickyNav();
    mobileNav();
    showForm();
    validation();
    slickCarouselSettins();
    reviewsMagnificPopup();
    reviewsCarousel();
    ourTeamCarousel();
    $('.office-life__list').slick({
        dots: false,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    centerMode: false
                }
            }
        ]
    });
    filterByType();
    map();
    // validation();
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
