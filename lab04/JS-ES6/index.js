const Sensor = require('./Sensor.js');
const SensorManager = require('./SensorManager.js');

const manager = new SensorManager();

const sensor1 = new Sensor('1', 'temperature', 22.5, 'living room');
const sensor2 = new Sensor('2', 'humidity', 55, 'bedroom');
const sensor3 = new Sensor('3', 'light', 300, 'kitchen');

manager.addSensor(sensor1);
manager.addSensor(sensor2);
manager.addSensor(sensor3);

console.log('All Sensors:', manager.listSensors());

manager.getSensorData('1');

console.log('Filtered Sensors (type: temperature):', manager.filterSensorsByType('temperature'));

manager.removeSensor('2');

console.log('All Sensors after removal:', manager.listSensors());
