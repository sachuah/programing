const mongoose = require('mongoose');

//mongoose.connect('mongodb://adminuser:123456@localhost:2017/mydb');
mongoose.connect('mongodb://readonly:J%40b!1~R34d0nlyPRD@azapsedocker01.corp.jabil.org:50010/piupdate');
const  db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("h");
});

exports.test = function(req,res) {
  console.log(res)
};