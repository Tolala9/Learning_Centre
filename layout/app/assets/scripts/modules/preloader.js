class Preloader{

	constructor() {
		this.allMethods();  
	}




  allMethods() {


    (function () { 

      // $(window).on('load', function() {
      //   $('.preloader').delay(100).fadeOut('slow');
      //   $('body').removeClass('stop-scrolling');
      // });
 
      var $loading = $('.lds-wedges, .lds-css').delay(1000).fadeOut('slow');
      // $('body').addClass('stop-scrolling');
      $(document)
      .ajaxStart(function () {
        $loading.show();

      })
      .ajaxStop(function () {
        $loading.hide();
      });

      // $(document).ready(function($) {
      //   var Body = $('body');
      //   Body.addClass('preloader-site');
      // });


    }());

  }

}

export default Preloader;