//A GET Route to `/survey` which should display the survey page.
//* A default, catch-all route that leads to `home.html` which displays the home page.
//DEPENDCIES, path needed to get the correct file path for html
var path = require("path");

//Routing
module.exports = function(app) {

    //html GET requests, code handles when users "visit " a page, user is shown an html page of content
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname, "/../public/survey.html"));
    });

    //IF no matching route is found default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(_dirname, "/..public/home.hmtl"));
    });
};