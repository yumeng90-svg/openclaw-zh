import { readFileSync, writeFileSync } from "fs";

const translations = {
  // Reconnect settings
  factor: "系数",
  Factor: "系数",
  factor_help: "重连退避系数配置",
  initialMs: "初始毫秒",
  "Initial Ms": "初始毫秒",
  initialMs_help: "初始重连延迟配置",
  jitter: "抖动",
  Jitter: "抖动",
  jitter_help: "重连抖动系数配置",
  maxAttempts: "最大尝试次数",
  "Max Attempts": "最大尝试次数",
  maxAttempts_help: "最大重连次数配置",
  maxMs: "最大毫秒",
  "Max Ms": "最大毫秒",
  maxMs_help: "最大重连延迟配置",

  // Bindings and Audio
  Bindings_help: "绑定配置",
  Audio_help: "音频配置",
  "Ack Reaction Scope_help": "确认反应范围配置",

  // Group chat
  groupChat: "群聊",
  "Group Chat": "群聊",
  groupChat_help: "群聊配置",

  // History limit
  historyLimit: "历史限制",
  historyLimit_help: "历史限制配置",

  // Voice settings
  voice_help: "语音配置",
  applyTextNormalization_help: "应用文本规范化配置",
  languageCode_help: "语言代码配置",
  modelId_help: "模型 ID 配置",
  seed_help: "种子配置",
  voiceId_help: "语音 ID 配置",
  provider_help: "提供商配置",

  // Command settings
  "Bash Foreground Window (ms)_help": "Bash 前台窗口配置",
  "Allow /config_help": "允许 /config 配置",
  "Allow /debug_help": "允许 /debug 配置",
  "Native Commands_help": "原生命令配置",
  "Native Skill Commands_help": "原生技能命令配置",
  "Command Owners_help": "命令所有者配置",
  "Allow Restart_help": "允许重启配置",
  "Text Commands_help": "文本命令配置",

  // Session/Policy settings
  "per-sender": "按发送者",
  sendPolicy_help: "发送策略配置",
  Cron_help: "定时任务配置",
  "Hook URL": "Hook URL",
  "Hook URL_help": "Hook URL 配置",
  token_help: "令牌配置",

  // Browser settings
  "Browser Evaluate Enabled_help": "启用浏览器评估配置",
  "远程 CDP 超时 (ms)": "远程 CDP 超时 (ms)",

  // Various plugins
  "OpenClaw BlueBubbles": "OpenClaw BlueBubbles",
  "OpenClaw Copilot Proxy": "OpenClaw Copilot Proxy",
  "OpenClaw Discord": "OpenClaw Discord",
  "OpenClaw Google Antigravity Auth": "OpenClaw Google Antigravity Auth",
  "Google Antigravity Auth 配置": "Google Antigravity Auth 配置",
  "OpenClaw Google Gemini CLI Auth": "OpenClaw Google Gemini CLI Auth",
  "Google Gemini CLI Auth 配置": "Google Gemini CLI Auth 配置",
  "OpenClaw GoogleChat": "OpenClaw GoogleChat",
  "GoogleChat 配置": "GoogleChat 配置",
  "OpenClaw iMessage": "OpenClaw iMessage",
  "OpenClaw LINE": "OpenClaw LINE",
  "LLM 任务": "LLM 任务",
  "LLM 任务配置": "LLM 任务配置",
  "Lobster 配置": "Lobster 配置",
  "OpenClaw Matrix": "OpenClaw Matrix",
  "OpenClaw Mattermost": "OpenClaw Mattermost",
  "Memory (Core)_help": "内存（核心）配置",
  "File-backed memory search tools and CLI (plugin: memory-core)":
    "基于文件的内存搜索工具和 CLI（插件：memory-core）",
  "Memory (Core) Config": "内存（核心）配置",
  "Memory (Core) Config_help": "内存（核心）插件配置",
  "Plugin-defined config payload for memory-core.":
    "memory-core 插件定义的配置负载（架构由插件提供）。",
  "Enable Memory (Core)": "启用内存（核心）",
  "Enable Memory (Core)_help": "是否启用内存（核心）插件",
  "OpenClaw Memory LanceDB": "OpenClaw Memory LanceDB",
  "OpenClaw MiniMax Portal Auth": "OpenClaw MiniMax Portal Auth",
  "@openclaw/msteams": "@openclaw/msteams",
  "@openclaw/msteams_help": "Microsoft Teams 插件配置",
  "OpenClaw Nextcloud Talk": "OpenClaw Nextcloud Talk",
  "OpenClaw Nostr": "OpenClaw Nostr",
  "Qwen Portal Auth": "Qwen Portal Auth",
  "OpenClaw Signal": "OpenClaw Signal",
  "OpenClaw Slack": "OpenClaw Slack",
  "Slack 配置": "Slack 配置",
  "OpenClaw Telegram": "OpenClaw Telegram",
  "@openclaw/tlon": "@openclaw/tlon",
  tlon: "Tlon",
  "@openclaw/tlon_help": "Tlon 插件配置",
  "OpenClaw Tlon/Urbit channel plugin (plugin: tlon)": "OpenClaw Tlon/Urbit 频道插件（插件：tlon）",
  "@openclaw/tlon Config": "Tlon 配置",
  "@openclaw/tlon Config_help": "Tlon 插件配置",
  "Plugin-defined config payload for tlon.": "Tlon 插件定义的配置负载（架构由插件提供）。",
  "OpenClaw Twitch": "OpenClaw Twitch",

  // Voice call settings
  "Inbound Allowlist_help": "入站允许列表配置",
  "From Number": "来自号码",
  fromNumber: "来自号码",
  "From Number_help": "来自号码配置",
  "Inbound Greeting_help": "入站问候语配置",
  "Inbound Policy_help": "入站策略配置",
  disabled: "已禁用",
  maxConcurrentCalls_help: "最大并发通话数配置",
  maxDurationSeconds_help: "最大持续时间配置",
  "Default Call Mode_help": "默认通话模式配置",
  notify: "通知",
  conversation: "对话",
  "公开 Webhook URL": "公开 Webhook URL",
  "Default To Number_help": "默认目标号码配置",
  transcriptTimeoutMs_help: "转录超时配置",

  // TTS settings
  "OpenAI TTS Model_help": "OpenAI TTS 模型配置",
  "TTS Provider Override": "TTS 提供商覆盖",
  "TTS Provider Override_help": "TTS 提供商覆盖配置",
  "Deep-merges with messages.tts (Edge is ignored for calls).":
    "与 messages.tts 深度合并（Edge 在通话中被忽略）。",
  tunnel_help: "隧道配置",

  // Tunnel/ngrok settings
  "Allow ngrok Free Tier (Loopback Bypass)": "允许 ngrok 免费层（回环绕过）",
  allowNgrokFreeTierLoopbackBypass: "允许 ngrok 免费层回环绕过",
  "Allow ngrok Free Tier (Loopback Bypass)_help": "允许 ngrok 免费层回环绕过配置",
  "ngrok Auth Token_help": "ngrok 认证令牌配置",
  "ngrok Domain_help": "ngrok 域名配置",
  "Tunnel Provider": "隧道提供商",
  "Tunnel Provider_help": "隧道提供商配置",
  ngrok: "ngrok",

  // Tailscale modes
  "tailscale-serve": "Tailscale 服务",
  "tailscale-funnel": "Tailscale 引流",

  // Telephony settings
  twilio_help: "Twilio 配置",
  "Twilio Account SID_help": "Twilio 账户 SID 配置",
  "Twilio Auth Token_help": "Twilio 认证令牌配置",

  // Zalo settings
  "OpenClaw WhatsApp": "OpenClaw WhatsApp",
  "OpenClaw Zalo": "OpenClaw Zalo",
  "@openclaw/zalouser": "@openclaw/zalouser",
  zalouser: "Zalo 用户",
  "@openclaw/zalouser_help": "Zalo 用户插件配置",
  "OpenClaw Zalo Personal Account plugin via zca-cli (plugin: zalouser)":
    "通过 zca-cli 的 OpenClaw Zalo 个人账户插件（插件：zalouser）",
  "@openclaw/zalouser Config": "Zalo 用户配置",
  "@openclaw/zalouser Config_help": "Zalo 用户插件配置",
  "Plugin-defined config payload for zalouser.": "Zalo 用户插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/zalouser": "启用 @openclaw/zalouser",
  "Enable @openclaw/zalouser_help": "是否启用 Zalo 用户插件",

  // Plugin settings
  "Plugin Install Records_help": "插件安装记录配置",
  "Plugin Load Paths_help": "插件加载路径配置",
  "Plugin Slots_help": "插件插槽配置",
  "Memory Plugin_help": "内存插件配置",

  // Discovery settings
  Discovery_help: "发现配置",
  mdns_help: "mDNS 配置",
  "mDNS Discovery Mode_help": "mDNS 发现模式配置",
  wideArea_help: "广域发现配置",

  // Logging settings
  Logging_help: "日志配置",
  consoleLevel_help: "控制台级别配置",

  // JSON style
  json: "JSON",

  // Model settings
  "Minimax/MiniMax-M2.1": "Minimax/MiniMax-M2.1",

  // Alias and text
  alias_help: "别名配置",
  text: "文本",

  // Additional settings
  "Microsoft Teams": "Microsoft Teams",
  "Browser Evaluate Enabled": "启用浏览器评估",
  "Native Commands": "原生命令",
  "Native Skill Commands": "原生技能命令",
  "Text Commands": "文本命令",
  "Command Owners": "命令所有者",
  Cron: "定时任务",
  "Hook Url": "Hook URL",
  Bindings: "绑定",
  Audio: "音频",
  historyLimit: "历史限制",
  historyLimit_help: "历史限制配置",
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
