// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("turbolinks:load", function () {

  // $('#sortTable').click( function() {
  //   $(this).
  // });
  $(".one").hover(bigger,normal);
    // alert("Fuck you");
    function bigger() {
    $(".rightTop").animate({width: "49%"});
    };
    function normal() {
    $(".rightTop").animate({width: "29.27%"});
    };


  $(".two").hover(bigg, norm);
        function bigg() {
    $(".rightBottom").animate({width: "49%"});
    };
    function norm() {
    $(".rightBottom").animate({width: "29.27%"});
    };


  $('.panelName1').hide();
  $('.panelName11').hide();

	// Welcome Map Events
	$('.js-mapPanel').click( function () {
    function refreshMap () {
      google.maps.event.trigger(map, 'resize');
      // map.setCenter({lat: 25.7712513, lng: -80.1918728});
      // map.setZoom(14);
      // map.fitBounds(bounds);
    };
    $('.js-mapPanel').animate({width:'90%', left:'5%'}, refreshMap);
    $('.js-mapPanel').removeClass('closed');
    $('.panelName2').hide();

    initialize();

    if (! $('.js-about').hasClass('closed') ) {
      $('.js-about').animate({width:'5%'});
      $('.js-about').addClass('closed');
      $('.panelName1').show();
    }
		if (! $('.js-previewPanel').hasClass('closed') ) {
			$('.js-previewPanel').animate({width:'5%'});
			$('.js-previewPanel').addClass('closed');
      $('.panelName3').show();
		}
	});
	// $('.js-closeProduct').click( function (e) {
	// 	e.stopPropagation();
	// 	$('.js-product').animate({width:'5%'});
	// 	$('.js-product').addClass('closed');
	// });


	// Welcome About Events
	$('.js-about').click( function () {
		$('.js-about').animate({width:'90%'});
		$('.js-about').removeClass('closed');
    $('.js-mapPanel').animate({left:'90%'});
    $('.panelName1').hide();

    if (! $('.js-mapPanel').hasClass('closed') ) {
      $('.js-mapPanel').animate({width:'5%'});
      $('.js-mapPanel').addClass('closed');
      $('.panelName2').show();
		}
		if (! $('.js-previewPanel').hasClass('closed') ) {
			$('.js-previewPanel').animate({width:'5%'});
			$('.js-previewPanel').addClass('closed');
      $('.panelName3').show();
		}
		if ( $('.js-mapPanel').hasClass('closed') ) {
			$('.js-mapPanel').animate({width:'5%'});
			$('.js-mapPanel').addClass('closed');
      $('.panelName2').show();
      // $('.js-mapPanel').animate({left:'90%'});
		}
	});

	//Welcome previewPanel Product events
	$('.js-previewPanel').click( function () {
		$('.js-previewPanel').animate({width:'90%'});
		$('.js-previewPanel').removeClass('closed');
    $('.panelName3').hide();

		if (! $('.js-mapPanel').hasClass('closed') ) {
			$('.js-mapPanel').animate({width:'5%', left: '5%'});
			$('.js-mapPanel').addClass('closed');
      $('.panelName2').show();
		}
		if (! $('.js-about').hasClass('closed') ) {
			$('.js-about').animate({width:'5%'});
			$('.js-about').addClass('closed');
      $('.panelName1').show();
		}
    if ( $('.js-mapPanel').hasClass('closed') ) {
      $('.js-mapPanel').animate({width:'5%', left: '5%'});
      // $('.js-mapPanel').addClass('closed');
      // $('.panelName2').show();
    }
	});



// --------------------------------------------------

	// Product Events
	$('.js-product').click( function () {
		$('.js-product').animate({width:'90%', left: "5%"});
		$('.js-product').removeClass('closed');
    $('.panelName22').hide();

		if (! $('.js-mapOrder').hasClass('closed') ) {
			$('.js-mapOrder').animate({width:'5%'});
			$('.js-mapOrder').addClass('closed');
      $('.panelName11').show();
		}
		if (! $('.js-review').hasClass('closed') ) {
			$('.js-review').animate({width:'5%'});
			$('.js-review').addClass('closed');
      $('.panelName33').show();
		}
	});
	// $('.js-closeProduct').click( function (e) {
	// 	e.stopPropagation();
	// 	$('.js-product').animate({width:'5%'});
	// 	$('.js-product').addClass('closed');
	// });

	// Map Events
	$('.js-mapOrder').click( function () {
		$('.js-mapOrder').animate({width:'90%'});
    $('.js-mapOrder').removeClass('closed');
		$('.panelName11').hide();
    $('.js-product').animate({left:'90%'});

		if (! $('.js-product').hasClass('closed') ) {
			$('.js-product').animate({width:'5%'});
      $('.js-product').addClass('closed');
      // $('.js-product').animate({left:'90%'});
			$('.panelName22').show();
		}
		if (! $('.js-review').hasClass('closed') ) {
			$('.js-review').animate({width:'5%'});
      $('.js-review').addClass('closed');
      $('.panelName33').show();
		}
		if ( $('.js-product').hasClass('closed') ) {
      // $('.js-product').animate({width:'5%'});
			// $('.js-product').addClass('closed');
      $('.panelName22').show();
		}
	});

	//Review events
	$('.js-review').click( function () {
		$('.js-review').animate({width:'90%'});
		$('.js-review').removeClass('closed');
    $('.panelName33').hide();

		if (! $('.js-product').hasClass('closed') ) {
			// $('.js-product').animate({width:'5%'});
			$('.js-product').addClass('closed');
      $('.panelName22').show();
		}
		if (! $('.js-mapOrder').hasClass('closed') ) {
			$('.js-mapOrder').animate({width:'5%'});
			$('.js-mapOrder').addClass('closed');
      $('.panelName11').show();
		}
		// Moving to Review Panel from Map Panel fix
		if ( $('.js-product').hasClass('closed') ) {
			$('.js-product').animate({width:'5%', left: '5%'});
			// $('.js-review').addClass('closed');
      // $('.panelName22').show();
		}
	});


