import { readFileSync, writeFileSync } from "fs";

const translations = {
  // General settings
  extraDirs_help: "额外目录配置",
  mappings: "映射",
  Mappings: "映射",
  mappings_help: "映射配置",
  presets: "预设",
  Presets: "预设",
  presets_help: "预设配置",
  color: "颜色",
  Color: "颜色",
  color_help: "颜色配置",

  // Human Delay settings
  "Human Delay Min (ms)_help": "人类延迟最小值配置",
  "Human Delay Mode": "人类延迟模式",
  "Human Delay Mode_help": "人类延迟模式配置",

  // Image Model settings (Chinese keys used as values)
  图像模型: "图像模型",
  imageModel_help: "图像模型配置",
  图像模型后备: "图像模型后备",
  "Image Model Fallbacks_help": "图像模型后备配置",
  "Image Model_help": "图像模型配置",

  // Concurrency settings
  最大并发数: "最大并发数",
  maxConcurrent_help: "最大并发数配置",

  // Media settings
  "媒体最大 MB 数": "媒体最大 MB 数",
  mediaMaxMb_help: "媒体最大 MB 数配置",

  // Memory Search settings (Chinese keys used as values)
  内存搜索: "内存搜索",
  "Memory Search_help": "内存搜索配置",

  // Cache settings (Chinese keys used as values)
  缓存: "缓存",
  cache_help: "缓存配置",

  // BlueBubbles plugin
  "@openclaw/bluebubbles Config_help": "BlueBubbles 插件配置",
  "Plugin-defined config payload for bluebubbles.":
    "BlueBubbles 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/bluebubbles": "启用 @openclaw/bluebubbles",
  "Enable @openclaw/bluebubbles_help": "是否启用 BlueBubbles 插件",

  // Copilot Proxy plugin
  "@openclaw/copilot-proxy": "OpenClaw Copilot Proxy",
  "copilot-proxy": "Copilot 代理",
  "@openclaw/copilot-proxy_help": "Copilot 代理插件配置",
  "OpenClaw Copilot Proxy provider plugin (plugin: copilot-proxy)":
    "OpenClaw Copilot Proxy 提供商插件（插件：copilot-proxy）",
  "@openclaw/copilot-proxy Config": "Copilot 代理配置",
  "@openclaw/copilot-proxy Config_help": "Copilot 代理插件配置",
  "Plugin-defined config payload for copilot-proxy.":
    "Copilot 代理插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/copilot-proxy": "启用 @openclaw/copilot-proxy",
  "Enable @openclaw/copilot-proxy_help": "是否启用 Copilot 代理插件",

  // Diagnostics OTEL plugin
  "@openclaw/diagnostics-otel": "OpenClaw 诊断 OTEL",
  "diagnostics-otel": "诊断 OTEL",
  "@openclaw/diagnostics-otel_help": "诊断 OTEL 插件配置",
  "OpenClaw diagnostics OpenTelemetry exporter (plugin: diagnostics-otel)":
    "OpenClaw 诊断 OpenTelemetry 导出器（插件：diagnostics-otel）",
  "@openclaw/diagnostics-otel Config": "诊断 OTEL 配置",
  "@openclaw/diagnostics-otel Config_help": "诊断 OTEL 插件配置",
  "Plugin-defined config payload for diagnostics-otel.":
    "诊断 OTEL 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/diagnostics-otel": "启用 @openclaw/diagnostics-otel",
  "Enable @openclaw/diagnostics-otel_help": "是否启用诊断 OTEL 插件",

  // Discord plugin
  "@openclaw/discord": "OpenClaw Discord",
  "@openclaw/discord_help": "Discord 插件配置",
  "OpenClaw Discord channel plugin (plugin: discord)": "OpenClaw Discord 频道插件（插件：discord）",
  "@openclaw/discord Config": "Discord 配置",
  "@openclaw/discord Config_help": "Discord 插件配置",
  "Plugin-defined config payload for discord.": "Discord 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/discord": "启用 @openclaw/discord",
  "Enable @openclaw/discord_help": "是否启用 Discord 插件",

  // Feishu plugin
  "@openclaw/feishu": "OpenClaw 飞书",
  "@openclaw/feishu_help": "飞书插件配置",
  "OpenClaw Feishu/Lark channel plugin (plugin: feishu)":
    "OpenClaw 飞书/Lark 频道插件（插件：feishu）",
  "@openclaw/feishu Config": "飞书配置",
  "@openclaw/feishu Config_help": "飞书插件配置",
  "Plugin-defined config payload for feishu.": "飞书插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/feishu": "启用 @openclaw/feishu",
  "Enable @openclaw/feishu_help": "是否启用飞书插件",

  // Gemini CLI OAuth provider plugin
  "@openclaw/gemini-cli-oauth": "OpenClaw Gemini CLI OAuth",
  "@openclaw/gemini-cli-oauth_help": "Gemini CLI OAuth 提供商插件配置",
  "OpenClaw Gemini CLI OAuth provider plugin (plugin: gemini-cli-oauth)":
    "OpenClaw Gemini CLI OAuth 提供商插件（插件：gemini-cli-oauth）",
  "@openclaw/gemini-cli-oauth Config": "Gemini CLI OAuth 配置",
  "@openclaw/gemini-cli-oauth Config_help": "Gemini CLI OAuth 插件配置",
  "Plugin-defined config payload for gemini-cli-oauth.":
    "Gemini CLI OAuth 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/gemini-cli-oauth": "启用 @openclaw/gemini-cli-oauth",
  "Enable @openclaw/gemini-cli-oauth_help": "是否启用 Gemini CLI OAuth 插件",

  // Google Antigravity OAuth provider plugin
  "@openclaw/google-antigravity-oauth": "OpenClaw Google Antigravity OAuth",
  "@openclaw/google-antigravity-oauth_help": "Google Antigravity OAuth 提供商插件配置",
  "OpenClaw Google Antigravity OAuth provider plugin (plugin: google-antigravity-oauth)":
    "OpenClaw Google Antigravity OAuth 提供商插件（插件：google-antigravity-oauth）",
  "@openclaw/google-antigravity-oauth Config": "Google Antigravity OAuth 配置",
  "@openclaw/google-antigravity-oauth Config_help": "Google Antigravity OAuth 插件配置",
  "Plugin-defined config payload for google-antigravity-oauth.":
    "Google Antigravity OAuth 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/google-antigravity-oauth": "启用 @openclaw/google-antigravity-oauth",
  "Enable @openclaw/google-antigravity-oauth_help": "是否启用 Google Antigravity OAuth 插件",

  // Google Chat plugin
  "@openclaw/google-chat": "OpenClaw Google Chat",
  "@openclaw/google-chat_help": "Google Chat 插件配置",
  "OpenClaw Google Chat channel plugin (plugin: google-chat)":
    "OpenClaw Google Chat 频道插件（插件：google-chat）",
  "@openclaw/google-chat Config": "Google Chat 配置",
  "@openclaw/google-chat Config_help": "Google Chat 插件配置",
  "Plugin-defined config payload for google-chat.":
    "Google Chat 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/google-chat": "启用 @openclaw/google-chat",
  "Enable @openclaw/google-chat_help": "是否启用 Google Chat 插件",

  // iMessage plugin
  "@openclaw/imessage": "OpenClaw iMessage",
  "@openclaw/imessage_help": "iMessage 插件配置",
  "OpenClaw iMessage channel plugin (plugin: imessage)":
    "OpenClaw iMessage 频道插件（插件：imessage）",
  "@openclaw/imessage Config": "iMessage 配置",
  "@openclaw/imessage Config_help": "iMessage 插件配置",
  "Plugin-defined config payload for imessage.": "iMessage 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/imessage": "启用 @openclaw/imessage",
  "Enable @openclaw/imessage_help": "是否启用 iMessage 插件",

  // LINE plugin
  "@openclaw/line": "OpenClaw LINE",
  "@openclaw/line_help": "LINE 插件配置",
  "OpenClaw LINE channel plugin (plugin: line)": "OpenClaw LINE 频道插件（插件：line）",
  "@openclaw/line Config": "LINE 配置",
  "@openclaw/line Config_help": "LINE 插件配置",
  "Plugin-defined config payload for line.": "LINE 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/line": "启用 @openclaw/line",
  "Enable @openclaw/line_help": "是否启用 LINE 插件",

  // Matrix plugin
  "@openclaw/matrix": "OpenClaw Matrix",
  "@openclaw/matrix_help": "Matrix 插件配置",
  "OpenClaw Matrix channel plugin (plugin: matrix)": "OpenClaw Matrix 频道插件（插件：matrix）",
  "@openclaw/matrix Config": "Matrix 配置",
  "@openclaw/matrix Config_help": "Matrix 插件配置",
  "Plugin-defined config payload for matrix.": "Matrix 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/matrix": "启用 @openclaw/matrix",
  "Enable @openclaw/matrix_help": "是否启用 Matrix 插件",

  // Mattermost plugin
  "@openclaw/mattermost": "OpenClaw Mattermost",
  "@openclaw/mattermost_help": "Mattermost 插件配置",
  "OpenClaw Mattermost channel plugin (plugin: mattermost)":
    "OpenClaw Mattermost 频道插件（插件：mattermost）",
  "@openclaw/mattermost Config": "Mattermost 配置",
  "@openclaw/mattermost Config_help": "Mattermost 插件配置",
  "Plugin-defined config payload for mattermost.":
    "Mattermost 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/mattermost": "启用 @openclaw/mattermost",
  "Enable @openclaw/mattermost_help": "是否启用 Mattermost 插件",

  // Memory LanceDB plugin
  "@openclaw/memory-lancedb": "OpenClaw Memory LanceDB",
  "@openclaw/memory-lancedb_help": "Memory LanceDB 插件配置",
  "OpenClaw LanceDB memory plugin (plugin: memory-lancedb)":
    "OpenClaw LanceDB 内存插件（插件：memory-lancedb）",
  "@openclaw/memory-lancedb Config": "Memory LanceDB 配置",
  "@openclaw/memory-lancedb Config_help": "Memory LanceDB 插件配置",
  "Plugin-defined config payload for memory-lancedb.":
    "Memory LanceDB 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/memory-lancedb": "启用 @openclaw/memory-lancedb",
  "Enable @openclaw/memory-lancedb_help": "是否启用 Memory LanceDB 插件",

  // MiniMax Portal Auth plugin
  "@openclaw/minimax-portal-auth": "OpenClaw MiniMax Portal Auth",
  "@openclaw/minimax-portal-auth_help": "MiniMax Portal Auth 插件配置",
  "OpenClaw MiniMax Portal Auth plugin (plugin: minimax-portal-auth)":
    "OpenClaw MiniMax Portal Auth 插件（插件：minimax-portal-auth）",
  "@openclaw/minimax-portal-auth Config": "MiniMax Portal Auth 配置",
  "@openclaw/minimax-portal-auth Config_help": "MiniMax Portal Auth 插件配置",
  "Plugin-defined config payload for minimax-portal-auth.":
    "MiniMax Portal Auth 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/minimax-portal-auth": "启用 @openclaw/minimax-portal-auth",
  "Enable @openclaw/minimax-portal-auth_help": "是否启用 MiniMax Portal Auth 插件",

  // Microsoft Teams plugin
  "@openclaw/microsoft-teams": "OpenClaw Microsoft Teams",
  "@openclaw/microsoft-teams_help": "Microsoft Teams 插件配置",
  "OpenClaw Microsoft Teams channel plugin (plugin: microsoft-teams)":
    "OpenClaw Microsoft Teams 频道插件（插件：microsoft-teams）",
  "@openclaw/microsoft-teams Config": "Microsoft Teams 配置",
  "@openclaw/microsoft-teams Config_help": "Microsoft Teams 插件配置",
  "Plugin-defined config payload for microsoft-teams.":
    "Microsoft Teams 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/microsoft-teams": "启用 @openclaw/microsoft-teams",
  "Enable @openclaw/microsoft-teams_help": "是否启用 Microsoft Teams 插件",

  // Nextcloud Talk plugin
  "@openclaw/nextcloud-talk": "OpenClaw Nextcloud Talk",
  "@openclaw/nextcloud-talk_help": "Nextcloud Talk 插件配置",
  "OpenClaw Nextcloud Talk channel plugin (plugin: nextcloud-talk)":
    "OpenClaw Nextcloud Talk 频道插件（插件：nextcloud-talk）",
  "@openclaw/nextcloud-talk Config": "Nextcloud Talk 配置",
  "@openclaw/nextcloud-talk Config_help": "Nextcloud Talk 插件配置",
  "Plugin-defined config payload for nextcloud-talk.":
    "Nextcloud Talk 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/nextcloud-talk": "启用 @openclaw/nextcloud-talk",
  "Enable @openclaw/nextcloud-talk_help": "是否启用 Nextcloud Talk 插件",

  // Nostr plugin
  "@openclaw/nostr": "OpenClaw Nostr",
  "@openclaw/nostr_help": "Nostr 插件配置",
  "OpenClaw Nostr channel plugin (plugin: nostr)": "OpenClaw Nostr 频道插件（插件：nostr）",
  "@openclaw/nostr Config": "Nostr 配置",
  "@openclaw/nostr Config_help": "Nostr 插件配置",
  "Plugin-defined config payload for nostr.": "Nostr 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/nostr": "启用 @openclaw/nostr",
  "Enable @openclaw/nostr_help": "是否启用 Nostr 插件",

  // Signal plugin
  "@openclaw/signal": "OpenClaw Signal",
  "@openclaw/signal_help": "Signal 插件配置",
  "OpenClaw Signal channel plugin (plugin: signal)": "OpenClaw Signal 频道插件（插件：signal）",
  "@openclaw/signal Config": "Signal 配置",
  "@openclaw/signal Config_help": "Signal 插件配置",
  "Plugin-defined config payload for signal.": "Signal 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/signal": "启用 @openclaw/signal",
  "Enable @openclaw/signal_help": "是否启用 Signal 插件",

  // Slack plugin
  "@openclaw/slack": "OpenClaw Slack",
  "@openclaw/slack_help": "Slack 插件配置",
  "OpenClaw Slack channel plugin (plugin: slack)": "OpenClaw Slack 频道插件（插件：slack）",
  "@openclaw/slack Config": "Slack 配置",
  "@openclaw/slack Config_help": "Slack 插件配置",
  "Plugin-defined config payload for slack.": "Slack 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/slack": "启用 @openclaw/slack",
  "Enable @openclaw/slack_help": "是否启用 Slack 插件",

  // Telegram plugin
  "@openclaw/telegram": "OpenClaw Telegram",
  "@openclaw/telegram_help": "Telegram 插件配置",
  "OpenClaw Telegram channel plugin (plugin: telegram)":
    "OpenClaw Telegram 频道插件（插件：telegram）",
  "@openclaw/telegram Config": "Telegram 配置",
  "@openclaw/telegram Config_help": "Telegram 插件配置",
  "Plugin-defined config payload for telegram.": "Telegram 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/telegram": "启用 @openclaw/telegram",
  "Enable @openclaw/telegram_help": "是否启用 Telegram 插件",

  // Tlon Urbit plugin
  "@openclaw/tlon-urbit": "OpenClaw Tlon Urbit",
  "@openclaw/tlon-urbit_help": "Tlon Urbit 插件配置",
  "OpenClaw Tlon/Urbit channel plugin (plugin: tlon-urbit)":
    "OpenClaw Tlon/Urbit 频道插件（插件：tlon-urbit）",
  "@openclaw/tlon-urbit Config": "Tlon Urbit 配置",
  "@openclaw/tlon-urbit Config_help": "Tlon Urbit 插件配置",
  "Plugin-defined config payload for tlon-urbit.":
    "Tlon Urbit 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/tlon-urbit": "启用 @openclaw/tlon-urbit",
  "Enable @openclaw/tlon-urbit_help": "是否启用 Tlon Urbit 插件",

  // Twitch plugin
  "@openclaw/twitch": "OpenClaw Twitch",
  "@openclaw/twitch_help": "Twitch 插件配置",
  "OpenClaw Twitch channel plugin (plugin: twitch)": "OpenClaw Twitch 频道插件（插件：twitch）",
  "@openclaw/twitch Config": "Twitch 配置",
  "@openclaw/twitch Config_help": "Twitch 插件配置",
  "Plugin-defined config payload for twitch.": "Twitch 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/twitch": "启用 @openclaw/twitch",
  "Enable @openclaw/twitch_help": "是否启用 Twitch 插件",

  // Voice Call plugin
  "@openclaw/voice-call": "OpenClaw 语音通话",
  "@openclaw/voice-call_help": "语音通话插件配置",
  "OpenClaw voice call plugin (plugin: voice-call)": "OpenClaw 语音通话插件（插件：voice-call）",
  "@openclaw/voice-call Config": "语音通话配置",
  "@openclaw/voice-call Config_help": "语音通话插件配置",
  "Plugin-defined config payload for voice-call.": "语音通话插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/voice-call": "启用 @openclaw/voice-call",
  "Enable @openclaw/voice-call_help": "是否启用语音通话插件",

  // WhatsApp plugin
  "@openclaw/whatsapp": "OpenClaw WhatsApp",
  "@openclaw/whatsapp_help": "WhatsApp 插件配置",
  "OpenClaw WhatsApp channel plugin (plugin: whatsapp)":
    "OpenClaw WhatsApp 频道插件（插件：whatsapp）",
  "@openclaw/whatsapp Config": "WhatsApp 配置",
  "@openclaw/whatsapp Config_help": "WhatsApp 插件配置",
  "Plugin-defined config payload for whatsapp.": "WhatsApp 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/whatsapp": "启用 @openclaw/whatsapp",
  "Enable @openclaw/whatsapp_help": "是否启用 WhatsApp 插件",

  // Zalo plugin
  "@openclaw/zalo": "OpenClaw Zalo",
  "@openclaw/zalo_help": "Zalo 插件配置",
  "OpenClaw Zalo channel plugin (plugin: zalo)": "OpenClaw Zalo 频道插件（插件：zalo）",
  "@openclaw/zalo Config": "Zalo 配置",
  "@openclaw/zalo Config_help": "Zalo 插件配置",
  "Plugin-defined config payload for zalo.": "Zalo 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/zalo": "启用 @openclaw/zalo",
  "Enable @openclaw/zalo_help": "是否启用 Zalo 插件",

  // Zalo Personal Account plugin
  "@openclaw/zalo-personal": "OpenClaw Zalo 个人账户",
  "@openclaw/zalo-personal_help": "Zalo 个人账户插件配置",
  "OpenClaw Zalo personal account plugin (plugin: zalo-personal)":
    "OpenClaw Zalo 个人账户插件（插件：zalo-personal）",
  "@openclaw/zalo-personal Config": "Zalo 个人账户配置",
  "@openclaw/zalo-personal Config_help": "Zalo 个人账户插件配置",
  "Plugin-defined config payload for zalo-personal.":
    "Zalo 个人账户插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/zalo-personal": "启用 @openclaw/zalo-personal",
  "Enable @openclaw/zalo-personal_help": "是否启用 Zalo 个人账户插件",
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
