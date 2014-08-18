
var app = angular.module("app",[]);

app.config(function($routeProvider) {
	$routeProvider.when('/noticias',{
      templateUrl:'templates/noticias.html',
      controller:'NoticiasController'
	});
    $routeProvider.when('/home',{
       templateUrl:'templates/home.html',
        controller:'HomeController'
    });
    $routeProvider.when('/galerias',{
        templateUrl:'templates/galerias.html',
        controller:'GaleriasController'
    });
    $routeProvider.when('/contactos',{
        templateUrl:'templates/contactos.html',
        controller:'ContactosController'
    });
	$routeProvider.otherwise({redirectTo:'/home'});
});

app.controller('LoginController',function($scope,$location){

   $scope.redirec=function(){
      console.log("entroo");
       $location.path('/home');
   }
});
app.controller('HomeController',function(){

});
app.controller('ContactosController',function(){
    var myLatlng = new google.maps.LatLng(-12.079301  ,   -77.094152);
    var mapOptions = {
        scaleControl:true,
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);
    var contentString = '<div id="content" c>'+
        '<div id="siteNotice">'+
        '</div>'+
        '<a href="#" style="text-decoration:none;"><h1 id="firstHeading" class="firstHeading">EdiGym</h1></a>'+
        '<div id="bodyContent">'+
        '<p>Rafael Escardo 374</p>' +
        '<p>San Miguel 15087,Peru</p>'+
        '<p>+51 1 5786774</p>'+
        '<p><a href="#" style="text-decoration:none;">edigym.com<a></p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"EdiGym"
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });});
app.controller('NoticiasController',function(){

});
app.controller('GaleriasController',function(){

});