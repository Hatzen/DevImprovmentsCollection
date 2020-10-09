// ==UserScript==
// @name     Jenkins Build Refresh
// @version  1
// @grant    none
// @include SERVER-URL/jenkins/job/*/job/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

/**
* Shows the Jenkins Build indicator as favicon so you can see changes without seeing the whole page.
*/
console.log("Started jenkins updater")
jQuery( document ).ready(function() {
    console.log( "ready!" );
  setInterval(function() {
// images from any url. but same url is better as cross domain probably gets blocked
let icon = "red_anime.gif";
if (jQuery( ".tobsTable-body tr" ).first().attr('class').indexOf("FAILED") != -1) {
icon = "red.png";
    } 
if (jQuery( ".tobsTable-body tr" ).first().attr('class').indexOf("SUCCESS") != -1) {
icon = "blue.png";
    } 
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'SERVER-URL/jenkins/static/802d92d1/images/48x48/' + icon;
    document.getElementsByTagName('head')[0].appendChild(link);
//console.log("jenkins updated")
}, 1000)
});
