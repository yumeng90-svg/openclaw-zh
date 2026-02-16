import { readFileSync, writeFileSync } from "fs";

const translations = {
  // ElevenLabs TTS settings
  volume_help: "音量设置",
  elevenlabs: "ElevenLabs",
  Elevenlabs: "ElevenLabs",
  elevenlabs_help: "ElevenLabs 语音合成配置",
  saveSubtitles_help: "是否保存字幕文件",
  voiceSettings_help: "语音设置配置",
  similarityBoost: "相似度增强",
  similarityBoost_help: "相似度增强参数",
  speed: "速度",
  speed_help: "语音速度",
  stability: "稳定性",
  stability_help: "语音稳定性",
  style: "样式",
  style_help: "语音样式",
  useSpeakerBoost: "使用说话人增强",
  useSpeakerBoost_help: "是否使用说话人增强",
  maxTextLength: "最大文本长度",
  maxTextLength_help: "单次合成的最大文本长度",
  modelOverrides: "模型覆盖",
  modelOverrides_help: "模型覆盖设置",
  allowModelId: "允许模型 ID",
  allowModelId_help: "是否允许自定义模型 ID",
  allowNormalization: "允许规范化",
  allowNormalization_help: "是否允许文本规范化",
  allowProvider: "允许提供商",
  allowProvider_help: "是否允许自定义提供商",
  allowSeed: "允许种子",
  allowSeed_help: "是否允许自定义种子值",
  allowText: "允许文本",
  allowText_help: "是否允许自定义文本",
  allowVoice: "允许语音",
  allowVoice_help: "是否允许自定义语音",
  allowVoiceSettings: "允许语音设置",
  allowVoiceSettings_help: "是否允许自定义语音设置",

  // OpenAI settings
  Openai: "OpenAI",
  openai_help: "OpenAI 配置",
  prefsPath: "偏好设置路径",
  prefsPath_help: "偏好设置文件路径",
  summaryModel: "摘要模型",
  summaryModel_help: "用于摘要的模型",

  // Commands settings
  Commands: "命令",
  Commands_help: "命令配置",
  "Allow Bash Chat Command": "允许 Bash 聊天命令",
  "Allow Bash Chat Command_help": "是否允许使用 Bash 聊天命令",
  "Use Access Groups": "使用访问组",
  "Use Access Groups_help": "是否使用访问组控制权限",

  // Session settings
  Session: "会话",
  Session_help: "会话配置",
  "Agent-to-Agent Ping-Pong Turns": "智能体对话回合上限",
  "Agent-to-Agent Ping-Pong Turns_help": "智能体之间对话的最大回合数",

  // DM Session Scope
  "DM Session Scope": "私信会话范围",
  "DM Session Scope_help": "私信会话的范围设置",
  "per-peer": "按对等方",
  "per-channel-peer": "按频道对等方",
  "per-account-channel-peer": "按账户频道对等方",

  // Identity links
  identityLinks: "身份链接",
  identityLinks_help: "身份链接配置",

  // Idle settings
  idleMinutes: "空闲时间 (分钟)",
  idleMinutes_help: "会话空闲超时时间",

  // Reset settings
  mainKey: "主键",
  mainKey_help: "主键配置",
  reset: "重置策略",
  reset_help: "重置策略配置",
  atHour: "在指定小时",
  "At Hour": "在指定小时",
  atHour_help: "每日重置的小时数",
  resetByChannel: "按渠道重置",
  resetByChannel_help: "按渠道重置配置",
  resetByType: "按类型重置",
  resetByType_help: "按类型重置配置",

  // DM/Group/Thread settings
  dm: "私信",
  Dm: "私信",
  dm_help: "私信配置",
  group: "群组",
  Group: "群组",
  group_help: "群组配置",
  thread: "线程",
  Thread: "线程",
  thread_help: "线程配置",
  resetTriggers: "重置触发器",
  resetTriggers_help: "重置触发器配置",

  // Max Concurrent Runs
  maxConcurrentRuns: "最大并发运行数",
  "Max Concurrent Runs": "最大并发运行数",
  maxConcurrentRuns_help: "定时任务最大并发运行数",

  // Hooks settings
  Hooks: "Hooks",
  Hooks_help: "Hooks 配置",
  gmail: "Gmail",
  Gmail: "Gmail",
  gmail_help: "Gmail Hook 配置",
  account: "账户",
  Account: "账户",
  account_help: "账户配置",
  allowUnsafeExternalContent: "允许不安全外部内容",
  "Allow Unsafe External Content": "允许不安全外部内容",
  allowUnsafeExternalContent_help: "是否允许加载不安全外部内容",
  hookUrl: "Hook URL",
  "Hook Url": "Hook URL",
  hookUrl_help: "Hook URL 配置",
  includeBody: "包含正文",
  "Include Body": "包含正文",
  includeBody_help: "是否包含消息正文",
  label: "标签",
  Label: "标签",
  label_help: "标签配置",
  pushToken: "推送令牌",
  "Push Token": "推送令牌",
  pushToken_help: "推送令牌配置",
  renewEveryMinutes: "每几分钟续期",
  "Renew Every Minutes": "每几分钟续期",
  renewEveryMinutes_help: "令牌续期间隔",

  // Serve/Tunnel settings
  serve: "服务模式",
  serve_help: "服务模式配置",
  path: "路径",
  path_help: "路径配置",
  subscription: "订阅",
  Subscription: "订阅",
  subscription_help: "订阅配置",
  topic: "话题",
  Topic: "话题",
  topic_help: "话题配置",
  internal: "内部",
  Internal: "内部",
  internal_help: "内部配置",

  // Entries/Handlers/Installs
  entries: "条目",
  entries_help: "条目配置",
  handlers: "处理器",
  Handlers: "处理器",
  handlers_help: "处理器配置",
  installs: "安装记录",
  installs_help: "安装记录配置",
  load: "加载",
  load_help: "加载配置",
  transformsDir: "转换目录",
  "Transforms Dir": "转换目录",
  transformsDir_help: "转换目录配置",

  // UI settings
  UI: "界面",
  UI_help: "界面配置",
  assistant: "助手",
  assistant_help: "助手配置",
  "Assistant Avatar": "助手头像",
  "Assistant Avatar_help": "助手头像配置",
  "Assistant Name": "助手名称",
  "Assistant Name_help": "助手名称配置",
  "Accent Color": "强调色",
  "Accent Color_help": "界面强调色配置",

  // Browser settings
  attachOnly: "仅附加模式",
  attachOnly_help: "是否仅附加到现有浏览器",
  cdpUrl: "CDP 连接地址",
  cdpUrl_help: "Chrome DevTools Protocol 连接地址",
  profiles: "配置文件",
  profiles_help: "浏览器配置文件",
  executablePath: "可执行文件路径",
  executablePath_help: "浏览器可执行文件路径",
  noSandbox: "禁用沙盒",
  noSandbox_help: "是否禁用浏览器沙盒",
  defaultProfile: "默认配置文件",
  defaultProfile_help: "默认浏览器配置文件",

  // CDP Timeout settings
  "Remote CDP Handshake Timeout (ms)": "远程 CDP 握手超时 (ms)",
  "Remote CDP Handshake Timeout (ms)_help": "远程 CDP 握手超时时间",
  "Remote CDP Timeout (ms)": "远程 CDP 超时 (ms)",
  "Remote CDP Timeout (ms)_help": "远程 CDP 请求超时时间",

  // Browser Snapshot settings
  "Browser Snapshot Defaults": "浏览器快照默认设置",
  "Browser Snapshot Defaults_help": "浏览器快照默认配置",
  "Browser Snapshot Mode": "浏览器快照模式",
  "Browser Snapshot Mode_help": "浏览器快照模式配置",

  // Talk settings
  Talk: "语音通话",
  Talk_help: "语音通话配置",
  "Talk API Key": "Talk API 密钥",
  "Talk API Key_help": "Talk API 密钥配置",
  interruptOnSpeech: "语音中断",
  interruptOnSpeech_help: "检测到语音时是否中断响应",
  voiceAliases: "语音别名",
  voiceAliases_help: "语音别名配置",

  // Messaging Channels
  "Messaging Channels": "消息频道",
  "Messaging Channels_help": "消息频道配置",

  // Skills settings
  Skills: "技能",
  Skills_help: "技能配置",
  allowBundled: "允许内置技能",
  allowBundled_help: "是否允许使用内置技能",

  // Install settings
  install: "安装",
  install_help: "安装配置",

  // Node Manager
  nodeManager: "节点管理器",
  nodeManager_help: "节点管理器配置",

  // Package managers
  npm: "npm",
  pnpm: "pnpm",
  yarn: "yarn",
  bun: "bun",
  preferBrew: "偏好 Brew",
  preferBrew_help: "是否优先使用 Homebrew",

  // Watch Skills
  "Watch Skills": "监视技能",
  "Watch Skills_help": "是否监视技能文件变化",
  "Skills Watch Debounce (ms)": "技能监视防抖延迟 (ms)",
  "Skills Watch Debounce (ms)_help": "技能文件变化防抖延迟",

  // Plugins
  Plugins: "插件",
  Plugins_help: "插件配置",
  "Plugin Allowlist": "插件允许列表",
  "Plugin Allowlist_help": "允许加载的插件列表",
  "Plugin Denylist": "插件拒绝列表",
  "Plugin Denylist_help": "禁止加载的插件列表",
  "Enable Plugins": "启用插件",
  "Enable Plugins_help": "是否启用插件系统",
  "Plugin Entries": "插件条目",
  "Plugin Entries_help": "插件条目配置",

  // BlueBubbles plugin
  "@openclaw/bluebubbles": "OpenClaw BlueBubbles",
  bluebubbles: "BlueBubbles",
  "@openclaw/bluebubbles_help": "BlueBubbles 插件配置",
  "OpenClaw BlueBubbles channel plugin (plugin: bluebubbles)":
    "OpenClaw BlueBubbles 频道插件（插件：bluebubbles）",
  "@openclaw/bluebubbles Config": "BlueBubbles 配置",
  config: "配置",
  "Enable @openclaw/bluebubbles": "启用 @openclaw/bluebubbles",
  "Enable @openclaw/bluebubbles_help": "是否启用 BlueBubbles 插件",

  // Copilot Proxy plugin
  "OpenClaw Copilot Proxy": "OpenClaw Copilot Proxy",
  "copilot-proxy": "Copilot 代理",
  "Copilot 代理配置": "Copilot 代理配置",
  "@openclaw/copilot-proxy": "OpenClaw Copilot Proxy",
  "@openclaw/copilot-proxy Config": "Copilot 代理配置",
  "Enable @openclaw/copilot-proxy": "启用 @openclaw/copilot-proxy",
  "Enable @openclaw/copilot-proxy_help": "是否启用 Copilot 代理插件",

  // Diagnostics OTEL plugin
  "OpenClaw 诊断 OTEL": "OpenClaw 诊断 OTEL",
  "诊断 OTEL 配置": "诊断 OTEL 配置",
  "@openclaw/diagnostics-otel": "OpenClaw 诊断 OTEL",
  "@openclaw/diagnostics-otel Config": "诊断 OTEL 配置",
  "Enable @openclaw/diagnostics-otel": "启用 @openclaw/diagnostics-otel",
  "Enable @openclaw/diagnostics-otel_help": "是否启用诊断 OTEL 插件",

  // Discord plugin
  "OpenClaw Discord": "OpenClaw Discord",
  "Discord 配置": "Discord 配置",
  "@openclaw/discord": "OpenClaw Discord",
  "@openclaw/discord Config": "Discord 配置",
  "Enable @openclaw/discord": "启用 @openclaw/discord",
  "Enable @openclaw/discord_help": "是否启用 Discord 插件",

  // Feishu plugin
  "OpenClaw 飞书": "OpenClaw 飞书",
  飞书配置: "飞书配置",
  "@openclaw/feishu": "OpenClaw 飞书",
  "@openclaw/feishu Config": "飞书配置",
  "Enable @openclaw/feishu": "启用 @openclaw/feishu",
  "Enable @openclaw/feishu_help": "是否启用飞书插件",

  // Google Antigravity Auth plugin
  "@openclaw/google-antigravity-auth": "OpenClaw Google Antigravity Auth",
  "google-antigravity-auth": "Google Antigravity Auth",
  "@openclaw/google-antigravity-auth_help": "Google Antigravity Auth 插件配置",
  "OpenClaw Google Antigravity OAuth provider plugin (plugin: google-antigravity-auth)":
    "OpenClaw Google Antigravity OAuth 提供商插件（插件：google-antigravity-auth）",
  "@openclaw/google-antigravity-auth Config": "Google Antigravity Auth 配置",
  "@openclaw/google-antigravity-auth Config_help": "Google Antigravity Auth 插件配置",
  "Plugin-defined config payload for google-antigravity-auth.":
    "Google Antigravity Auth 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/google-antigravity-auth": "启用 @openclaw/google-antigravity-auth",
  "Enable @openclaw/google-antigravity-auth_help": "是否启用 Google Antigravity Auth 插件",

  // Google Gemini CLI Auth plugin
  "@openclaw/google-gemini-cli-auth": "OpenClaw Google Gemini CLI Auth",
  "google-gemini-cli-auth": "Google Gemini CLI Auth",
  "@openclaw/google-gemini-cli-auth_help": "Google Gemini CLI Auth 插件配置",
  "OpenClaw Gemini CLI OAuth provider plugin (plugin: google-gemini-cli-auth)":
    "OpenClaw Google Gemini CLI OAuth 提供商插件（插件：google-gemini-cli-auth）",
  "@openclaw/google-gemini-cli-auth Config": "Google Gemini CLI Auth 配置",
  "@openclaw/google-gemini-cli-auth Config_help": "Google Gemini CLI Auth 插件配置",
  "Plugin-defined config payload for google-gemini-cli-auth.":
    "Google Gemini CLI Auth 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/google-gemini-cli-auth": "启用 @openclaw/google-gemini-cli-auth",
  "Enable @openclaw/google-gemini-cli-auth_help": "是否启用 Google Gemini CLI Auth 插件",

  // GoogleChat plugin
  "@openclaw/googlechat": "OpenClaw GoogleChat",
  googlechat: "GoogleChat",
  "@openclaw/googlechat_help": "GoogleChat 插件配置",
  "OpenClaw Google Chat channel plugin (plugin: googlechat)":
    "OpenClaw Google Chat 频道插件（插件：googlechat）",
  "@openclaw/googlechat Config": "GoogleChat 配置",
  "@openclaw/googlechat Config_help": "GoogleChat 插件配置",
  "Plugin-defined config payload for googlechat.":
    "GoogleChat 插件定义的配置负载（架构由插件提供）。",
  "Enable @openclaw/googlechat": "启用 @openclaw/googlechat",
  "Enable @openclaw/googlechat_help": "是否启用 GoogleChat 插件",

  // iMessage plugin
  "OpenClaw iMessage": "OpenClaw iMessage",
  "iMessage 配置": "iMessage 配置",
  "@openclaw/imessage": "OpenClaw iMessage",
  "@openclaw/imessage Config": "iMessage 配置",
  "Enable @openclaw/imessage": "启用 @openclaw/imessage",
  "Enable @openclaw/imessage_help": "是否启用 iMessage 插件",

  // LINE plugin
  "OpenClaw LINE": "OpenClaw LINE",
  "LINE 配置": "LINE 配置",
  "@openclaw/line": "OpenClaw LINE",
  "@openclaw/line Config": "LINE 配置",
  "Enable @openclaw/line": "启用 @openclaw/line",
  "Enable @openclaw/line_help": "是否启用 LINE 插件",

  // LLM Task plugin
  "LLM Task": "LLM 任务",
  "llm-task": "LLM 任务",
  "LLM Task_help": "LLM 任务配置",
  "Generic JSON-only LLM tool for structured tasks callable from workflows. (plugin: llm-task)":
    "用于工作流中调用的纯 JSON LLM 任务工具（插件：llm-task）",
  "LLM Task Config": "LLM 任务配置",
  "LLM Task Config_help": "LLM 任务插件配置",
  "Plugin-defined config payload for llm-task.": "LLM 任务插件定义的配置负载（架构由插件提供）。",
  allowedModels: "允许的模型",
  "Allowed Models": "允许的模型",
  allowedModels_help: "允许使用的模型列表",
  "Allowlist of provider/model keys like openai-codex/gpt-5.2.":
    "允许的提供商/模型键列表（例如 openai-codex/gpt-5.2）。",
  defaultAuthProfileId: "默认认证配置 ID",
  "Default Auth Profile Id": "默认认证配置 ID",
  defaultAuthProfileId_help: "默认使用的认证配置 ID",
  defaultModel: "默认模型",
  "Default Model": "默认模型",
  defaultModel_help: "默认使用的模型",
  defaultProvider: "默认提供商",
  "Default Provider": "默认提供商",
  defaultProvider_help: "默认使用的提供商",
  maxTokens: "最大 Token",
  maxTokens_help: "最大 Token 数",
  "Enable LLM Task": "启用 LLM 任务",
  "Enable LLM Task_help": "是否启用 LLM 任务插件",

  // Lobster plugin
  Lobster: "Lobster",
  lobster: "Lobster",
  Lobster_help: "Lobster 插件配置",
  "Typed workflow tool with resumable approvals. (plugin: lobster)":
    "支持可恢复审批的类型化工作流工具（插件：lobster）",
  "Lobster Config": "Lobster 配置",
  "Lobster Config_help": "Lobster 插件配置",
  "Plugin-defined config payload for lobster.": "Lobster 插件定义的配置负载（架构由插件提供）。",
  "Enable Lobster": "启用 Lobster",
  "Enable Lobster_help": "是否启用 Lobster 插件",

  // Matrix plugin
  "OpenClaw Matrix": "OpenClaw Matrix",
  "Matrix 配置": "Matrix 配置",
  "@openclaw/matrix": "OpenClaw Matrix",
  "@openclaw/matrix Config": "Matrix 配置",
  "Enable @openclaw/matrix": "启用 @openclaw/matrix",
  "Enable @openclaw/matrix_help": "是否启用 Matrix 插件",

  // Mattermost plugin
  "OpenClaw Mattermost": "OpenClaw Mattermost",
  "Mattermost 配置": "Mattermost 配置",
  "@openclaw/mattermost": "OpenClaw Mattermost",
  "@openclaw/mattermost Config": "Mattermost 配置",
  "Enable @openclaw/mattermost": "启用 @openclaw/mattermost",
  "Enable @openclaw/mattermost_help": "是否启用 Mattermost 插件",

  // Memory Core plugin
  "Memory (Core)": "内存（核心）",
  memoryCore_help: "内存核心插件配置",

  // Voice Call plugin
  "Response Model": "响应模型",
  "Response Model_help": "语音通话响应模型",
  "Response System Prompt": "响应系统提示词",
  "Response System Prompt_help": "语音通话系统提示词",
  "Response Timeout (ms)": "响应超时（ms）",
  "Response Timeout (ms)_help": "语音通话响应超时时间",
  ringTimeoutMs: "响铃超时（ms）",
  ringTimeoutMs_help: "响铃超时时间",
  "Webhook Bind": "Webhook 绑定",
  "Webhook Bind_help": "Webhook 绑定配置",
  "Webhook Path": "Webhook 路径",
  "Webhook Path_help": "Webhook 路径配置",
  "Webhook Port": "Webhook 端口",
  "Webhook Port_help": "Webhook 端口配置",
  silenceTimeoutMs: "静音超时（ms）",
  silenceTimeoutMs_help: "静音超时时间",
  "Skip Signature Verification": "跳过签名验证",
  "Skip Signature Verification_help": "是否跳过签名验证",
  "Call Log Store Path": "通话日志存储路径",
  "Call Log Store Path_help": "通话日志存储路径配置",
  streaming: "流式传输",
  streaming_help: "流式传输配置",
  "Enable Streaming": "启用流式传输",
  "Enable Streaming_help": "是否启用流式传输",
  "OpenAI Realtime API Key": "OpenAI Realtime API 密钥",
  "OpenAI Realtime API Key_help": "OpenAI Realtime API 密钥配置",
  silenceDurationMs: "静音持续时间（ms）",
  "Silence Duration Ms": "静音持续时间（ms）",
  silenceDurationMs_help: "静音持续时间配置",
  "Media Stream Path": "媒体流路径",
  "Media Stream Path_help": "媒体流路径配置",
  "Realtime STT Model": "实时语音转文本模型",
  "Realtime STT Model_help": "实时语音转文本模型配置",
  sttProvider: "语音转文本提供商",
  sttProvider_help: "语音转文本提供商配置",
  "openai-realtime": "OpenAI Realtime",
  vadThreshold: "语音活动检测阈值",
  vadThreshold_help: "语音活动检测阈值配置",
  stt: "语音转文本",
  Stt: "语音转文本",
  stt_help: "语音转文本配置",

  // Tailscale settings
  "Tailscale Mode": "Tailscale 模式",
  "Tailscale Mode_help": "Tailscale 连接模式",
  "Tailscale Path": "Tailscale 路径",
  "Tailscale Path_help": "Tailscale 可执行文件路径",

  // Telnyx settings
  Telnyx: "Telnyx",
  telnyx_help: "Telnyx 配置",
  "Telnyx API Key": "Telnyx API 密钥",
  "Telnyx API Key_help": "Telnyx API 密钥配置",
  "Telnyx Connection ID": "Telnyx 连接 ID",
  "Telnyx Connection ID_help": "Telnyx 连接 ID 配置",
  "Telnyx Public Key": "Telnyx 公钥",
  "Telnyx Public Key_help": "Telnyx 公钥配置",
  toNumber: "目标号码",
  "To Number": "目标号码",
  toNumber_help: "发送消息的目标号码",
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
