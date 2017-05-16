# takeitover.js
This a plugin for content to show as a takeover, or popup if you will. You simply just add a single file for your project and follow the guide, and you will be able to show content in a popup. It simply and works very well.
[I'm a relative reference to a repository file](../takeitover/master/src)

## How to add it
### JQUERY
Add this just before the body end tag.
```Javascript
<!-- JQUERY LIBARY -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<!-- TAKEITOVER -->
<script src="YOURLOCATION/takeitover.min.js"></script> 
<script>
  $(document).ready(function(){
    // select the element you want to have as trigger for the takeitover content
    $(".takeitover-trigger").takeitover();
  });
</script>
```
### HTML
Inlcude the takeitover.min.js in your project.

```HTML
<div class="takeitover-trigger">
  <!-- this the element you click to open your takeover -->
</div>
<div class="takeitover-content">
  <!-- This is the content that will be shown in a takeover -->
  <!-- Inside here you can put your own markup and all of it will be shown in a takeover -->
</div>
```
## Target specific element

```HTML
<div class="takeitover-trigger" data-target="#target">
  <!-- add 'data-target' attribute to target a element -->
</div>
<div class="takeitover-content" id="target">
  <!-- By doing this you can place this element anyplace you want in the document -->
</div>
```

## Options
#### speed (Default: 500)
Adjust the speed of the animation

#### easing (Default: false)
Jquery UI easings. Needs to have jquery UI installed for this to work.

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

#### before (Default: null)
The before function for when animation has started

#### callback (Default: null)
The callback function for when animation has 

##### Example: 
```Javascript
<script>
  $(document).ready(function(){
    $(".takeitover-trigger").takeitover({
      callback: function(){
        // do something
      },
    });
  });
</script>
```

#### closeFunction (Default: null)
Call a function when takeitover closes

### How to write the options
```Javascript
<script>
  $(document).ready(function(){
    $(".takeitover-trigger").takeitover({
      speed: 500,
      easing: false,
      contentSelector: '.takeitover-content',
      background: 'rgba(255,255,255,0.95)',
      clickOnOverlay: true,
      closeButton: true, // false if you dont want to display the close button
      buttonColor: "black", // write any color you want
      before: function(){
        // do something
      },
      callback: function(){
        // do something
      },
      closeFunction: function(){
        // do something
      }
    });
  });
</script>
```