// ------------------------------------------------
	// Map Starts here
  var map;
  var bounds;
  var directionsService;
  var stepDisplay;
 
  var position;
  var marker = [];
  var polyline = [];
  var poly2 = [];
  var poly = null;
  var startLocation = [];
  var endLocation = [];
  var timerHandle = [];
  var currentDistance = [];
    
  
  var speed = 0.000005, wait = 1;
  var infowindow = null;
  
  var myPano;   
  var panoClient;
  var nextPanoId;
  var timerHandle = [];


  
  var startLoc = new Array();
  startLoc[0] = 'bayshore, Miami';
  startLoc[1] = 'Miami International Airport, Miami';
  startLoc[2] = 'coconut grove, Miami';
  startLoc[3] = 'little haiti, Miami';
  startLoc[4] = 'Mid-Beach, Miami';
  startLoc[5] = 'downtown, Miami';

  var endLoc = new Array();
  endLoc[0] = 'Wynwood, Miami';
  endLoc[1] = 'brickell, Miami';
  endLoc[2] = 'Wynwood, Miami';
  endLoc[3] = 'brickell, Miami';
  endLoc[4] = 'south beach, Miami';
  endLoc[5] = 'Allapattah, Miami';


  var Colors = ["#FF0000", "#00FF00", "#0000FF"];
  var DriverArr = ["Nizar", "Josh", "Devorah", "Gabe", 
                   "Nick", "Jumbo", "Mark", "Billy",
                   "Dr. Johnson", "Arnold", "Sammy"];
  // var Driver = DriverArr[Math.floor(Math.random() * DriverArr.length)];


  function initialize() { 

    if (map) {
      return;
    }
      console.log("MAP", map);

    infowindow = new google.maps.InfoWindow(
      { 
        size: new google.maps.Size(150,50)
      });

      var myOptions = {
        zoom: 13,
        center: {lat: 25.795865, lng: -80.27496050000002},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      map = new google.maps.Map(document.getElementById("map"), myOptions);
      address = 'Miami'
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address}, function(results, status) {
        // map.fitBounds(results[0].geometry.viewport);
      }); 
    setRoutes();
    } 

  function setRoutes(){   

      var directionsDisplay = new Array();

      for (var i=0; i< startLoc.length; i++){
        var rendererOptions = {
            map: map,
            suppressMarkers : true,
            preserveViewport: true,
            suppressPolylines: true,
        }
        directionsService = new google.maps.DirectionsService();

        var travelMode = google.maps.DirectionsTravelMode.DRIVING;  
        var request = {
            origin: startLoc[i],
            destination: endLoc[i],
            travelMode: travelMode
        };  

        directionsService.route(request,makeRouteCallback(i,directionsDisplay[i]));
  }   
  function createMarker(latlng, label, html) {
    console.log("createMarker", label);
  // alert("createMarker("+latlng+","+label+","+html+","+color+")");
      var contentString = '<b>'+label+'</b><br>'+html;
      var carIcon = {
          url: 'http://i68.tinypic.com/imp9c2.png',
          // This marker is 20 pixels wide by 32 pixels high.
          scaledSize: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          // origin: new google.maps.Point(10, 10),
          // The anchor for this image is the base of the flagpole at (0, 32).
          // anchor: new google.maps.Point(0, 32)
      }
      var marker = new google.maps.Marker({
          position: latlng,
          map: map,
          title: label,
          icon: carIcon,
          zIndex: Math.round(latlng.lat()*-100000)<<5
          });
          marker.myname = label;


      google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(contentString); 
          infowindow.open(map,marker);
          });
      return marker;
  }  


  function makeRouteCallback(routeNum,disp){
    console.log("makeRouteCallback");

        if (polyline[routeNum] && (polyline[routeNum].getMap() != null)) {
         startAnimation(routeNum);
         return;
        }
        return function(response, status){
        console.log("Route:",routeNum);
        if (status == google.maps.DirectionsStatus.OK){

          bounds = new google.maps.LatLngBounds();
          var route = response.routes[0];
          startLocation[routeNum] = new Object();
          endLocation[routeNum] = new Object();


          polyline[routeNum] = new google.maps.Polyline({
          path: [],
          strokeColor: '#FFF',
          strokeWeight: 0
          });

          poly2[routeNum] = new google.maps.Polyline({
          path: [],
          strokeColor: '#000',
          strokeWeight: 0
          });     


          // For each route, display summary information.
          var path = response.routes[0].overview_path;
          var legs = response.routes[0].legs;


          disp = new google.maps.DirectionsRenderer(rendererOptions);     
          disp.setMap(map);
          disp.setDirections(response);


          //Markers               
          for (i=0;i<legs.length;i++) {
            if (i == 0) { 
              startLocation[routeNum].latlng = legs[i].start_location;
              startLocation[routeNum].address = legs[i].start_address;
              // marker = google.maps.Marker({map:map,position: startLocation.latlng});
              marker[routeNum] = createMarker(legs[i].start_location, DriverArr[Math.floor(Math.random() * DriverArr.length)],"Delivering to : "+legs[i].start_address,"green");
            }
            endLocation[routeNum].latlng = legs[i].end_location;
            endLocation[routeNum].address = legs[i].end_address;
            var steps = legs[i].steps;

            for (j=0;j<steps.length;j++) {
              var nextSegment = steps[j].path;                
              var nextSegment = steps[j].path;

              for (k=0;k<nextSegment.length;k++) {
                  polyline[routeNum].getPath().push(nextSegment[k]);
                  bounds.extend(nextSegment[k]);
              }

            }
          }

        }       

           polyline[routeNum].setMap(map);
           startAnimation(routeNum);  

      } // else alert("Directions request failed: "+status);

    }

  }

      var lastVertex = 1;
      var stepnum=0;
      var step = 5; // 5; // metres
      var tick = 100; // milliseconds
      var eol= [];
  //----------------------------------------------------------------------                
   function updatePoly(i,d) {

   // Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
      if (poly2[i].getPath().getLength() > 20) {
            poly2[i]=new google.maps.Polyline([polyline[i].getPath().getAt(lastVertex-1)]);
            // map.addOverlay(poly2)
          }

      if (polyline[i].GetIndexAtDistance(d) < lastVertex+2) {
          if (poly2[i].getPath().getLength()>1) {
              poly2[i].getPath().removeAt(poly2[i].getPath().getLength()-1)
          }
              poly2[i].getPath().insertAt(poly2[i].getPath().getLength(),polyline[i].GetPointAtDistance(d));
      } else {
          poly2[i].getPath().insertAt(poly2[i].getPath().getLength(),endLocation[i].latlng);
      }
   }
  //----------------------------------------------------------------------------

  function animate(index,d) {

     if (d>eol[index]) {

        marker[index].setPosition(endLocation[index].latlng);
        marker[index].setOptions({zIndex: Math.round(latlng.lat()*-100000)<<5});
        return;
     }
      var p = polyline[index].GetPointAtDistance(d);

      //map.panTo(p);
      marker[index].setPosition(p);
      marker[index].setOptions({zIndex: Math.round(p.lat()*-100000)<<5});
      updatePoly(index,d);
      function start () {
        animate(index, (d+step));
      }
      timerHandle[index] = setTimeout(start, tick);
      currentDistance[index]=d+step;
  }

  //-------------------------------------------------------------------------

  function startAnimation(index) {
    // console.log("startAnimation");

          // console.log("timerHandle:",timerHandle);
          if (timerHandle[index]) clearTimeout(timerHandle[index]);
          eol[index]=polyline[index].Distance();
          // map.setCenter(polyline[index].getPath().getAt(0));

          poly2[index] = new google.maps.Polyline({path: [polyline[index].getPath().getAt(0)], strokeColor:"#FFF", strokeWeight: 3});
          function start () {
            animate(index,50)
          }
          timerHandle[index] = setTimeout(start,2000);  // Allow time for the initial map display
  }  

