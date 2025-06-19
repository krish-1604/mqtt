import paho.mqtt.client as pub
import time
import json
client = pub.Client("iotconsole-1299ee72-2782-4178-8bcb-d76a61391e7f")

client.tls_set(
    ca_certs=r"C:\Users\Krish\Downloads\certificates\AmazonRootCA1.pem",
    certfile=r"C:\Users\Krish\Downloads\certificates\93c88f7161c636bc6433f5e24fedc34bcf04495a16413aa47ab355a0aba95101-certificate.pem.crt",
    keyfile=r"C:\Users\Krish\Downloads\certificates\93c88f7161c636bc6433f5e24fedc34bcf04495a16413aa47ab355a0aba95101-private.pem.key"
)


client.connect("a2vsxjlm2s5txq-ats.iot.ap-south-1.amazonaws.com", 8883, 45)

time.sleep(1)
client.publish("myTopic", payload=json.dumps({"message": "Krish Mehta here"}), qos=1)

print("✅ Message sent to 'myTopic'")
