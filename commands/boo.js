// Importing modules using ES6 syntax
import { SlashCommandBuilder } from 'discord.js';

// Replies array
const replies = ['👻👻👻', 'Happy Haunting!', '🎃', 'Trick or Treat!'];

// Command Builder export
export const data = new SlashCommandBuilder().setName('boo').setDescription('Replies with a random spooky phrase!');

// Execute function export
export async function execute(interaction) {
  const index = Math.floor(Math.random() * replies.length);
  await interaction.reply(replies[index]);
}