# Rimu Markup Chrome Extension

Renders Rimu Markup (<http://rimumarkup.org/>) source files (`.rmu`)
in the Google Chrome web browser.

## Using the Viewer
- The extension renders any file or http URL ending with `.rmu` as
  HTML.
- Refresh with the usual browser reload command (_F5_).
- View the Rimu Markup source with the usual browser _View Source_
  command (_Ctrl+U_).

## Installation
1. Clone the Github repository:

        git clone https://github.com/srackham/rimu-chrome-extension.git

2. Open Chrome and go to the Extensions page (`chrome://extensions/`).
3. Tick the _Developer mode_ check-box.
4. Press the _Load unpacked extension..._ button and select the local
   repository directory created in step 1 -- this adds the _Rimu
   Markup Viewer_ to the Extensions.
5. Tick the _Rimu Markup Viewer_ extension _Allow access to file URLs_
   check-box.

Now you will be able view any file or URL ending in `.rmu` as HTML in
the browser.
