# Javascript Dropdown
Javascript dropdown - tiny and simple.

## Status
[![JS gzip size](https://img.badgesize.io/kenangundogan/javascript-dropdown/main/dist/script/script.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/kenangundogan/javascript-dropdown/blob/main/dist/script/script.js)
[![JS Brotli size](https://img.badgesize.io/kenangundogan/javascript-dropdown/main/dist/script/script.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/kenangundogan/javascript-dropdown/blob/main/dist/script/script.js)
[![CSS gzip size](https://img.badgesize.io/kenangundogan/javascript-dropdown/main/dist/style/style.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/kenangundogan/javascript-dropdown/blob/main/dist/style/style.css)
[![CSS Brotli size](https://img.badgesize.io/kenangundogan/javascript-dropdown/main/dist/style/style.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/kenangundogan/javascript-dropdown/blob/main/dist/style/style.css)

![Javascript Accordion](https://raw.githubusercontent.com/kenangundogan/javascript-dropdown/main/asset/javascript-dropdown-cover.png)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
id | string |  | DOM element | [Example](https://kenangundogan.github.io/javascript-dropdown)
data-position | string | bottom | top,right,bottom,left | [Example](https://kenangundogan.github.io/javascript-dropdown)
data-height | int |  | scroll height | [Example](https://kenangundogan.github.io/javascript-dropdown)

### View
```html
<div class="dropdown-container">
    <!-- Button trigger modal -->
    <button 
        class="dropdown-btn"
        data-target="dropdown-default"
    >
    Default Dropdown
    </button>

    <!-- Dropdown List -->
    <div 
        class="dropdown-list" 
        id="dropdown-default"
        >
        <li class="dropdown-item"><a href="#">...</a></li>
        ...
    </div>
</div>
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-dropdown/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
