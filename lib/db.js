import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://shareefa_nextjs:test1234@cluster0.t5p7nyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
