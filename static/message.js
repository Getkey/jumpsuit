const MESSAGE = {
	ERROR: 0,
	CONNECT: 1,
	GET_LOBBIES: 2,
	SENT_LOBBIES: 3,
	SETTINGS_CHANGED: 4,
	CREATE_LOBBY: 5,
	CONNECT_ERR_FULL: 6,
	CONNECT_SUCCESSFUL: 7,
	PLAYER_SETTINGS: 8,
	PLAYER_POSITIONS: 9,
	CHUNKS: 10,
	CHECK_ALIVE: 11,
	DISCONNECT: 12,
	LEAVE_LOBBY: 13,
	PLAYER_CONTROLS: 14,
	WORLD_DATA: 15,
	CHAT: 16,
	PLAYER_DATA: 17,
	PLAYER_CONTROLS: 18,
	PLAY_SOUND: 19,
	GAME_DATA: 20
},
ERROR = {
	NO_LOBBY: 0,
	NO_SLOT: 1,
	NAME_TAKEN: 2
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = { MESSAGE: MESSAGE, ERROR: ERROR };
