
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb://127.0.0.1:27017/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function handler(req, res) {
    try {
        const dbClient = await client.connect()
        // Send a ping to confirm a successful connection
        const db = dbClient.db("data_for_budget_app")
        const collection = db.collection("budget_details")
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
        const posts = await collection.find({}).toArray()
        res.json(posts) 
      } 
      catch (e) {
        console.error(e)
      }
      finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}