export enum EventType {
  IDENTIFY_CLIENT,
  LAUNCH_CLIENT,
  READY_CLIENT,
  RESTART_CLIENT,
  KILL_CLIENT,
  RESUME_CLIENT,
  DEPLOY,
  SEND_STATS,
  GUILD_CHECK,
  GUILD_CREATE,
  GUILD_DELETE,
  LOAD_MODULE,
  BROADCAST_EVAL,
  ADMIN_ACTION,
  SETTINGS_SYNC,
  BLACKLIST_SYNC,
  RELOAD_EXPERIMENTS,
  UPDATE_STATE,
  REMINDER_SEND,
  REMINDER_CREATE,
  REMINDER_DELETE,
  CROSS_CLUSTER_QUOTE,
  PREMIUM_SYNC,
  UPDATE_SOLUTIONS,
  PLAYWRIGHT_REQUEST,
  UPDATE_FIRE_DESCRIPTION,
  FORWARD_MESSAGE,
  FORWARD_MESSAGE_USER,
  SLASH_COMMAND,
  REQUEST_COMMANDS,
  SUBSCRIBE_USER,
  UNSUBSCRIBE_USER,
  DISCORD_GUILD_MEMBER_ADD,
  DISCORD_GUILD_MEMBER_REMOVE,
  CREATE_INVITE_DISCOVERABLE,
  FETCH_DISCORD_EXPERIMENTS,
  DISCOVERY_UPDATE,
  API_REQUEST,
  ALIAS_SYNC,
  LOG_REQUEST,
  LOG_BUTTON,
}

export enum WebsocketStates {
  CONNECTING,
  CONNECTED,
  CLOSING,
  CLOSED,
  RECONNECTING,
  IDLE,
}
