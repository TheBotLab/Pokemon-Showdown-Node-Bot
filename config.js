/*
	config.js - Configuration File
*/

/*
* Connection Details
*
* If you don't know what is the server, port or serverid
* run 'node serverconfig.js'
*
*/

exports.server = 'lotus.kota.moe';

exports.port = 80;

exports.serverid = 'eso';

exports.autoReconnectDelay = 10 * 1000;
exports.connectionTimeout = 2 * 60 * 1000;

/*
* Login Details
*/

exports.nick = 'Alliance Sky';

exports.pass = 'aaaaa';

exports.autoReloginDelay = 60 * 1000;

/*
* Rooms to join
*/

exports.rooms = ['thebotlab'];
/*
* exports.rooms = 'all'; //For joining all rooms
* exports.rooms = 'official'; //For joining official rooms
* exports.rooms = 'public'; //For joining not-official rooms
* exports.rooms = ['room1', 'room2']; //For joining some rooms
*/

exports.privateRooms = {
	//privateroomname: true
};

exports.initCmds = ['|/avatar 120']; // Other commands (avatar, blockchallenges, etc)

/*
* Auth configuration
*/

exports.exceptions = {
	//userid: 'rank' or userid: true for full access
};

exports.ranks = ['+', '%', '@', '#', '&', '~'];

/*
* Commands configuration
*/

exports.commandTokens = ['.']; //Array of valid command characters

exports.defaultPermission = '%';

exports.permissionExceptions = {
	//command: 'rank'
	'say': '#',
	'info': '+',
	'wall': '%',
	'autoban': '#',
	'banword': '#',
	'joinphrase': '#',
	'challenge': '%',
	'searchbattle': '~',
	'tournament': '@'
};

/*
* Language configuration
*/

exports.language = 'english';

/*
* Configuration for console messages
*/

exports.debug = {
	/* Status Messages */
	info: true,
	error: true,
	ok: true,

	errlog: true,
	monitor: false,

	/* Internal Debug */
	debug: false,
	cmdr: false,

	/* Low Level */
	recv: false,
	sent: false
};


/*
* Configuration for specific
* commands and features
*/

/*
* Moderation
*/

exports.moderation = {
	modException: '%', // Min rank for not receive moderation

	allowmute: true,

	modDefault: {
		//basic mods
		'caps': 1,
		'stretching': 1,
		'flooding': 1,
		'spam': 1,

		'bannedwords': 1,
		'inapropiate': 1,

		//specific mods
		'spoiler': 0,
		'youtube': 0,
		'psservers': 1,

		//multiple infraction
		'multiple': 1
	},

	punishments: [
		"warn",
		"mute",
		"hourmute",
		"roomban"
	],

	psServersExcepts: {
		"showdown": 1,
		"smogtours": 1
	}
};

/*
* Battles
*/

exports.clientUrl = 'http://play.pokemonshowdown.com/';

exports.aceptAll = false;

exports.winmsg = ['GG', 'g_g'];

exports.losemsg = ['gg', 'wp'];

exports.battleMessages = {
	/* Examples of battle messages:
	'start': {
		'self': [] //Example: ['gl hf', 'Hi, I\'m a Bot', 'gl']
	},
	'-crit': {
		'self': [], //Example: ['lol that hax', 'stop haxing pls']
		'foe': [] //Example: ['sorry', 'wow sorry for that', 'get critted']
	},
	'-miss': {
		'self': [] //Example: ['wow hax', 'lol #poke you\'re blind']
	}
	*/
};

exports.ladderCheckInterval = 10 * 1000;

exports.ladderNumberOfBattles = 1;

/*
* Tournaments
*/

exports.tourDefault = {
	format: 'ou',
	type: 'elimination',
	maxUsers: null,
	timeToStart: 30 * 1000,
	autodq: 1.5
};

/*
* Youtube
*/

exports.youtube = {
	enableByDefault: false
};

/*
* Chat Logger
*/

exports.chatLogger = {
	rooms: [],
	ignore: {'tournament': ['update', 'updateEnd'], 'formats': true, 'challstr': true, 'updateuser': true, 'queryresponse': true},
	logIntroMessages: true,
	ageOfLogs: 7 //in days (max age of logs, 0 to keep logs infinitely)
};
