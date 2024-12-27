var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

console.log('PROGRAM BEGIN');

MongoClient.connect(url, (err, db)=>{
  console.log('CONNECT CALLBACK');
  if(err) throw err;
  const dbo = db.db('mydb');
  dbo.collection("customers").findOne({},(err,result)=>{
    console.log('COLLECTION CALLBACK');
    if(err) throw- err;
    console.log(result);
  }).catch(console.error);
  
  db.close();
}).catch(console.error);

console.log('PROGRAM END');
// const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
//});