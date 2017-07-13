export const map = () => {
    ymaps.ready(init);
    let myMap,
        myPlacemark;

    function init() {
        myMap = new ymaps.Map('map', {
            center: [53.88985341, 27.53529831],
            zoom: 16
        });

        myPlacemark = new ymaps.Placemark([53.88985341, 27.53529831], {
            hintContent: 'ТВ Логистик'
        });

        myMap.geoObjects.add(myPlacemark);
    }
};
