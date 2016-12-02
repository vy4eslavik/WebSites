var mongoose = require('mongoose');
var async = require('async');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/web-sites');

async.series([
    open,
    dropDatabase,
    requireModels,
    createSites
], function(err) {
    console.log(arguments);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels(callback) {
    require('./models/site.js');

    async.each(Object.keys(mongoose.models), function(modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createSites(callback) {
    var sites = [
        {
            _id: '57bb1220489d8a7436ab1058',
            project: 'BPM_5.4FMCG_Demo',
            bpmVersion: '5.4',
            currentProjectVersion: '1.0',
            workingCopyPath: 'E:\\SVN_Working_Copy\\BPM7.5_Home',
            repositoryUri: 'http://Softex-IIS:8888/svn/BPM7.5_Home/trunk',
            owner: 'vy4eslavik',
            desc: 'Ромашка',
            db: {
                server: 'softex-sql',
                name: 'BPM_4.5_Home'
            }
        },
        {
            _id: '57bb1220489d8a7436ab1059',
            project: 'BPM_5.4FMCG_Demo',
            bpmVersion: '5.4',
            currentProjectVersion: '1.0',
            workingCopyPath: 'E:\\SVN_Working_Copy\\BPM7.5_Home',
            repositoryUri: 'http://Softex-IIS:8888/svn/BPM7.5_Home/trunk',
            owner: 'vy4eslavik',
            desc: 'Ромашка',
            db: {
                server: 'softex-sql',
                name: 'BPM_4.5_Home'
            }
        }
    ];

    async.each(sites, function(userData, callback) {
        var site = new mongoose.models.Site(userData);
        site.save(callback);
    }, callback);
}
