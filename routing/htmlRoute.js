module.export = function (app, path) {

    app.get("/survey", function (req, res) {

        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });

    app.get("*", function (res, res) {

        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
}
