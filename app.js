let express = require("express");
let app = express();

app.use(express.static("/public"));

app.use(express.json());

app.get("/", function(req, resp){
     resp.render("index");
})

//app.listen(port, function(){console.log("app running");});

let port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening ${port}...`));
