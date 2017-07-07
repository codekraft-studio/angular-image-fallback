# angular-image-fallback
> angularjs directive that handle errors during images loading

### [DEMO](http://www.codekraft.it/demos/angular-image-fallback/)

## Getting started:

You can clone the package from GitHub:
```bash
git clone https://github.com/codekraft-studio/angular-image-fallback.git
```

Install it via Bower:
```bash
bower install --save angular1-image-fallback
```

Use it from the GitHub CDN:
```html
<script type="text/javascript" src="https://cdn.rawgit.com/codekraft-studio/angular-image-fallback/master/dist/angular-image-fallback.min.js"></script>
```

Than add __angular-progress__ to your application dependencies:
```javascript
angular.module('app', ['angular-image-fallback'])
```

Now you are ready to use the **image-fallback** directive.

---

## How does it works:

The directive should be used in combination with **ng-src** attribute, because the value of **src** attribute will be evaluated before the directive and angularjs itself is fully loaded.

Once the source has been set by ng-src the directive will listen for any error during the image loading, if that happen it will display a default or custom fallback image.

The default fallback image is taken from Google Icons and is under the [CC BY (Creative Commons) License](https://creativecommons.org/licenses/by/4.0/).

---

## Example:

```html

<!-- default image -->
<img class="thumb" ng-src="errorLink.jpg" image-fallback />

<!-- custom image -->
<img class="thumb" ng-src="errorLink.jpg" image-fallback="myFallbackImage.jpg" />

```

If the **custom image loading fails**, the default one will be used instead.

---

## Service methods:

You can use the imageFallbackService to customize the module settings for you app:

* **getDefaultImage**: get the default module fallback image
* **setDefaultImage**: set a new default module fallback image

```javascript
angular.module('app')
.controller('MainCtrl', function (imageFallbackService) {

  // get the default image
  var defaultImg = imageFallbackService.getDefaultImage();

  // set the default image
  imageFallbackService.setDefaultImage( 'myImage.jpg' );

})
```

---

## Contributing

1. Create an issue and describe your idea
2. Fork the project (https://github.com/codekraft-studio/angular-image-fallback/fork)
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Publish the branch (`git push origin my-new-feature`)
6. Add some test for your new feature
7. Create a new Pull Request

