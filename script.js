// JavaScript Document

var map;

var poi = new Array(
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",	
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]"
		);
var geoXml_poi = new Array();

function init() {
    if (GBrowserIsCompatible()) {
        for (var i = 0; i < poi.length; i++) {
            document.getElementById('poi_' + i).onclick = toggle_kml
        }
        map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(38.889684,-77.005856), 5);
        map.setUIToDefault();
        for (var i = 0; i < poi.length; i++) {
            geoXml_poi[i] = new GGeoXml(poi[i]);
            map.addOverlay(geoXml_poi[i]);
        }
    } else {
        alert("Sorry, the Google Maps API is not compatible with this browser")
    }
}

function toggle_kml() {
    if (this.checked == true) {
        map.addOverlay(geoXml_poi[this.value])
    } else {
        map.removeOverlay(geoXml_poi[this.value])
    }
}
window.onload = init;