// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskmanager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("Admin").insertOne(
      {
        name: "User Name",
        age: 123,
      },
      (error, result) => {
        console.log("HELLO")
        if (error) {
          return console.log("do not get Data");
        }

        console.log(result.ops);
      }
    );
  }
);

//
