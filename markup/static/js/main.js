import '../../components/slick/slick.min';
$(() => {
    $('.clients__list').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true
    });
});
