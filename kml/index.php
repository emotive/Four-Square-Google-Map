<?php

main();


function main() {
	$feed = $_GET['feed'];
	$icon = $_GET['icon'];
	
	if(!isset($feed) || !isset($icon)) {
		exit('No feed token or icon number provided');
	}
	
	
	$raw_kml = _fetch_kml($feed);
	
	$kml = _custom_icon($raw_kml, $icon);
	
	// header("Content-type: application/xml");
	header("Content-type: application/vnd.google-earth.kml+xml");
	
	echo $kml;
	
}

function _custom_icon($kml_feed, $icon_number) {
	
	$find = array(
		'<kml>',
		'<Folder>',
		'<Placemark>',
		'</Folder>',
		'<extrude>1</extrude><altitudeMode>relativeToGround</altitudeMode>',
		'a href="/',
	);
	
	$replace = array(
		'<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">',
		'<Document>
 	<Style id="custom_icon_style">
      <IconStyle>
        <Icon>
          <href>http://aplink.operationrednovember.com/kml/icons/icon'.$icon_number.'.png</href>
        </Icon>
      </IconStyle>
    </Style>',
    	'<Placemark>
    		<styleUrl>#custom_icon_style</styleUrl> ',
    	'</Document>',
    	'',
    	'a href="http://www.foursquare.com/',
	);
	
	return str_replace($find, $replace, $kml_feed);
	
}


function _fetch_kml($feed_token) {
	
	$content = null;
	
	$url = sprintf("http://feeds.foursquare.com/history/%s.kml", $feed_token);
	
	if($content = file_get_contents($url)) {
		return $content;
	}
	
	
}


?>