if($('.shops__map').length){

  const  mapInfo = [
    {
      name: 'Славянский мир',
      coordinate: [55.612019, 37.487137]
    },
    {
      name: 'БП “Румянцево”',
      coordinate: [55.633683, 37.442818]
    },
    {
      name: 'ТЦ Каширский двор',
      coordinate: [55.664654, 37.632608]
    },
    {
      name: 'БП “Румянцево 2”',
      coordinate: [55.647938, 37.480811]
    },
  ]
  var myMap
  function createMap(mapInfo) {
    ymaps.ready(function () {
      myMap = new ymaps.Map(
        'map',
        {
          center: [55.751574, 37.573856],
          zoom: 10,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      )
  
      for (let i = 0; i < mapInfo.length; i++) {
        myPlacemark = new ymaps.Placemark(mapInfo[i].coordinate,
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/map_icon.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38],
          },
        );
        myMap.geoObjects.add(myPlacemark);
      }
    });
  }
  createMap(mapInfo)

  $('.shops__categories-link').on('click', function(){
    for (let i = 0; i < mapInfo.length; i++) {
      if($(this).find('.categories-text').html() == mapInfo[i].name) {
        myMap.destroy()
        console.log(mapInfo[i]);
        createMap([mapInfo[i]])
      }
    }
  })
}