(function () {
    "use strict";
    var selection =
        window.getSelection ? window.getSelection()
        : document.getSelection ? document.getSelection()
        : document.selection ? document.selection.createRange()
        : null;
    if (selection) {
        window.open(selection, "_blank");
    }
}());
