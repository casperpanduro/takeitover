# takeitover.js
This a plugin for content to show as a takeover, or popup if you will. You simply just add a single file for your project and follow the guide, and you will be able to show content in a popup. It simply and works very well.

## How to add it
### HTML
Inlcude the takeitover.min.js in your project.

```HTML
<div id="takeitover">
  <div class="takeitover-trigger">
    <!-- this the element you click to open your takeover -->
  </div>
  <div class="takeitover-content">
    <!-- This is the content that will be shown in a takeover -->
    <!-- Inside here you can put your own markup and all of it will be shown in a takeover -->
  </div>
</div>
```
### JQUERY
Add this just before the body end tag.
```Javascript
<script>
  $(document).ready(function(){
    $("#takeitover").takeitover();
  });
</script>
```

## Options
#### speed (Default: 500)
Adjust the speed of the animation


#### easing (Default: false)
Control the easing of the animation. Use the JQUERY UI easings in here. 
<br>OBS: You need to include JQUERY UI for this to work.

#### elementSelector (Default: '.takeitover-trigger')
This is the element you that triggers the takeover

#### contentSelector (Default: '.takeitover-content')
This is the content selector that displays in the takeover

#### background (Default: 'rgba(255,255,255,0.95)')
The background color of the overlay

#### clickOnOverlay (Default: true)
Detects weather the takeover should close when the user clicks the overlay

#### closeButton (Default: true)
Set to false if you dont want to show any closeButton

#### buttonColor (Default: "black")
Control the color of the close button

### How to write the options
```Javascript
<script>
  $(document).ready(function(){
    $("#takeitover").takeitover({
      speed: 500,
      easing: false,
      elementSelector: '.takeitover-trigger',
      contentSelector: '.takeitover-content',
      background: 'rgba(255,255,255,0.95)',
      clickOnOverlay: true,
      closeButton: true,
      buttonColor: "black"
    });
  });
</script>
```
