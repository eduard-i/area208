const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
 
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.on("ready", () => {
  client.user.setPresence({
    status: 'dnd',
   activity: {
      name: '𝗔𝗿𝗲𝗮 𝟮𝟬𝟴',
      type: "WATCHING",
    }
  });
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
 
client.login(process.env.token);
