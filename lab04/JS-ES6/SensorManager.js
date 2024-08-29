const Sensor = require('./Sensor.js');

class SensorManager {
    constructor() {
        this.sensors = [];
    }

    addSensor(sensor) {
        this.sensors.push(sensor);
    }

    removeSensor(id) {
        this.sensors = this.sensors.filter(sensor => sensor.id !== id);
    }

    getSensorData(id) {
        const sensor = this.sensors.find(sensor => sensor.id === id);
        if (sensor) {
            const { type, value, location } = sensor;
            console.log(`Type: ${type}, Value: ${value}, Location: ${location}`);
        } else {
            console.log(`Sensor with id ${id} not found.`);
        }
    }

    listSensors() {
        return [...this.sensors];
    }

    filterSensorsByType(type) {
        return this.sensors.filter(sensor => sensor.type === type);
    }
}

module.exports = SensorManager;
