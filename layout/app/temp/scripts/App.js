/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _copyrightYear = __webpack_require__(1);

var _copyrightYear2 = _interopRequireDefault(_copyrightYear);

var _uiToTop = __webpack_require__(2);

var _uiToTop2 = _interopRequireDefault(_uiToTop);

var _swiper = __webpack_require__(3);

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Instantiate a new object using our modules/classes
var copyrightYear = new _copyrightYear2.default(); // 3rd party packages from NPM

// Our modules / classes

var uitotop = new _uiToTop2.default();
var swiper = new _swiper2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CopyrightYear = function () {
  function CopyrightYear() {
    _classCallCheck(this, CopyrightYear);

    this.allMethods();
  }

  _createClass(CopyrightYear, [{
    key: "allMethods",
    value: function allMethods() {

      (function () {

        /**
         * Global variables
         */

        var userAgent = navigator.userAgent.toLowerCase(),
            initialDate = new Date(),
            $document = $(document),
            $window = $(window),
            $html = $("html"),
            $body = $('body'),
            isDesktop = $html.hasClass("desktop"),
            isRtl = $html.attr("dir") === "rtl",
            isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTouch = "ontouchstart" in window,
            onloadCaptchaCallback,
            plugins = {
          copyrightYear: $(".copyright-year")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
          * Copyright Year
          * @description  Evaluates correct copyright year
          */
          if (plugins.copyrightYear.length) {
            plugins.copyrightYear.text(initialDate.getFullYear());
          }
        });
      })();
    }
  }]);

  return CopyrightYear;
}();

exports.default = CopyrightYear;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIToTop = function () {
  function UIToTop() {
    _classCallCheck(this, UIToTop);

    this.allMethods();
  }

  _createClass(UIToTop, [{
    key: "allMethods",
    value: function allMethods() {

      (function () {

        /**
         * Global variables
         */

        var userAgent = navigator.userAgent.toLowerCase(),
            initialDate = new Date(),
            $document = $(document),
            $window = $(window),
            $html = $("html"),
            $body = $('body'),
            isDesktop = $html.hasClass("desktop"),
            isRtl = $html.attr("dir") === "rtl",
            isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTouch = "ontouchstart" in window,
            onloadCaptchaCallback;

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * UI To Top
           * @description Enables ToTop Button
           */
          if (isDesktop && !isNoviBuilder) {
            $().UItoTop({
              easingType: 'easeOutQuart',
              containerClass: 'ui-to-top'
            });
          }
        });
      })();
    }
  }]);

  return UIToTop;
}();

