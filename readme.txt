***************************************************************************************************
Foursquare Check-in MAP 
Author: Chang Xiao (chang@emotivellc.com)
Last Updated: October 2010

Description:

Displays a specified number of check-in by one or more individuals given a foursquare
KML feed on a google map by different colored pins
***************************************************************************************************


I. Requirement
II. Installation
III. Configuration/Set-up
IV. Usage


********************************************
* I. Requirement
********************************************

In order to construct a new instance of the foursquare map, you must have

1. A google map API key
2. Have at least one valid foursquare KML feed
3. LAMP web server

********************************************
* II. Installation
********************************************

1. Upload everything into your web server

********************************************
* III. Configuration/Set-up
********************************************

1. Locate line 6 in index.html
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAPPB5eXcmbFbBuMG5tDK3txRqyqJ0g--eitFK0tqS55Im2sa-iBQ-UuJeJ3hH3CYJWWz68NFaecK38Q&amp;sensor=false" type="text/javascript"></script>

Change the key=ABQIAAAAPPB5eXcmbFbBuMG5tDK3txRqyqJ0g--eitFK0tqS55Im2sa-iBQ-UuJeJ3hH3CYJWWz68NFaecK38Q

to the google map API key you have signed up for, the google map API key will only work for one 
domain

2. Depending on how many foursquare feed you want to display, the block of repeating

<label><img src="/kml/icons/icon1.png" />Person 1<input id="poi_0" value="0" checked="checked" type="checkbox" /></label>

should match the number of foursquare feed you want to display so i.e. if you have four feeds, the 
section should look like

<label><img src="/kml/icons/icon1.png" />Person 1<input id="poi_0" value="0" checked="checked" type="checkbox" /></label>
<label><img src="/kml/icons/icon2.png" />Person 2<input id="poi_1" value="1" checked="checked" type="checkbox" /></label>
<label><img src="/kml/icons/icon3.png" />Person 3<input id="poi_2" value="2" checked="checked" type="checkbox" /></label>
<label><img src="/kml/icons/icon4.png" />Person 4<input id="poi_3" value="3" checked="checked" type="checkbox" /></label>

IMPORTANT, the <input id="poi_0" value="0" checked="checked" type="checkbox" /> start at 0 so the 
first feed will correspond to that and every feed's corresponding toggle checkbox will be n -1

3. Open script.js and locate

var poi = new Array(
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]",
	"http://www.yoursite.com/kml/?feed=FEED_ID&icon=[1-23]"
	...
);

	a. http://www.yoursite.com should be the location of where you uploaded the map, so if you
	uploaded to http://www.yoursite.com/map, it should be changed to that.
	
	b. FEED_ID corresponds to the "SOU5PJYN1NHKHYWEJIDUVPRZXOPXFFZK" part of a KML feed from
	a foursquare KML feed: see below:
	
	http://feeds.foursquare.com/history/SOU5PJYN1NHKHYWEJIDUVPRZXOPXFFZK.kml

	c. icon=[1-23] should be set to a number between 1 to 23, i.e. icon=3, it will change the 
	color of the push pin on the map
	
IMPORTANT: Once again, the first feed will be numbered 0, which will match step 2 and the input id 
and input value of the toggles.

4. Optinally, mini.html and script-mini.js can be used if you would like to display a mini-map of 
the foursquare feed, their setup is similar to the script.js and step 3.


********************************************
* IV. Usage
********************************************

If everythign is set up correctly, you should see the correct number of feeds and overlays
on the map, each check box should toggle the correct KML feed.

Map size and styles can be changed through style.css


