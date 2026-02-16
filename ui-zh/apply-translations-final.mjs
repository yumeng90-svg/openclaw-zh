import { readFileSync, writeFileSync } from "fs";

const translations = {
  // Console levels
  silent: "静默",
  fatal: "致命",
  error: "错误",
  warn: "警告",
  info: "信息",
  debug: "调试",
  trace: "追踪",

  // Console settings
  consoleStyle_help: "控制台样式配置",
  file_help: "文件日志配置",
  level_help: "日志级别配置",

  // Redact settings
  redactPatterns_help: "脱敏模式配置",
  redactSensitive_help: "敏感信息脱敏配置",

  // Model names
  "minimax/MiniMax-M2.1": "Minimax/MiniMax-M2.1",
  "Minimax/Mini Max-M2.1": "Minimax/MiniMax-M2.1",
  "minimax/MiniMax-M2.1_help": "Minimax/MiniMax-M2.1 模型配置",

  // ElevenLabs TTS settings
  "ElevenLabs API 密钥": "ElevenLabs API 密钥",
  "ElevenLabs API Key_help": "ElevenLabs API 密钥配置",
  "ElevenLabs 基础 URL": "ElevenLabs 基础 URL",
  "ElevenLabs Base URL_help": "ElevenLabs 基础 URL 配置",
  "ElevenLabs 模型 ID": "ElevenLabs 模型 ID",
  "ElevenLabs Model ID_help": "ElevenLabs 模型 ID 配置",
  "ElevenLabs Voice ID": "ElevenLabs 语音 ID",
  "ElevenLabs Voice ID_help": "ElevenLabs 语音 ID 配置",
  "ElevenLabs Seed": "ElevenLabs 种子",
  "ElevenLabs Seed_help": "ElevenLabs 种子配置",
  "ElevenLabs Voice Settings": "ElevenLabs 语音设置",
  "ElevenLabs Voice Settings_help": "ElevenLabs 语音设置配置",
  "ElevenLabs 语音设置": "ElevenLabs 语音设置",

  // OpenAI TTS
  "OpenAI TTS 模型": "OpenAI TTS 模型",
  "OpenAI TTS Voice": "OpenAI TTS 语音",
  "OpenAI TTS Voice_help": "OpenAI TTS 语音配置",

  // Voice Call settings
  "Notify Hangup Delay (sec)_help": "通知挂断延迟配置",

  // Twilio/Plivo/Telnyx
  plivo: "Plivo",
  Plivo: "Plivo",
  plivo_help: "Plivo 配置",
  authId: "认证 ID",
  "Auth Id": "认证 ID",
  authId_help: "认证 ID 配置",
  authToken: "认证令牌",
  "Auth Token": "认证令牌",
  authToken_help: "认证令牌配置",
  Provider_help: "提供商配置",
  "Use twilio, telnyx, or mock for dev/no-network.": "开发/无网络环境使用 twilio、telnyx 或 mock。",
  telnyx: "Telnyx",
  mock: "模拟",
  "Public Webhook URL": "公开 Webhook URL",
  publicUrl: "公开 URL",
  "Public Webhook URL_help": "公开 Webhook URL 配置",

  // Microsoft Teams plugin
  "OpenClaw Microsoft Teams channel plugin (plugin: msteams)":
    "OpenClaw Microsoft Teams 频道插件（插件：msteans）",
  "@openclaw/msteams Config": "Microsoft Teams 配置",
  "@openclaw/msteams Config_help": "Microsoft Teams 插件配置",
  "Plugin-defined config payload for msteams.":
    "Microsoft Teams 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/msteams": "启用 @openclaw/msteams",
  "Enable @openclaw/msteams_help": "是否启用 Microsoft Teams 插件",

  // Nextcloud Talk plugin
  "OpenClaw Nextcloud Talk": "OpenClaw Nextcloud Talk",
  "Nextcloud Talk 配置": "Nextcloud Talk 配置",
  "启用 @openclaw/nextcloud-talk": "启用 @openclaw/nextcloud-talk",

  // Nostr plugin
  "OpenClaw Nostr": "OpenClaw Nostr",
  "Nostr 配置": "Nostr 配置",
  "启用 @openclaw/nostr": "启用 @openclaw/nostr",

  // OpenProse plugin
  OpenProse: "OpenProse",
  "open-prose": "open-prose",
  OpenProse_help: "OpenProse 配置",
  "OpenProse VM skill pack with a /prose slash command. (plugin: open-prose)":
    "OpenProse VM 技能包，带 /prose 斜杠命令（插件：open-prose）。",
  "OpenProse Config": "OpenProse 配置",
  "OpenProse Config_help": "OpenProse 插件配置",
  "Plugin-defined config payload for open-prose.":
    "OpenProse 插件定义的配置负载（架构由插件提供）。",
  "Enable OpenProse": "启用 OpenProse",
  "Enable OpenProse_help": "是否启用 OpenProse 插件",

  // Qwen Portal Auth plugin
  "qwen-portal-auth": "Qwen Portal Auth",
  "qwen-portal-auth_help": "Qwen Portal Auth 插件配置",
  "Plugin entry for qwen-portal-auth.": "Qwen Portal Auth 插件条目。",
  "qwen-portal-auth Config": "Qwen Portal Auth 配置",
  "qwen-portal-auth Config_help": "Qwen Portal Auth 插件配置",
  "Plugin-defined config payload for qwen-portal-auth.":
    "Qwen Portal Auth 插件定义的配置负载（架构由插件提供）。",
  "Enable qwen-portal-auth": "启用 qwen-portal-auth",
  "Enable qwen-portal-auth_help": "是否启用 Qwen Portal Auth 插件",

  // Signal plugin
  "OpenClaw Signal": "OpenClaw Signal",
  "Signal 配置": "Signal 配置",
  "Enable @openclaw/signal": "启用 @openclaw/signal",

  // Enable Message Broadcast
  "Enable Message Broadcast": "启用消息广播",
  "Enable Message Broadcast_help": "是否启用消息广播",

  // Memory LanceDB settings
  "Auto-Capture": "自动捕获",
  autoCapture: "自动捕获",
  "Auto-Capture_help": "自动捕获配置",
  "Automatically capture important information from conversations": "自动从对话中捕获重要信息",
  "Auto-Recall": "自动召回",
  autoRecall: "自动召回",
  "Auto-Recall_help": "自动召回配置",
  "Automatically inject relevant memories into context": "自动将相关记忆注入上下文",
  "Database Path": "数据库路径",
  dbPath: "数据库路径",
  "Database Path_help": "数据库路径配置",
  embedding: "嵌入",
  Embedding: "嵌入",
  embedding_help: "嵌入配置",
  "OpenAI API 密钥": "OpenAI API 密钥",
  "OpenAI API Key_help": "OpenAI API 密钥配置",
  "API key for OpenAI embeddings (or use ${OPENAI_API_KEY})":
    "OpenAI 嵌入的 API 密钥（或使用 ${OPENAI_API_KEY}）",
  "Embedding Model": "嵌入模型",
  "Embedding Model_help": "嵌入模型配置",
  "OpenAI embedding model to use": "使用的 OpenAI 嵌入模型",
  "text-embedding-3-small": "text-embedding-3-small",
  "text-embedding-3-large": "text-embedding-3-large",
  "启用 @openclaw/memory-lancedb": "启用 @openclaw/memory-lancedb",

  // Transcription settings
  transcription_help: "转录配置",
  command: "命令",
  Command: "命令",
  command_help: "命令配置",

  // Bedrock settings
  bedrockDiscovery: "Bedrock 发现",
  "Bedrock Discovery": "Bedrock 发现",
  bedrockDiscovery_help: "Bedrock 发现配置",

  // Model defaults
  defaultContextWindow: "默认上下文窗口",
  "Default Context Window": "默认上下文窗口",
  defaultContextWindow_help: "默认上下文窗口配置",
  defaultMaxTokens: "默认最大 Token",
  "Default Max Tokens": "默认最大 Token",
  defaultMaxTokens_help: "默认最大 Token 配置",

  // Provider settings
  providerFilter: "提供商过滤器",
  "Provider Filter": "提供商过滤器",
  providerFilter_help: "提供商过滤器配置",
  refreshInterval: "刷新间隔",
  "Refresh Interval": "刷新间隔",
  refreshInterval_help: "刷新间隔配置",
  region: "区域",
  Region: "区域",
  region_help: "区域配置",

  // Messages settings
  merge: "合并",
  replace: "替换",
  providers: "提供商",
  Providers: "提供商",
  providers_help: "提供商配置",
  Messages_help: "消息配置",

  // Ack Reaction
  确认反应表情: "确认反应表情",
  "Ack Reaction Emoji_help": "确认反应表情配置",

  // Enable Message Broadcast
  "Enable Message Broadcast": "启用消息广播",

  // Console level translations
  silent: "静默",
  fatal: "致命",
  error: "错误",
  warn: "警告",
  info: "信息",
  debug: "调试",
  trace: "追踪",

  // Message types
  "group-mentions": "群组提及",
  "group-all": "群组全部",
  direct: "私信",
  all: "全部",

  // Message types 2
  pairing: "配对",
  open: "开放",
  "per-session": "按会话",
  "per-channel": "按频道",

  // Message patterns
  onchar: "按字符",
  onmessage: "按消息",

  // Message direction
  outbound: "出站",
  Outbound: "出站",
  outbound_help: "出站配置",

  // Enable settings
  "Enable Message Broadcast": "启用消息广播",
  "Enable Message Broadcast_help": "是否启用消息广播功能",

  // Other settings
  response: "响应",
  Response: "响应",
  response_help: "响应配置",
  toolResult: "工具结果",
  "Tool Result": "工具结果",
  toolResult_help: "工具结果配置",
  reasoningEffort: "推理工作量",
  "Reasoning Effort": "推理工作量",
  reasoningEffort_help: "推理工作量配置",

  // Memory settings
  auto: "自动",
  on: "开启",
  off: "关闭",

  // Memory config
  "Memory Config": "内存配置",
  "Memory Config_help": "内存配置设置",

  // Enable settings
  "Enable @openclaw/slack_help": "是否启用 Slack 插件",

  // Message Broadcast
  "Message Broadcast": "消息广播",
  "Message Broadcast_help": "消息广播配置",

  // Console settings
  console: "控制台",
  Console: "控制台",
  console_help: "控制台配置",

  // Level settings
  Level: "级别",
  level: "级别",
  level_help: "日志级别",

  // Style settings
  Style: "样式",
  style: "样式",
  style_help: "样式配置",

  // Patterns settings
  Patterns: "模式",
  patterns: "模式",
  patterns_help: "模式配置",

  // Sensitive settings
  Sensitive: "敏感",
  sensitive: "敏感",
  sensitive_help: "敏感配置",
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
