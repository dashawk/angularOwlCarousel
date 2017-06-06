'use strict';

var ngApp = angular.module('jmp.carousel', []);

(function (app) {

    CarouselController.prototype.start = start;
    CarouselController.prototype.Carousel = Carousel;
	
	// Directive default options
	var defaultOptions = {
		rtl: false,
		loop: true,
		margin: 10,
		nav: true
	};
	
    app.directive('owlCarousel', ['$timeout', function($timeout) {
        return {
            restrict: 'EA',
            controller: CarouselController,
            scope: {
				owlCarousel: '=',
				owlInstance: '&'
            },
            transclude: true,
            template: '<div class="owl-carousel owl-theme" ng-transclude></div>',
            link: function (scope, element, attrs, controller) {
            	// Owl carousel options holder
				scope.options = {};
				
				// Owl Carousel
            	scope.carousel = null;

            	// Start owl carousel
				$timeout(function () { init(); });
                
                scope.$watch('owlCarousel', function (nval) {
                	if (nval) {
                		scope.options = setOptions(nval);
					}
				});
	
				scope.$on('$destroy', destroy);
                
                function init() {
                	scope.$apply(function () {
						scope.carousel = element.find('.owl-carousel');
						scope.carousel.owlCarousel(scope.options);
						controller.start(scope.carousel);
		
						if (scope.owlInstance) {
							scope.owlInstance({ $owl: controller.Carousel() });
						}
					});
                }
                function setOptions(o) {
                	var options = angular.extend({}, defaultOptions, 0);
                	
                	if (o) {
                		for (var key in o) {
                			if (o.hasOwnProperty(key)) {
                				options[key] = o[key];
							}
						}
					}
					return options;
				}
				function destroy() {
                	var stage = element.find('.owl-stage');
					controller.Carousel().trigger('destroy.owl.carousel');
					
					if (stage.length) {
						stage.remove();
					}
				}
            }
        };
    }]);

    function CarouselController() {
        this.instance = {};
    }

    function start() {
        this.instance = arguments[0];
    }
    function Carousel() {
        var self = this;
        return {
            trigger: trigger
        };
	
		/**
		 * @param selector
		 * @param {[*]} speed
		 */
		function trigger(selector, speed) {
			// Allow to just input a number instead of an array
			if (!angular.isArray(speed)) {
				speed = [speed];
				arguments[1] = speed;
			}
			
            self.instance.trigger.apply(self.instance, arguments);
        }
    }
}(ngApp));
