jQuery + Underscorejs tabs plugin example.

Simple usage:

Html:
```html
    <div id="tab-container">
        <ul class="tabs-links">
            <li><a href="#" class="active">Tab 1</a></li>
            <li><a href="#">Tab 2</a></li>
            <li><a href="#">Tab 3</a></li>
        </ul>
        <div class="tab-content-container">
        </div>
    </div>
```
Template:
```javascript
 <script id="tabsTemplate" type="text/template">
     <div>
         <h3> Tab 1 content for <%=name %>  and <%=country %></h3>
         <p>
             1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
     </div>
 </script>
```
 Call the plugin:
 ```javascript
     (function($, _) {
         $('#tab-container').tabs({
             tabsContainerClass: "tab-content-container",
             template: $('#tabsTemplate').html(),
             fadeIn: true
         });

     })(jQuery, _);
 ```
