(function() {

  function render() {
    // Load Rimu source from tab URL.
    var xhr = new XMLHttpRequest();
    xhr.onload = function() { // Run this function when source has been retrieved.
      // Add styling.
      addStylesheet('css/bootstrap-combined-2.3.2.min.css');
      addStylesheet('css/rimu.css');
      // Convert Rimu to HTML and put it in the document.
      var html = Rimu.render(xhr.responseText);
      document.body.innerHTML = html;
    };
    xhr.open('GET', location.href, true);
    xhr.send();
  }

  // Link CSS file to document.
  function addStylesheet(cssFile) {
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.type = 'text/css';
    el.href = chrome.extension.getURL(cssFile);
    document.head.appendChild(el);
  }

  render();

}());
