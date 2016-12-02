module.exports = function () {
    const render = require('../render').render;
    var Site = require('../models/site.js');

    return {
        show: function (req, res) {
            Site.find(function (err, sites) {
                if (err || !sites) {
                    console.log(err);
                    res.status(404);
                    return render(req, res, {view: '404'});
                }

                render(req, res, {
                    view: 'index',
                    title: 'Web Sites',
                    meta: {
                        description: 'Список сайтов',
                        og: {
                            // url: 'https://site.com',
                            siteName: 'Web Sites'
                        }
                    },
                    sites: sites
                });
            });
        }
    };
};

