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

        map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(38.889629895456146,-77.02969551086426), 13);
        map.setUIToDefault();
        for (var i = 0; i < poi.length; i++) {
            geoXml_poi[i] = new GGeoXml(poi[i]);
            map.addOverlay(geoXml_poi[i]);
        }
    } else {
        alert("Sorry, the Google Maps API is not compatible with this browser")
    }
}

window.onload = init;