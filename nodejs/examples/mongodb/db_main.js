const {MongoClient} = require('mongodb');



async function main() {
    //const url = "mongodb://localhost:27017/mydb";
    //const url = "mongodb://readonly:J%40b!1~R34d0nlyPRD@azapsedocker01.corp.jabil.org:50010/?authSource=piupdate&authMechanism=SCRAM-SHA-1&directConnection=true";
    const url = "mongodb://readonly:J%40b!1~R34d0nlyPRD@azapsedocker01.corp.jabil.org:50010/piupdate";
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);