exports.default = UIToTop;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swiper = function () {
  function Swiper() {
    _classCallCheck(this, Swiper);

    this.allMethods();
  }

  _createClass(Swiper, [{
    key: "allMethods",
    value: function allMethods() {

      (function () {

        /**
         * Global variables
         */

        var userAgent = navigator.userAgent.toLowerCase(),
            initialDate = new Date(),
            $document = $(document),
            $window = $(window),
            $html = $("html"),
            $body = $('body'),
            isDesktop = $html.hasClass("desktop"),
            isRtl = $html.attr("dir") === "rtl",
            isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
            isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isTouch = "ontouchstart" in window,
            onloadCaptchaCallback,
            plugins = {
          swiper: $(".swiper-slider")
        };

        /**
         * Initialize All Scripts
         */
        $document.ready(function () {
          var isNoviBuilder = window.xMode;

          /**
           * getSwiperHeight
           * @description  calculate the height of swiper slider basing on data attr
           */
          function getSwiperHeight(object, attr) {
            var val = object.attr("data-" + attr),
                dim;

            if (!val) {
              return undefined;
            }

            dim = val.match(/(px)|(%)|(vh)$/i);

            if (dim.length) {
              switch (dim[0]) {
                case "px":
                  return parseFloat(val);
                case "vh":
                  return $window.height() * (parseFloat(val) / 100);
                case "%":
                  return object.width() * (parseFloat(val) / 100);
              }
            } else {
              return undefined;
            }
          }

          /**
           * toggleSwiperInnerVideos
           * @description  toggle swiper videos on active slides
           */
          function toggleSwiperInnerVideos(swiper) {
            var prevSlide = $(swiper.slides[swiper.previousIndex]),
                nextSlide = $(swiper.slides[swiper.activeIndex]),
                videos,
                videoItems = prevSlide.find("video");

            for (i = 0; i < videoItems.length; i++) {
              videoItems[i].pause();
            }

            videos = nextSlide.find("video");
            if (videos.length) {
              videos.get(0).play();
            }
          }

          // *
          //  * toggleSwiperCaptionAnimation
          //  * @description  toggle swiper animations on active slides

          function toggleSwiperCaptionAnimation(swiper) {
            var prevSlide = $(swiper.container).find("[data-caption-animate]"),
                nextSlide = $(swiper.slides[swiper.activeIndex]).find("[data-caption-animate]"),
                delay,
                duration,
                nextSlideItem,
                prevSlideItem;

            for (i = 0; i < prevSlide.length; i++) {
              prevSlideItem = $(prevSlide[i]);

              prevSlideItem.removeClass("animated").removeClass(prevSlideItem.attr("data-caption-animate")).addClass("not-animated");
            }

            for (i = 0; i < nextSlide.length; i++) {
              nextSlideItem = $(nextSlide[i]);
              delay = nextSlideItem.attr("data-caption-delay");
              duration = nextSlideItem.attr('data-caption-duration');

              var tempFunction = function tempFunction(nextSlideItem, duration) {
                return function () {
                  nextSlideItem.removeClass("not-animated").addClass(nextSlideItem.attr("data-caption-animate")).addClass("animated");

                  if (duration) {
                    nextSlideItem.css('animation-duration', duration + 'ms');
                  }
                };
              };

              setTimeout(tempFunction(nextSlideItem, duration), delay ? parseInt(delay, 10) : 0);
            }
          }

          /**
           * Swiper 3.1.7
           * @description  Enable Swiper Slider
           */
          if (plugins.swiper.length) {
            var i;
            for (i = 0; i < plugins.swiper.length; i++) {
              var s = $(plugins.swiper[i]);
              var pag = s.find(".swiper-pagination").length > 0 ? s.find(".swiper-pagination") : $(s.attr('data-custom-pagination')),
                  next = s.find(".swiper-button-next"),
                  prev = s.find(".swiper-button-prev"),
                  bar = s.find(".swiper-scrollbar"),
                  swiperSlide = s.find(".swiper-slide"),
                  autoplay = true;

              for (j = 0; j < swiperSlide.length; j++) {
                var $this = $(swiperSlide[j]),
                    url;

                if (url = $this.attr("data-slide-bg")) {
                  $this.css({
                    "background-image": "url(" + url + ")",
                    "background-size": "cover"
                  });
                }
              }

              swiperSlide.end().find("[data-caption-animate]").addClass("not-animated").end().swiper({
                autoplay: isNoviBuilder ? null : s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
                direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
                effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
                speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
                keyboardControl: s.attr('data-keyboard') === "true",
                mousewheelControl: s.attr('data-mousewheel') === "true",
                mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
                nextButton: next.length ? next.get(0) : null,
                prevButton: prev.length ? prev.get(0) : null,
                pagination: pag.length ? pag.get(0) : null,
                paginationClickable: pag.length ? s.attr("data-clickable") !== "false" : true,
                paginationBulletRender: pag.length ? s.attr("data-index-bullet") === "true" ? function (swiper, index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                } : null : null,
                scrollbar: bar.length ? bar.get(0) : null,
                scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
                scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
                loop: isNoviBuilder ? false : s.attr('data-loop') !== "false",
                simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : false,
                onTransitionStart: function onTransitionStart(swiper) {
                  toggleSwiperInnerVideos(swiper);
                },
                onTransitionEnd: function onTransitionEnd(swiper) {
                  toggleSwiperCaptionAnimation(swiper);
                },
                onInit: function onInit(swiper) {
                  toggleSwiperInnerVideos(swiper);
                  toggleSwiperCaptionAnimation(swiper);

                  $window.on('resize', function () {
                    swiper.update(true);
                  });
                }
              });

              $window.on("resize", function () {
                var mh = getSwiperHeight(s, "min-height"),
                    h = getSwiperHeight(s, "height");
                if (h) {
                  s.css("height", mh ? mh > h ? mh : h : h);
                }
              }).trigger("resize");
            }
          };

          if (plugins.rdMailForm.length) {
            var i,
                j,
                k,
                msg = {};
          };
        });
      })();
    }
  }]);

  return Swiper;
}();

exports.default = Swiper;

/***/ })
/******/ ]);