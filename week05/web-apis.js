const myElement = document.getElementById("demo");
const embMap = document.querySelector("gmap_canvas")

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyC1GD8o2bdlXjfc85QqrpTCSltESDJA6SY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });

// function showPosition(position) {
//   myElement.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }

function showPosition(position) {

    embMap.setAttribute("src", `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`)
    embMap.src = `https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`
}

let map;

async function initMap(position) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 8,
  });
}

initMap();