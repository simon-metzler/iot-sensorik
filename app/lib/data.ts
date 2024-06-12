import mongoose from 'mongoose';

// Definiere das Schema für die Daten
const PvYieldPowerSchema = new mongoose.Schema({
    // Definiere deine Schemafelder hier entsprechend
});

// Erstelle ein Model basierend auf dem Schema
const PvYieldPower = mongoose.model('PvYieldPower', PvYieldPowerSchema);

export async function fetchData() {
    // Verbinde mit der MongoDB-Datenbank
    await mongoose.connect('mongodb://mongoadmin:mySecret1!@10.115.2.66:8017/iot_sensorik_db');
    try {
        // Finde alle Datensätze in der Collection "pv_yield_power"
        const data = await PvYieldPower.find();

        return data;
    } catch (e) {
        console.error(e);
    } finally {
        // Schließe die Verbindung zur Datenbank
        await mongoose.disconnect();
    }
}
