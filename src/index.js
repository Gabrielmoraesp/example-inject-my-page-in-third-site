const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.resolve(__dirname, "..", "public")));

let settings = {
 "92477250-4b58-42b2-83b7-c9d1b9ae894a": {
    name: "Xekout"
 },
 "568cb472-9075-4356-8ca3-ca3792c48899": {
    name: "Company 2"
 }
};

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/use-third-site", (request, response) => {
    const { id } = request.query;
    const values = settings[id];
    if (!values) {
        return response.render("notPermissionLoad");
    }
    return response.render("useThirdSite", values);
});


app.listen(3000, () => console.log("Server is running address: http://localhost:300"));