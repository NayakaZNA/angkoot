var mlg = {
    city: "Malang",
    lat: -7.9666,
    long: 112.6326,
    routes: ["AL", "MM"],
};

var smd = {
    city: "Sumedang",
    lat: -6.8381,
    long: 107.9275,
    routes: ["03", "04"],
};

var bdg = {
    city: "Bandung",
    lat: -6.9390,
    long: 107.6692,
    routes: ["43"],
};

var bwi = {
  city: "Banyuwangi",
  lat: -6.9390,
  long: 107.6692,
  routes: ["9", "11"],
};

cities = [mlg, smd, bdg, bwi]

function myMap(key) {
    latitude = key.lat;
    longitude = key.long;
    var mapProp= {
      center:new google.maps.LatLng(latitude, longitude),
      zoom:13,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      overviewMapControl: false,
      streetViewControl: false,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    const Smd04 = new google.maps.KmlLayer({
        url: "https://angkoot-rndn.web.app/sumedang_kb_04.kml",
        map: map,
      });
    const BdgKBt43 = new google.maps.KmlLayer({
      url: "https://angkoot-rndn.web.app/bandung_kbt_43.kml",
      map: map,
    });
    const MlgAL = new google.maps.KmlLayer({
        url: "https://angkoot-rndn.web.app/malang_kt_al.kml",
        map: map,
      });
    const MlgMM = new google.maps.KmlLayer({
      url: "https://angkoot-rndn.web.app/malang_kt_mm.kml",
      map: map,
    });
    const Bwi07 = new google.maps.KmlLayer({
      url: "https://angkoot-rndn.web.app/banyuwangi_kb_7.kml",
      map: map,
    });
    const Bwi09 = new google.maps.KmlLayer({
      url: "https://angkoot-rndn.web.app/banyuwangi_kb_9.kml",
      map: map,
    });
    }
