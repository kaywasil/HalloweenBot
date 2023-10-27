// Importing modules using ES6 syntax
import { SlashCommandBuilder,  AttachmentBuilder } from 'discord.js';
import { Canvas } from '@napi-rs/canvas';

// Command Builder export
export const data = new SlashCommandBuilder().setName('ghostly').setDescription('makes a personalized spooky image');

// Execute function export
export async function execute(interaction) {
    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext('2d');
    const house = await Canvas.loadImage('./hauntedhouse.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(house, 0, 0, canvas.width, canvas.height);
    // Use the helpful Attachment class structure to process the file for you
	const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });

	interaction.reply({ files: [attachment] });

	// Using undici to make HTTP requests for better performance
	const { body } = await request(interaction.user.displayAvatarURL({ extension: 'jpg' }));
	const avatar = await Canvas.loadImage(await body.arrayBuffer());

	// Draw a shape onto the main canvas
	context.drawImage(avatar, 25, 0, 200, canvas.height);

}