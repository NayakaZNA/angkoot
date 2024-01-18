// POPUP
function tampilkanLokasiRute(){
    document.getElementById("popupLokasi").classList.toggle("active"); 
}
function tampilkanInfo(){
    document.getElementById("popupInfo").classList.toggle("active"); 
}
function tampilkanPembayaran(){
    document.getElementById("popupBayar").classList.toggle("active"); 
}

function simpanLokasiRute(){
    kota = document.getElementById("pilihKota").value;
    rute = document.getElementById("pilihRute").value;
    document.getElementById("popupLokasi").classList.toggle("active"); 
}

function tutupInfo(){
    document.getElementById("popupInfo").classList.toggle("active");
}

// function tutupBayar(){
//     document.getElementById("popupInfo").classList.toggle("active"); 
// }

// PEMBAYARAN
metodeBayar = ""
function pilihGOPAY(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "white";
    document.getElementById("pilihOVO").style.background = "transparent";
    document.getElementById("pilihMANDIRI").style.background = "transparent";
    document.getElementById("pilihBNI").style.background = "transparent";
    document.getElementById("pilihBSI").style.background = "transparent";
    document.getElementById("pilihBRI").style.background = "transparent";
    metodeBayar = "gopay";
}
function pilihOVO(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "transparent";
    document.getElementById("pilihOVO").style.background = "white";
    document.getElementById("pilihMANDIRI").style.background = "transparent";
    document.getElementById("pilihBNI").style.background = "transparent";
    document.getElementById("pilihBSI").style.background = "transparent";
    document.getElementById("pilihBRI").style.background = "transparent";
    metodeBayar = "ovo"
}
function pilihMANDIRI(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "transparent";
    document.getElementById("pilihOVO").style.background = "transparent";
    document.getElementById("pilihMANDIRI").style.background = "white";
    document.getElementById("pilihBNI").style.background = "transparent";
    document.getElementById("pilihBSI").style.background = "transparent";
    document.getElementById("pilihBRI").style.background = "transparent";
    metodeBayar = "mandiri"
}
function pilihBNI(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "transparent";
    document.getElementById("pilihOVO").style.background = "transparent";
    document.getElementById("pilihMANDIRI").style.background = "transparent";
    document.getElementById("pilihBNI").style.background = "white";
    document.getElementById("pilihBSI").style.background = "transparent";
    document.getElementById("pilihBRI").style.background = "transparent";
    metodeBayar = "bni"
}
function pilihBSI(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "transparent";
    document.getElementById("pilihOVO").style.background = "transparent";
    document.getElementById("pilihMANDIRI").style.background = "transparent";
    document.getElementById("pilihBNI").style.background = "transparent";
    document.getElementById("pilihBSI").style.background = "white";
    document.getElementById("pilihBRI").style.background = "transparent";
    metodeBayar = "bsi"
}
function pilihBRI(){
    document.getElementById("bayar1").style.display = 'block';

    document.getElementById("pilihGOPAY").style.background = "transparent";
    document.getElementById("pilihOVO").style.background = "transparent";
    document.getElementById("pilihMANDIRI").style.background = "transparent";
    document.getElementById("pilihBNI").style.background = "transparent";
    document.getElementById("pilihBSI").style.background = "transparent";
    document.getElementById("pilihBRI").style.background = "white";
    metodeBayar = "bri"
}

// Konfirmasi "Pilih Metode Bayar"
function konfirmasiPilihBayar(){
    document.getElementById("popupBayar").classList.toggle("active");
    if (metodeBayar == "gopay"){
        document.getElementById("bayarGOPAY").classList.toggle("active");
    }
    else if (metodeBayar == "ovo"){
        document.getElementById("bayarOVO").classList.toggle("active");      
    }
    else if (metodeBayar == "mandiri"){
        document.getElementById("bayarMANDIRI").classList.toggle("active");
    }
    else if (metodeBayar == "bni"){
        document.getElementById("bayarBNI").classList.toggle("active");
    }
    else if (metodeBayar == "bsi"){
        document.getElementById("bayarBSI").classList.toggle("active");
    }
    else if (metodeBayar == "bri"){
        document.getElementById("bayarBRI").classList.toggle("active");
    }
}

function scanQR(){
    if (metodeBayar == "gopay"){
        document.getElementById("bayarGOPAY").classList.toggle("active");
    }
    else if (metodeBayar == "ovo"){
        document.getElementById("bayarOVO").classList.toggle("active");      
    }
    else if (metodeBayar == "mandiri"){
        document.getElementById("bayarMANDIRI").classList.toggle("active");
    }
    else if (metodeBayar == "bni"){
        document.getElementById("bayarBNI").classList.toggle("active");
    }
    else if (metodeBayar == "bsi"){
        document.getElementById("bayarBSI").classList.toggle("active");
    }
    else if (metodeBayar == "bri"){
        document.getElementById("bayarBRI").classList.toggle("active");
    }
}