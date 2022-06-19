exports = async function (id) {
  const mongodb = context.services.get("mongodb-atlas");
  const itemsCollection = mongodb
    .db("lotir-mongo-realm-expo-images")
    .collection("messages");
  const query = { id: id };
  const data = await itemsCollection.find(query);
  const sorted = data.sort({ date: 1 }).toArray();
  return sorted.reverse();
};
