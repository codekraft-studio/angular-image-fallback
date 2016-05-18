angular.module('angular-image-fallback', [])

.directive('imageFallback', function($log, imageFallbackService) {

  var directive = {
    restict: 'A',
    priority: 100,
    link: _link
  }

  return directive;

  function _link(scope, element, attrs) {

    // default broken image
    var defaultSrc = imageFallbackService.getDefaultImage();

    // the fallback url
    var fallback = attrs.imageFallback || defaultSrc;

    /**
     * Check if the custom fallback image
     * can be loaded, otherwise use the default one
     */
    angular.element( new Image() )
    .attr('src', fallback)
    .on('error', function () {
      // notify the user
      $log.warn("angular-image-fallback: The fallback image can't be loaded, the default one will be used.");
      // set default fallback source
      fallback = defaultSrc;
      // remove element to prevent memory leaks
      angular.element(this).remove();
    })

    // error function
    var onError = function () {
      // check if not the same
      element.attr('src') !== fallback ? attrs.$set('src', fallback) : null;
    }

    // if sources are empty set the error source
    attrs.ngSrc || attrs.src ? null : onError();

    /**
    * On element load error
    * replace the source with the error fallback source
    */
    element.on('error', onError)

    /**
    * Unbind the error event
    * to prevent memory leaks
    */
    scope.$on('destroy', function () {
      element.off('error', onError)
    })

  }

})

.service('imageFallbackService', function() {

  var _defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAA00lEQVR4Ae2XwQqDQAxEveinFD9e2MUfq6Cep7GnrPAg1JVCu5OTvEwe9FLtWlpqR6OyVn2aXbNGdX6KB4OLrmbRyIKsGsksWKsINhbUShM0wVcEk43CnAVY722mMEfBhPWD9mGOAlvBepSDwK1gPc5LASp8fbCJ81KACl9PNkOYo8CfKOtHUpijwJ841y1xToJy5VxXnLPgvUL1OAeBW4F6kKPAnYB6jKPAnYA68PZ/8EOCJtjvfvmdqwjSvR8gTz1YcCiytgs/TvLnvaDi/J2gCV63ZgZdEb12DwAAAABJRU5ErkJggg=="

  var service = {
    getDefaultImage: _getDefaultImage,
    setDefaultImage: _setDefaultImage
  }

  return service;

  function _getDefaultImage() {
    return _defaultImage;
  }

  function _setDefaultImage(image) {
    return _defaultImage = image;
  }

})
