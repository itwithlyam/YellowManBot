const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('P4422U-T397TXR8W9');

module.exports = {
	name: 'search',
	description: 'search something',
	args: true,
	usage: '<question>',
	execute(message, args, _client) {
		const question = args.join(' ')
		waApi.getShort(question)
			.then(answer => message.reply(answer))
			.catch(error => {
				message.reply("sorry, no response available for:\n " + question);
				console.error(error);
			});
	}
}
