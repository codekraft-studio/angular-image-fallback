# angular-image-fallback
a directive that handle errors in images loading

### Getting started:

Download the package from GitHub.
```bash
git clone https://github.com/codekraft-studio/angular-image-fallback.git
```

Or use it from the GitHub CDN:
```html
<script type="text/javascript" src="https://cdn.rawgit.com/codekraft-studio/angular-image-fallback/master/dist/angular-image-fallback.min.js"></script>
```

Add __angular-progress__ to your module dependencies:
```javascript
angular.module('app', ['angular-image-fallback'])
```

---

### How does it works:

The directive should be used in combination with **ng-src** attribute, because the value of **src** attribute will be evaluated before the directive and angularjs itself is fully loaded.

Once the source has been set by ng-src the directive will listen for any error during the image loading, if that happen it will display a default or custom fallback image.

The default fallback image is taken from Google Icons and is under the [CC BY (Creative Commons) License](https://creativecommons.org/licenses/by/4.0/).

---

### Example:

```html

<!-- default image -->
<img class="thumb" ng-src="errorLink.jpg" image-fallback />

<!-- custom image -->
<img class="thumb" ng-src="errorLink.jpg" image-fallback="myFallbackImage.jpg" />

```

If the **custom image loading fails**, the default one will be used instead.
