$(function(require) {
  var databaseUrl = "mongodb://localhost:27017/";
  var collections = ["users"];
  var db = require("mongojs").connect(databaseUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("wheresmymovie");
    var query = {"login.username":user};
    dbo.collection("users").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.library);
      db.close();
    });
  })
})
