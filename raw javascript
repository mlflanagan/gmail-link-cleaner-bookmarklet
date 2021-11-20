(function () {
    "use strict";
    var selection =
        window.getSelection ? window.getSelection()  // W3C
        : document.getSelection ? document.getSelection()  // redundant?
        : document.selection ? document.selection.createRange()  // IE
        : null;
    if (selection) {
        window.open(selection, "_blank");
    }
}());
