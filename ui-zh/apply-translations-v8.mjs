import { readFileSync, writeFileSync } from "fs";

const translations = {
  // Tool Profile settings
  "Tool Profile_help": "工具配置文件设置",
  alsoAllow: "额外允许",
  "Also Allow": "额外允许",
  alsoAllow_help: "额外允许的设置",

  // Web Fetch settings (some using Chinese as keys)
  web_help: "网络获取设置",
  fetch: "获取",
  Fetch: "获取",
  fetch_help: "网络获取工具配置",
  "Web 获取缓存 TTL (分钟)": "Web 获取缓存 TTL (分钟)",
  "Web Fetch Cache TTL (min)_help": "Web 获取缓存存活时间设置",
  启用网络获取工具: "启用网络获取工具",
  "Enable Web Fetch Tool_help": "是否启用网络获取工具",
  "Web 获取最大字符数": "Web 获取最大字符数",
  "Web Fetch Max Chars_help": "网络获取返回的最大字符数",
  最大字符数上限: "最大字符数上限",
  maxCharsCap_help: "最大字符数上限配置",
  网络获取最大重定向次数: "网络获取最大重定向次数",
  "Web Fetch Max Redirects_help": "网络获取允许的最大重定向次数",
  "Web 获取超时 (秒)": "Web 获取超时 (秒)",
  "Web Fetch Timeout (sec)_help": "网络获取请求的超时时间",
  "网络获取 User-Agent": "网络获取 User-Agent",
  "Web Fetch User-Agent_help": "网络获取请求的 User-Agent 头",

  // Web Search settings
  search: "搜索",
  Search: "搜索",
  search_help: "网络搜索工具配置",
  "Brave Search API 密钥": "Brave Search API 密钥",
  "Brave Search API Key_help": "Brave Search API 密钥配置",
  "Web 搜索缓存 TTL (分钟)": "Web 搜索缓存 TTL (分钟)",
  "Web Search Cache TTL (min)_help": "网络搜索结果缓存存活时间",
  启用网络搜索工具: "启用网络搜索工具",
  "Enable Web Search Tool_help": "是否启用网络搜索工具",
  "Web 搜索最大结果数": "Web 搜索最大结果数",

  // History Limit
  "History Limit": "历史限制",
  historyLimit_help: "历史限制配置",

  // Mention Patterns
  mentionPatterns: "提及模式",
  "Mention Patterns": "提及模式",
  mentionPatterns_help: "提及模式配置",

  // Inbound settings (Chinese keys)
  入站: "入站",
  inbound_help: "入站设置",

  // By Channel
  byChannel: "按频道",
  "By Channel": "按频道",
  byChannel_help: "按频道设置",

  // Inbound Message Debounce
  "入站消息防抖（毫秒）": "入站消息防抖（毫秒）",
  "Inbound Message Debounce (ms)_help": "入站消息防抖延迟配置",

  // Message Prefix
  messagePrefix: "消息前缀",
  "Message Prefix": "消息前缀",
  messagePrefix_help: "消息前缀配置",

  // Queue
  queue: "队列",
  Queue: "队列",
  queue_help: "队列设置",

  // Discord settings
  discord: "Discord",
  discord_help: "Discord 插件配置",
  steer: "引导",
  followup: "跟进",
  collect: "收集",
  "steer-backlog": "引导积压",
  "steer+backlog": "引导+积压",
  interrupt: "中断",

  // iMessage settings
  imessage: "iMessage",
  Imessage: "iMessage",
  imessage_help: "iMessage 插件配置",

  // Mattermost settings
  mattermost: "Mattermost",
  mattermost_help: "Mattermost 插件配置",

  // MS Teams settings
  msteams: "Microsoft Teams",
  Msteams: "Microsoft Teams",
  msteams_help: "Microsoft Teams 插件配置",

  // Signal settings
  signal: "Signal",
  signal_help: "Signal 插件配置",

  // Slack settings
  slack: "Slack",
  slack_help: "Slack 插件配置",

  // Telegram settings
  telegram: "Telegram",
  telegram_help: "Telegram 插件配置",

  // Webchat settings
  webchat: "网页聊天",
  Webchat: "网页聊天",
  webchat_help: "网页聊天配置",

  // WhatsApp settings
  whatsapp: "WhatsApp",
  Whatsapp: "WhatsApp",
  whatsapp_help: "WhatsApp 插件配置",

  // Cap settings
  cap: "上限",
  Cap: "上限",
  cap_help: "上限设置",

  // Debounce Ms
  "防抖延迟 (ms)": "防抖延迟 (ms)",
  debounceMs_help: "防抖延迟配置",
  debounceMsByChannel: "按频道防抖延迟",
  "Debounce Ms By Channel": "按频道防抖延迟",
  debounceMsByChannel_help: "按频道防抖延迟配置",

  // Drop settings
  drop: "丢弃",
  Drop: "丢弃",
  drop_help: "丢弃设置",
  old: "旧",
  new: "新",
  summarize: "总结",

  // Remove Ack After Reply
  removeAckAfterReply: "回复后移除确认",
  "Remove Ack After Reply": "回复后移除确认",
  removeAckAfterReply_help: "回复后移除确认设置",

  // Response Prefix
  responsePrefix: "响应前缀",
  "Response Prefix": "响应前缀",
  responsePrefix_help: "响应前缀配置",

  // TTS settings
  tts: "语音合成",
  Tts: "语音合成",
  tts_help: "语音合成设置",
  自动: "自动",
  auto_help: "自动设置",
  edge_help: "Edge 设置",
  lang_help: "语言设置",
  输出格式: "输出格式",
  outputFormat_help: "输出格式配置",
  音高: "音高",
  pitch_help: "音高配置",
  proxy: "代理",
  Proxy: "代理",
  proxy_help: "代理设置",
  速率: "速率",
  rate_help: "速率配置",
};

const translationPath =
  "c:/Users/chuan/Desktop/AiCode/openclaw/ui-zh/src/ui/views/config-form.shared.ts";
const content = readFileSync(translationPath, "utf-8");

const endMarker = "};\n\nconst MISSING_KEYS";

const endIdx = content.indexOf(endMarker);
if (endIdx === -1) {
  console.error("Could not find end marker");
  process.exit(1);
}

const before = content.substring(0, endIdx);
const after = content.substring(endIdx);

const newLines = [];
for (const [key, value] of Object.entries(translations)) {
  if (!content.includes(JSON.stringify(key))) {
    newLines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(value)},`);
  }
}

if (newLines.length > 0) {
  const newContent = before + "\n" + newLines.join("\n") + after;
  writeFileSync(translationPath, newContent, "utf-8");
  console.log(`Added ${newLines.length} new translations.`);
} else {
  console.log("No new translations to add.");
}
