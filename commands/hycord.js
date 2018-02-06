			let helpRich = new Discord.RichEmbed()

			helpRich.setTitle('Hycord Bot Information')

			helpRich.setDescription('Hycord was created by [ethanent](https://ethanent.me)! Using the bot is simple!')

			helpRich.setColor('#FFE11A')

			helpRich.addField('!player <name>', 'Displays statistics for a player.')

			helpRich.addField('!guild <name>', 'Displays statistics for a Hypixel guild.')

			helpRich.setFooter('Hycord Bot | Created by ethanent', 'https://i.imgur.com/hFbNBr5.jpg')

			message.channel.send(helpRich)