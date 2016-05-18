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
