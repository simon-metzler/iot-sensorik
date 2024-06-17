import { MongoClient } from 'mongodb';

export async function fetchData(collection_name: string, milliseconds: number) {

    const uri = 'mongodb://mongoadmin:mySecret1!@10.115.2.66:8017/';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('iot_sensorik_db');
        const collection = database.collection(collection_name);

        const oneDayAgo = new Date(Date.now() - milliseconds);
        let data: any = await collection.find({ timestamp: { $gte: oneDayAgo } }).toArray();

        data = data.map((item: { _id: { toString: () => any; }; timestamp: { toISOString: () => any; }; value: any; }) => ({
            _id: item._id.toString(),
            timestamp: new Date(item.timestamp.toISOString()),
            value: item.value
        }));

        return data;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}