// Flashing Title; Went with CSS only version of this
// 	var flashBaby = $('.title');
	
// 	setInterval(function() {
//    	flashBaby.toggleClass('blinking');
// 	}, 700);
  var quantity = 1;
  var total = 0;

  $('.holder #reviewTable').hide();
  $( ".1" ).on( "click", function() {
      $('.holder #reviewTable').show();

      var name = $(this).data('name');
      var size = $(this).data('size');
      // .attr does the same thing as .data 
      var price = $(this).attr('data-price');
      var id = $(this).data('id');
      var s = "&nbsp;&nbsp;&nbsp;";

      var table = document.getElementById("reviewTable");

      var row = table.insertRow(0);
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);

      cell1.innerHTML = "1 x " + s;
      cell2.innerHTML = s+ name;
      cell3.innerHTML = s+s+ size;
      cell4.innerHTML = s+s+s+ "$" + price;

      priceInt = parseFloat(price);
      total += priceInt;
      totalFixed = total.toFixed(2);

      showTotal = s+s+s+s+'Your Total is' +s+ '$' + totalFixed;

      $('#totalRecall').html(showTotal);

      var productOrder = `
        <input type='hidden' name="product_order[product_id][]" 
          class="js-pProductID" value="${id}">
        `

      $('form').append(productOrder);
  });




})
