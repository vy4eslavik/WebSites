var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongoose').Types.ObjectId;

var schema =  new Schema({
    project: String,
    bpmVersion: String,
    projectVersion: String,
    workingCopyPath: String,
    clientModulePath: String,
    repositoryUri: String,
    documentationPath: String,
    redisDB: Number,
    socket: Number,
    owner: String,
    desc: String,
    iis: {
        port: String,
        site: String,
        pool: String,
        fisicalPath: String,
        id: Number
    },
    db: {
        server: String,
        name: String,
        login: String,
        pass: String
    }
});

module.exports = mongoose.model('Site', schema);
