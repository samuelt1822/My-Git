var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website",websiteSchema);

var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


module.exports = websiteModel;


function createWebsite(userId,website) {

    return websiteModel.create(website)
        .then(
            function (website) {
                userModel.findUserById(userId)
                    .then(
                        function (user) {
                            user.websites.push(website);
                            userModel.updateUser(userId,user);
                        }
                    );
                return website;
            }
        )
}

function findAllWebsitesForUser(userId) {
    return websiteModel.find({developerId:userId});
}

function findWebsiteById(webId) {
    return websiteModel.findById(webId);
}

function updateWebsite(webId,website) {
    return websiteModel.findByIdAndUpdate(webId,website);
}

function deleteWebsite(webId){
    return websiteModel.findByIdAndRemove(webId);
}
