# sticky.js
Super small (just 0.1KB) jQuery plugin to add a class when scrolling past a certain point.

# Installation
```html
<script src="sticky.min.js"></script>
```

# Usage
Add the class `my-class` to the element with id `my-element` when the visitor scrolls past 50px from the page top. The class will automatically be removed when scrolling back past the trigger.

```javascript
$('#my-element').sticky(50, 'my-class');
```

Same as above, but triggered when the element is about to be scrolled past.
```javascript
var elementY = $('#my-element').offset().top;
$('#my-element').sticky(elementY, 'my-class');
```