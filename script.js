var map;
var mlg = {
    name: "Malang",
    lat: -7.9666,
    long: 112.6326,
    routes: {
      AL: {
        trayek: "Arjosari-Landungsari (AL)",
        link: "https://angkoot-rndn.web.app/malang_kt_al.kml",
      },
      MM: {
        trayek: "Madyopuro-Mulyorejo (MM)",
        link: "https://angkoot-rndn.web.app/malang_kt_mm.kml",
      },
    },
};

var smd = {
    name: "Sumedang",
    lat: -6.8381,
    long: 107.9275,
    routes: {
      N04: {
        trayek: "04 Cileunyi-Sumedang",
        link: "https://angkoot-rndn.web.app/sumedang_kb_04.kml",
      },
    },
};

var bdg = {
    name: "Bandung",
    lat: -6.9390,
    long: 107.6692,
    routes: {
      N43: {
        trayek: "43 Gedebage-Majalaya via Sayang",
        link: "https://angkoot-rndn.web.app/bandung_kbt_43.kml",
      },
    },
};

var bwi = {
  name: "Banyuwangi",
  lat: -8.2192,
  long: 114.3692,
  routes: {
    LIN7: {
      trayek: "Lin 7 Terminal Karangasem-Terminal Blambangan",
      link: "https://angkoot-rndn.web.app/banyuwangi_kb_7.kml",
    },
    LIN9: {
      trayek: "Lin 9 Stasiun Argopuro-Terminal Blambangan",
      link: "https://angkoot-rndn.web.app/banyuwangi_kb_9.kml",
    },
  },
};

var cities = [mlg, smd, bdg, bwi]

function updateAngkotDropdown(selectedCity) {
  var ruteDropdown = document.getElementById('pilihRute');
  
  // Reset
  ruteDropdown.innerHTML = '';
  var defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.text = 'Pilih rute...';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  ruteDropdown.appendChild(defaultOption);

  // Ambil rute pada kota/kabupaten
  var routes = selectedCity.routes;
  // Isi dropdown dengan rute yang tersedia
  for (var routeKey in routes) {
      if (routes.hasOwnProperty(routeKey)) {
        var route = routes[routeKey];
        var option = document.createElement('option');
        option.value = routeKey;
        option.text = route.trayek;
        ruteDropdown.appendChild(option);
      }
  }
}

function getSelectedCity() {
  // Mengambil nilai dari pilihan dropdown oleh pengguna
  var selectedCityName = document.getElementById('pilihKota').value;

  // Mencari object yang bersesuaian dengan kota input
  var selectedCity = cities.find(city => city.name == selectedCityName);
  return selectedCity;
}

function afterSelectedCity() {
  // Dapatkan kota yang diinput pengguna
  var selectedCity = getSelectedCity();

  // Tampilkan peta
  myMap(selectedCity);
  
  // Update dropdown
  updateAngkotDropdown(selectedCity);
  return selectedCity;
}

function myMap(selectedCity) {
  // Mengambil data kota
  latitude  = selectedCity.lat;
  longitude = selectedCity.long;

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
  map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  ;
}

function getSelectedRoute() {
  return document.getElementById('pilihRute').value;
}

function afterSelectedRoute() {
}