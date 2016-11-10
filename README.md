# takeitover.js
This a plugin for content to show as a takeover, or popup if you will. You simply just add a single file for your project and follow the guide, and you will be able to show content in a popup. It simply and works very well.

## The markup
### HTML
Inlcude the takeitover.min.js in your project.

```HTML
<div id="takeitover">
  <div class="element">
    <!-- this the element you click to open your takeover -->
  </div>
  <div class="content">
    <!-- This is the content that will be shown in a takeover -->
    <!-- Inside here you can put your own markup and all of it will be shown in a takeover -->
  </div>
</div>
```
### JQUERY
```Javascript
  $("#takeitover").takeitover();
```
