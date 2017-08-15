# esp8266-mqtt
Implementação básica de uma aplicação mqtt e esp8266

## Estrutura de diretórios

* backend (aplicação loopback com serviços rest)
* broker (mqtt broker utilizando mosca)
* Iot_MqttClient (programa para esp8266)

## Executando os projetos

### backend

Este projeto consiste de uma aplicação [loopback](http://loopback.io), que possui um modelo para definição dos dados de telemetria e um outro para identificação de um dispositivo.
Para executar este projeto execute o seguinte comando:

```
$: cd iot-monitor-backend
$: npm start
```

### broker

Este projeto consiste de um broker [mosca](http://mosca.io) responsável por receber as publicações e enviar para os clientes que se inscreveram para recebe-las.
Para executar este projeto execute o seguinte comando:

```
$: npm start
```

### Iot_MqttClient

Este é o programa que será executado na placa ESP8266 e utiliza uma biblioteca para calcular a temperatura, você poderá fazer o mesmo sem a biblioteca desde que faça a calibração do seu sensor [Thermostat](http://api.ning.com/files/6wsS7zFpHL1vhxn8JLydjAuXMK*7Q3*kebK0sFV8WKNXcxFJsuDM9D8J4CQtrDmSGPu86smNj1k0dFeueY7F8WjakZA7gutK/Thermistor.zip).
Além disso você precisará configurar a sua IDE do arduino com o pacote da [ESP8266](http://arduino.esp8266.com/stable/package_esp8266com_index.json).

Lembre-se de alterar o endereço IP do broker na linha:

``` c
const char* BROKER_MQTT = "192.168.0.13"; //URL do broker MQTT que se deseja utilizar
```

Assim como alterar o SSID e a senha da rede nas linhas:

``` c
// WIFI
const char* SSID = "MARILIA E RAFAEL"; // SSID / nome da rede WI-FI que deseja se conectar
const char* PASSWORD = "27012016"; // Senha da rede WI-FI que deseja se conectar
```

Para executar o código basta fazer upload para a sua placa através da IDE do arduino.
