define(["underscore", "jquery", 'backbone', 'Elements'], function (_, $, backbone, Elements) {
    var self = this;
    var gui = require('nw.gui');
    var mainAppWin = gui.Window.get();
    var tray;

    self.Elements = new Elements();


    $(self.Elements.CLOSE_ME).click(function(){
        mainAppWin.close();
    });

    process.on('uncaughtException', function (err) {
        alert('Uncaught ERROR: '+err);
    });

    process.on('exit', function(code) {
        alert('aaa');
    });

    process.on('close', function(code) {
        alert('aaa');
    });

    mainAppWin.on('resize', function () {
        localStorage.x = mainAppWin.x;
        localStorage.y = mainAppWin.y;
        localStorage.width = mainAppWin.width;
        localStorage.height = mainAppWin.height;
        //this.close(true);
    });

    if (localStorage.width &&
        localStorage.height) {
        mainAppWin.resizeTo(parseInt(localStorage.width),
            parseInt(localStorage.height));
    }
    if (localStorage.x && localStorage.y) {
        mainAppWin.moveTo(parseInt(localStorage.x),
            parseInt(localStorage.y));
    } else {
// THIS WILL POSITION THE MAIN WINDOW, INITIALLY
// NO EASY WAY IN MANIFEST FILE
        mainAppWin.moveTo(25, 25); // REPLACE  x, y
                                   // FROM TOP LEFT
    }
// Now display the window
    mainAppWin.show();

    /*
    var win = gui.Window.open
    ('http://en.wikipedia.org/wiki/Main_Page',
        {
            'always-on-top': true,
            'new-instance': true,
            width: 600,
            height: 400
        });

     */
    // Capture minimize event
    mainAppWin.on('minimize', function () {

        // Hide window
        mainAppWin.hide();

        // Show tray
        tray = new gui.Tray({icon: 'assets/js.png'});

        // Give it a tooltip
        tray.tooltip = 'tooltip';

        // Give it a menu
        var menu = new gui.Menu();
        menu.append(new gui.MenuItem
        ({type: 'checkbox', label: 'box1'}));
        tray.menu = menu;

        // Show window and remove tray on click
        tray.on('click', function () {
            mainAppWin.show();
            this.remove();
            tray = null;
        })


    });
});