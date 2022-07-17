const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb://ubacosmosdb:gpnOgu7GGLIQvA9s773gMXDuLqWLtU2I9h8tcYsTCsuPYyLx22BsoZYN5yxcYspKiBmy1r7uYX3NmyWFCpY70g==@ubacosmosdb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@ubacosmosdb@";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);