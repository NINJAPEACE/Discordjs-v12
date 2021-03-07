module.exports.run = async(client, message, args) => {
    message.channel.send('Pong! _Ping saya ${client.ws.ping} ms_');
};

module.exports.config = {
   name: 'ping',
	 aliases: []
};
