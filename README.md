# gmail-link-cleaner-bookmarklet
Bookmarklet allows you to select a link in GMail, click the bookmarklet, and the link will open in a new page without all the Google tracking.

Install with ```html<a href="javascript:(function(){"use strict";var e=window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection?document.selection.createRange():null;e&&window.open(e,"_blank")}());">this link</a>```
(just right-click and "Bookmark Link", or drag it to your bookmarks bar.)

Note, this link used the same minified javascript as in the repo.
