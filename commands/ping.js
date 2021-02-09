module.exports = {
    name: 'ping',
    description: "Questo è un comando di test.",
    execute(message, args){
        message.channel.send('pong!');
    }
}