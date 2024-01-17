var mlg = {
    name: "Malang",
    lat: -7.9666,
    long: 112.6326,
    routes: {
      AL: "https://angkoot-rndn.web.app/malang_kt_al.kml",
      MM: "https://angkoot-rndn.web.app/malang_kt_mm.kml"  
    },
};

var smd = {
    name: "Sumedang",
    lat: -6.8381,
    long: 107.9275,
    routes: {
      N04: "https://angkoot-rndn.web.app/sumedang_kb_04.kml",
    },
};

var bdg = {
    name: "Bandung",
    lat: -6.9390,
    long: 107.6692,
    routes: {
      N43: "https://angkoot-rndn.web.app/bandung_kbt_43.kml",
  }
  ,
};

var bwi = {
  name: "Banyuwangi",
  lat: -8.2192,
  long: 114.3692,
  routes: {
    LIN7: "https://angkoot-rndn.web.app/banyuwangi_kb_7.kml",
    LIN9: "https://angkoot-rndn.web.app/banyuwangi_kb_9.kml"
  },
};

var cities = [mlg, smd, bdg, bwi]


function getSelectedCity() {
  // Mengambil nilai dari pilihan dropdown oleh pengguna
  var cityDropdown = document.getElementById('pilihKota');
  var selectedCityName = cityDropdown.value;
  // Mencari object yang bersesuaian dengan kota input
  var selectedCity = cities.find(city => city.name == selectedCityName);
  document.getElementById('routeDisplay').innerHTML = 'Selected City: ' + selectedCity.lat;
  myMap(selectedCity)
  return selectedCity;
}

function myMap(city) {
  // Mengambil data kota
  latitude  = city.lat;
  longitude = city.long;

  // Konfigurasi peta
  var mapProp= {
    center:new google.maps.LatLng(latitude, longitude),
    zoom:13,
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    overviewMapControl: false,
    streetViewControl: false,
  };

  // Menampilkan peta pada HTML
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  // Menampilkan layer KML
  var kmlLayer = new google.maps.KmlLayer({
    
  }
  );
}