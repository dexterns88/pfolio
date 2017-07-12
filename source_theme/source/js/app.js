/**
 * Created by dexter on 7/12/16.
 */

$(function(){

  $(document).ready(function() {

    // close nav bar after click on item
    var navMain = $("#bs-example-navbar-collapse-1");
    navMain.on("click", ".navbar-nav a", null, function () {
      navMain.collapse('hide');
    });
  });

});