// Import the necessary discord.js classes using ES6 syntax
import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import * as boo from './commands/boo.js';
import * as dracula from './commands/dracula.js'

dotenv.config();

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages ], 
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with your client's token
client.login(process.env.TOKEN);

function readyDiscord(c) {
  console.log('💖 Logged in as', c.user.tag);
}

//debugging message event
// client.on(Events.MessageCreate, (message) => {
//   console.log("new message! " + message.content);
// });

client.on(Events.MessageCreate, (message) => {
  if (message.content.includes('treat')) {
    message.react('🍭');
    message.react('🍬');
    message.react('🍫');
  }
  // if (["treat", "candy"].includes(message.content.toLowerCase())) {
  //   message.react('🍭');
  //     message.react('🍬');
  //     message.react('🍫');
// };
});

client.on(Events.MessageCreate, (message) => {
  if (message.content.includes('vampire')) {
    message.react('🧛🏻‍♂️');
  }
});

client.on(Events.MessageCreate, (message) => {
  if (message.content.includes('pumpkin')) {
    message.react('🎃');
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'boo') {
    await boo.execute(interaction);}
  // else if (interaction.commandName === 'dracula') {
  //   await dracula.execute(interaction);
  // }
});