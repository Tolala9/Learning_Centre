class ToggleMenu{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 

      $(".toggle-mnu, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
        $('body').addClass('stop-scrolling');
      });

      $(".toggle-mnu").click(function(){
        if ($(".top-mnu").is(":visible")) {
          $(".top-mnu").fadeOut(600);
          $(".top-mnu li a").removeClass("fadeInUp animated");
        } else {
          $(".top-mnu").fadeIn(600);
          $(".top-mnu li a").addClass("fadeInUp animated");
        };
      }); 

      $(".top-mnu li a").click(function() {
        $(".top-mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
      }).append("<span>");

    }());

  }

}

export default ToggleMenu;