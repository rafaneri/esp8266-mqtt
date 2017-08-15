var mqtt = require('mqtt');

module.exports = function (app) {

  var client = mqtt.connect('mqtt://localhost');
  client.on('connect', function () {
    client.subscribe(['/telemetry/temperature', '/device/registry']);
  })
  client.on('message', function (topic, message, packet) {
    var json = JSON.parse(message.toString());
    switch (topic) {
      case '/telemetry/temperature':
        app.models.Telemetry.create({
          device: json.device,
          temperature: json.payload.temperature,
          date: new Date()
        });
        break;
      case '/device/registry':
        app.models.Device.findOne({
          name: json.device
        }, function (err, model) {
          if (!err && !model) {
            app.models.Device.create({
              name: json.device,
              alive: true
            });
          }
        });
        break;
      default:
        break;
    }
  });

};
