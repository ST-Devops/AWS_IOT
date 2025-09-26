exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Example: respond to IoT MQTT messages
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Lambda executed successfully!" }),
    };
};
