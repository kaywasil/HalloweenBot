// Importing modules using ES6 syntax
import { SlashCommandBuilder } from 'discord.js';
import {readFileSync, promises as fsPromises} from 'fs';

// Command Builder export
export const data = new SlashCommandBuilder().setName('dracula').setDescription('Replies with a random chapter from Dracula');

async function asyncReadFile(filename) {
    try {
      const contents = await fsPromises.readFile("dracula.txt", 'utf-8');
      //const arr = contents.split(/\r?\n/);
      const arr = contents.split(/CHAPTER/);
    //console log for the array
      console.log(arr);
      return arr;
    } catch (err) {
      console.log(err);
    }
  }
  asyncReadFile('./dracula.txt');

// Execute function export
export async function execute(interaction) {
  const index = Math.floor(Math.random() * arr.length);
  await interaction.reply(arr[index]);
}