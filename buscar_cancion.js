function procesar(cadena){
    cadena = cadena.replace(/ /g,"%20");
    return cadena;
}

function buscar(){
    var letra;
    letra = document.getElementById("letra_cancion");
    var artista;
    artista = document.getElementById("artista");
    var cancion;
    cancion = document.getElementById("cancion");

    let artist = artista.value;
    let song = cancion.value;

    artist = procesar(artist);
    song = procesar(song);

    console.log("cancion: " + song);
    console.log("artista: " + artist);

    var url = 'https://api.lyrics.ovh/v1/' + artist + '/' + song;
    console.log("url: " + url);

    axios.get(url, {})
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data.lyrics);
        letra.innerHTML = res.data.lyrics;
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
}