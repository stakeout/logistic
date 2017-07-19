export const map = () => {
    ymaps.ready(init);
    let myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map('map', {
            center: [53.88985341, 27.53529831],
            zoom: 16,
            controls: ['zoomControl', 'typeSelector', 'routeEditor']
        });
        myPlacemark = new ymaps.Placemark([53.88985341, 27.53529831], {
            hintContent: 'ТВ Логистик',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/static/img/minified-svg/blue_map_marker.svg',
            iconImageSize: [50, 42],
            iconImageOffset: [-28, -20]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
};
