define(["underscore", "jquery", 'backbone', 'Elements', 'Pepper', 'PepperHelper'], function (_, $, backbone, Elements, Pepper, PepperHelper) {
    var self = this;
    var gui = require('nw.gui');
    var mainAppWin = gui.Window.get();
    var tray;
    var user = 'd13@ms.com';
    var pass = '';

    window.BB = Backbone;
    BB.Pepper = new Pepper();
    self.Elements = new Elements();

    $(self.Elements.CLOSE_ME).click(function () {
        mainAppWin.close();
    });

    if (_.isEmpty(pass)){
        alert('User and password were not set...');
        return;
    }

    process.on('uncaughtException', function (err) {
        alert('Uncaught ERROR: ' + err);
    });

    process.on('exit', function (code) {
    });

    process.on('close', function (code) {
    });

    BB.Pepper.dbConnect(user, pass, function (i_status) {
        if (i_status.status) {
            var recResources = BB.Pepper.getResources();
            setInterval(function () {
                var i = _.random(0, recResources.length - 1);
                populateResourcePreview(recResources[i]);
            }, 2000);
        } else {
            console.log('fail');
        }
    });

    mainAppWin.on('resize', function () {
        localStorage.x = mainAppWin.x;
        localStorage.y = mainAppWin.y;
        localStorage.width = mainAppWin.width;
        localStorage.height = mainAppWin.height;
        //this.close(true);
    });

    mainAppWin.show();

    /**
     Populate the resource preview with loaded resource file
     @method _populateResourcePreview
     @param {Object} i_recResource
     **/
    function populateResourcePreview(i_recResource) {
        switch (i_recResource['resource_type']) {
            case 'jpg':
            {
                var ext = 'jpg';
            }
            case 'png':
            {
                if (!ext)
                    ext = 'png';
                var path = 'http://' + BB.Pepper.getUserData().domain + '/Resources/business' + BB.Pepper.getUserData().businessID + '/resources/' + BB.Pepper.getResourceNativeID(i_recResource['resource_id']) + '.' + ext;
                $('.alignCenter').fadeOut('slow');
                $('#resource').fadeOut('slow', function () {
                    $("#resource").one("load", function () {
                        $('#resource').fadeIn('slow');
                    });
                    $('#resource').attr('src', path);
                });
                break;
            }
        }
    }

    function registerWinPosition() {
        if (localStorage.width && localStorage.height) {
            mainAppWin.resizeTo(parseInt(localStorage.width),
                parseInt(localStorage.height));
        }
        if (localStorage.x && localStorage.y) {
            mainAppWin.moveTo(parseInt(localStorage.x),
                parseInt(localStorage.y));
        } else {
            mainAppWin.moveTo(25, 25);

        }
    }

    function openNewBroswer() {
        var win = gui.Window.open
        ('http://en.wikipedia.org/wiki/Main_Page',
            {
                'always-on-top': true,
                'new-instance': true,
                width: 600,
                height: 400
            });
    }

    function listenMinimize() {
        mainAppWin.on('minimize', function () {

            mainAppWin.hide();
            tray = new gui.Tray({icon: 'assets/js.png'});
            tray.tooltip = 'tooltip';
            var menu = new gui.Menu();
            menu.append(new gui.MenuItem
            ({type: 'checkbox', label: 'box1'}));
            tray.menu = menu;
            tray.on('click', function () {
                mainAppWin.show();
                this.remove();
                tray = null;
            })
        });
    }
});