import { MongoClient, ServerApiVersion } from 'mongodb';

export async function fetchData() {

    const uri = 'mongodb://mongoadmin:mySecret1!@10.115.2.66:8017/';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('iot_sensorik_db');
        const collection = database.collection('temperature');

        let data = await collection.find().toArray();

        data = data.map(item => ({
            _id: item._id.toString(),
            timestamp: item.timestamp.toISOString(),
            value: item.value
        }));


        return data;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}