"use strict";

(function() {
    if (process.platform == 'darwin') {
        var gui = require('nw.gui');
        var mb = new gui.Menu({
            type: "menubar"
        });
        var win = gui.Window.get();

        mb.createMacBuiltin(require("../package.json").name);
        win.menu = mb;
    }
})();

$(document).ready(function(){
  $('#mybutton').click( function() {
    $('#mylabel').text('Hello World');
  });
});
