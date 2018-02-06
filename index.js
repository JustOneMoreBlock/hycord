const Discord = require('discord.js')
const HypixelAPI = require('hypixel-api')
const moment = require('moment')

const args = process.argv.slice(2)

if (args.length < 2) {
	console.log('Usage: node index.js <Discord bot token> <Hypixel API key>')
	process.exit(0)
}

const client = new Discord.Client()
const HypixelClient = new HypixelAPI(args[1])

client.on('ready', () => {
	client.user.setStatus('online')
	client.user.setGame('!hycord')

	console.log('The bot has been initialized!')

	let installedGuilds = client.guilds.array()

	console.log('This bot is available on ' + installedGuilds.length + ' guilds:')

	let totalMembers = 0

	for (let i = 0; i < installedGuilds.length; i++) {
		totalMembers += installedGuilds[i].memberCount
		console.log(installedGuilds[i].name + ': ' + installedGuilds[i].memberCount + ' members')
	}

	console.log('Total members: ' + totalMembers)
})

client.on('message', async (message) => {
	if (message.author.id === client.user.id) return

	if (!message.guild || !message.member) {
		if (message.channel.recipient) {
			message.channel.send('To talk to me, get my attention in servers using the `!hycord` command!')
		}
		return
	}

	const messageContent = message.content

	if (messageContent.indexOf('!') !== 0) {
		return
	}

	const commandComponents = messageContent.split('!')[1].split(' ')
	const baseCommand = commandComponents[0].toLowerCase()
	const commandArgs = (commandComponents.length > 1 ? commandComponents.slice(1) : [])

	switch (baseCommand) {
		case 'hycord':
			require('../commands/hycord.js');
			break
		case 'player':
			require('../commands/player.js');
			break
		case 'guild':
			require('../commands/guild.js');
			break
	}
})

client.login(args[0])
