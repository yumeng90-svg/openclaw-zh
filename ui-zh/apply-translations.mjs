import { readFileSync, writeFileSync } from "fs";

const translations = {
  "Identity Avatar": "身份头像",
  "Agent Skill Filter": "智能体技能过滤",
  "Agent Avatar": "智能体头像",
  Workspace: "工作区",
  "Gateway Token": "网关令牌",
  "Gateway Password": "网关密码",
  "Billing Backoff (hours)": "账单退避时间（小时）",
  "Enable Image Understanding": "启用图像理解",
  "Enable Audio Understanding": "启用音频理解",
  "Enable Video Understanding": "启用视频理解",
  "Enable Link Understanding": "启用链接理解",
  "Agent Tool Profile": "智能体工具配置文件",
  "Agent Tool Allowlist Additions": "智能体工具允许列表添加",
  "Agent Tool Policy by Provider": "按提供商的智能体工具策略",
  "Enable apply_patch": "启用 apply_patch",
  "apply_patch Model Allowlist": "apply_patch 模型允许列表",
  "Exec Approval Running Notice (ms)": "执行批准运行通知（毫秒）",
  "Allow Cross-Context (Same Provider)": "允许跨上下文（相同提供商）",
  "Allow Cross-Context (Across Providers)": "允许跨上下文（跨提供商）",
  "Cross-Context Marker": "跨上下文标记",
  "Enable Web Search Tool": "启用网络搜索工具",
  "Web Search Provider": "网络搜索提供商",
  "Web Search Timeout (sec)": "网络搜索超时（秒）",
  "Enable Web Fetch Tool": "启用网络获取工具",
  "Web Fetch Max Redirects": "网络获取最大重定向次数",
  "Web Fetch User-Agent": "网络获取 User-Agent",
  "Enable Memory Search": "启用内存搜索",
  "Memory Search Sources": "内存搜索源",
  "Memory Search Session Index (Experimental)": "内存搜索会话索引（实验性）",
  "Memory Search Provider": "内存搜索提供商",
  "Remote Embedding Base URL": "远程嵌入基础 URL",
  "Remote Embedding API Key": "远程嵌入 API 密钥",
  "Remote Embedding Headers": "远程嵌入标头",
  "Remote Batch Concurrency": "远程批处理并发数",
  "Memory Search Model": "内存搜索模型",
  "Memory Search Fallback": "内存搜索回退",
  "Memory Search Index Path": "内存搜索索引路径",
  "Memory Search Vector Index": "内存搜索向量索引",
  "Memory Search Vector Extension Path": "内存搜索向量扩展路径",
  "Memory Chunk Tokens": "内存分块 Token 数",
  "Memory Chunk Overlap Tokens": "内存分块重叠 Token 数",
  "Memory Watch Debounce (ms)": "内存监视防抖（毫秒）",
  "Memory Search Max Results": "内存搜索最大结果数",
  "Memory Search Min Score": "内存搜索最低分数",
  "Memory Search Hybrid": "内存混合搜索",
  "Memory Search Vector Weight": "内存搜索向量权重",
  "Memory Search Text Weight": "内存搜索文本权重",
  "Memory Search Hybrid Candidate Multiplier": "内存搜索混合候选乘数",
  "Memory Search Embedding Cache": "内存搜索嵌入缓存",
  "Memory Search Embedding Cache Max Entries": "内存搜索嵌入缓存最大条目数",
  "QMD Path": "QMD 路径",
  "QMD Path Pattern": "QMD 路径模式",
  "QMD Path Name": "QMD 路径名称",
  "QMD Session Indexing": "QMD 会话索引",
  "QMD Update Debounce (ms)": "QMD 更新防抖（毫秒）",
  "QMD Command Timeout (ms)": "QMD 命令超时（毫秒）",
  "QMD Update Timeout (ms)": "QMD 更新超时（毫秒）",
  "QMD Embed Timeout (ms)": "QMD 嵌入超时（毫秒）",
  "QMD Search Timeout (ms)": "QMD 搜索超时（毫秒）",
  "Native Commands": "原生命令",
  "Native Skill Commands": "原生技能命令",
  "Text Commands": "文本命令",
  "Allow Bash Chat Command": "允许 Bash 聊天命令",
  "Bash Foreground Window (ms)": "Bash 前台窗口（毫秒）",
  "Allow /config": "允许 /config",
  "Allow /debug": "允许 /debug",
  "Allow Restart": "允许重启",
  "Use Access Groups": "使用访问组",
  "Command Owners": "命令所有者",
  "Ack Reaction Emoji": "确认反应表情",
  "Ack Reaction Scope": "确认反应范围",
  "Inbound Message Debounce (ms)": "入站消息防抖（毫秒）",
  WhatsApp: "WhatsApp",
  Telegram: "Telegram",
  "Telegram Custom Commands": "Telegram 自定义命令",
  Discord: "Discord",
  Slack: "Slack",
  Mattermost: "Mattermost",
  Signal: "Signal",
  iMessage: "iMessage",
  BlueBubbles: "BlueBubbles",
  "MS Teams": "微软 Teams",
  "Telegram Bot Token": "Telegram 机器人令牌",
  "Telegram DM Policy": "Telegram 私信策略",
  "Telegram Draft Stream Mode": "Telegram 草稿流模式",
  "Telegram Draft Chunk Min Chars": "Telegram 草稿分块最小字符数",
  "Telegram Draft Chunk Max Chars": "Telegram 草稿分块最大字符数",
  "Telegram Draft Chunk Break Preference": "Telegram 草稿分块断点偏好",
  "Telegram Retry Attempts": "Telegram 重试次数",
  "Telegram Retry Min Delay (ms)": "Telegram 重试最小延迟（毫秒）",
  "Telegram Retry Max Delay (ms)": "Telegram 重试最大延迟（毫秒）",
  "Telegram Retry Jitter": "Telegram 重试抖动",
  "Telegram autoSelectFamily": "Telegram 自动选择地址族",
  "Telegram API Timeout (seconds)": "Telegram API 超时（秒）",
  "Telegram Inline Buttons": "Telegram 内联按钮",
  "WhatsApp DM Policy": "WhatsApp 私信策略",
  "WhatsApp Self-Phone Mode": "WhatsApp 自用模式",
  "WhatsApp Message Debounce (ms)": "WhatsApp 消息防抖（毫秒）",
  "Signal DM Policy": "Signal 私信策略",
  "iMessage DM Policy": "iMessage 私信策略",
  "BlueBubbles DM Policy": "BlueBubbles 私信策略",
  "Discord DM Policy": "Discord 私信策略",
  "Discord Retry Attempts": "Discord 重试次数",
  "Discord Retry Min Delay (ms)": "Discord 重试最小延迟（毫秒）",
  "Discord Retry Max Delay (ms)": "Discord 重试最大延迟（毫秒）",
  "Discord Retry Jitter": "Discord 重试抖动",
  "Discord Max Lines Per Message": "Discord 单条消息最大行数",
  "Discord Presence Intent": "Discord 状态意图",
  "Discord Guild Members Intent": "Discord 公会成员意图",
  "Discord PluralKit Enabled": "启用 Discord PluralKit",
  "Discord PluralKit Token": "Discord PluralKit 令牌",
  "Slack DM Policy": "Slack 私信策略",
  "Slack Allow Bot Messages": "Slack 允许机器人消息",
  "Discord Bot Token": "Discord 机器人令牌",
  "Slack Bot Token": "Slack 机器人令牌",
  "Slack App Token": "Slack 应用令牌",
  "Slack User Token": "Slack 用户令牌",
  "Slack User Token Read Only": "Slack 用户令牌（只读）",
  "Slack Thread History Scope": "Slack 线程历史范围",
  "Slack Thread Parent Inheritance": "Slack 线程父级继承",
  "Mattermost Bot Token": "Mattermost 机器人令牌",
  "Mattermost Base URL": "Mattermost 基础 URL",
  "Mattermost Chat Mode": "Mattermost 聊天模式",
  "Mattermost Onchar Prefixes": "Mattermost 字符触发前缀",
  "Mattermost Require Mention": "Mattermost 需要提及",
  "Signal Account": "Signal 账户",
  "iMessage CLI Path": "iMessage CLI 路径",
  "mDNS Discovery Mode": "mDNS 发现模式",
  "Enable Plugins": "启用插件",
  "Plugin Enabled": "插件启用",
  "Plugin Config": "插件配置",
  "Plugin Install Source": "插件安装源",
  "Plugin Install Spec": "插件安装规范",
  "Plugin Install Source Path": "插件安装源路径",
  "Plugin Install Path": "插件安装路径",
  "Plugin Install Version": "插件安装版本",
  "Plugin Install Time": "插件安装时间",
  'Update channel for git + npm installs ("stable", "beta", or "dev").':
    "Git + npm 安装的更新通道（“stable”、“beta”或“dev”）。",
  "Optional allowlist of skills for this agent (omit = all skills; empty = no skills).":
    "此智能体的可选技能允许列表（省略 = 所有技能；为空 = 无技能）。",
  "Avatar image path (relative to the agent workspace only) or a remote URL/data URL.":
    "头像图像路径（仅相对于智能体工作区）或远程 URL/数据 URL。",
  'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).':
    "mDNS 广播模式（默认“minimal”，“full”包括 cliPath/sshPort，“off”禁用 mDNS）。",
  "Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.":
    "默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定所需。",
  "Optional URL prefix where the Control UI is served (e.g. /openclaw).":
    "提供控制 UI 的可选 URL 前缀（例如 /openclaw）。",
  "Optional filesystem root for Control UI assets (defaults to dist/control-ui).":
    "控制 UI 资产的可选文件系统根目录（默认为 dist/control-ui）。",
  "Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).":
    "控制 UI/WebChat websocket 连接的允许浏览器来源（仅完整来源，例如 https://control.example.com）。",
  "Allow Control UI auth over insecure HTTP (token-only; not recommended).":
    "允许通过不安全的 HTTP 进行控制 UI 认证（仅令牌；不推荐）。",
  "DANGEROUS. Disable Control UI device identity checks (token/password only).":
    "危险。禁用控制 UI 设备身份检查（仅令牌/密码）。",
  "Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).":
    "启用兼容 OpenAI 的 `POST /v1/chat/completions` 端点（默认：关闭）。",
  'Hot reload strategy for config changes ("hybrid" recommended).':
    "配置更改的热重载策略（推荐“hybrid”）。",
  'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).':
    "节点浏览器路由（“auto” = 选择单个连接的浏览器节点，“manual” = 需要节点参数，“off” = 禁用）。",
  "Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).":
    "除网关默认值外允许的额外 node.invoke 命令（命令字符串数组）。",
  "Expose the local browser control server via node proxy.":
    "通过节点代理公开本地浏览器控制服务器。",
  "Optional allowlist of browser profile names exposed via the node proxy.":
    "通过节点代理公开的浏览器配置文件名称的可选允许列表。",
  'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".':
    '通过标志启用定向诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',
  "Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.":
    "实验性。在工具策略允许时为 OpenAI 模型启用 apply_patch。",
  'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").':
    "模型 ID 的可选允许列表（例如“gpt-5.2”或“openai/gpt-5.2”）。",
  "When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.":
    "为真时（默认），后台执行会话在退出时排队系统事件并请求心跳。",
  "Allow stdin-only safe binaries to run without explicit allowlist entries.":
    "允许仅标准输入的类似二进制文件在没有明确允许列表条目的情况下运行。",
  "Legacy override: allow cross-context sends across all providers.":
    "遗留覆盖：允许跨所有提供商发送跨上下文。",
  "Allow sends to other channels within the same provider (default: true).":
    "允许发送到同一提供商内的其他频道（默认：开启）。",
  "Allow sends across different providers (default: false).":
    "允许跨不同提供商发送（默认：关闭）。",
  "Add a visible origin marker when sending cross-context (default: true).":
    "发送跨上下文时添加可见的来源标记（默认：开启）。",
  'Text prefix for cross-context markers (supports "{channel}").':
    "跨上下文标记的文本前缀（支持“{channel}”）。",
  'Text suffix for cross-context markers (supports "{channel}").':
    "跨上下文标记的文本后缀（支持“{channel}”）。",
  'Search provider ("brave" or "perplexity").': "搜索提供商（“brave”或“perplexity”）。",
  "Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).":
    "Perplexity 或 OpenRouter API 密钥（备用：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。",
  "Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).":
    "Perplexity 基础 URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。",
  'Perplexity model override (default: "perplexity/sonar-pro").':
    "Perplexity 模型覆盖（默认：“perplexity/sonar-pro”）。",
  "Hard cap for web_fetch maxChars (applies to config and tool calls).":
    "web_fetch maxChars 的硬上限（适用于配置和工具调用）。",
  "Cache TTL in minutes for web_fetch results.": "web_fetch 结果的缓存 TTL（分钟）。",
  "Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).":
    "使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。",
  "Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).":
    "Firecrawl 基础 URL（例如 https://api.firecrawl.dev 或自定义端点）。",
  "When true, Firecrawl returns only the main content (default: true).":
    "为真时，Firecrawl 仅返回主要内容（默认：开启）。",
  "Firecrawl maxAge (ms) for cached results when supported by the API.":
    "API 支持时缓存结果的 Firecrawl maxAge（毫秒）。",
  "Timeout in seconds for Firecrawl requests.": "Firecrawl 请求的超时时间（秒）。",
  "Allow bot-authored messages to trigger Slack replies (default: false).":
    "允许机器人编写的消息触发 Slack 回复（默认：关闭）。",
  'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).':
    "Slack 线程历史上下文的范围（“thread”隔离每个线程；“channel”重用频道历史）。",
  "If true, Slack thread sessions inherit the parent channel transcript (default: false).":
    "如果为真，Slack 线程会话继承父频道转录（默认：关闭）。",
  "Bot token from Mattermost System Console -> Integrations -> Bot Accounts.":
    "来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。",
  "Base URL for your Mattermost server (e.g., https://chat.example.com).":
    "您的 Mattermost 服务器的基础 URL（例如 https://chat.example.com）。",
  'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").':
    "在提及时（“oncall”）、触发字符（“>”或“！”）（“onchar”）或每条消息（“onmessage”）回复频道消息。",
  'Trigger prefixes for onchar mode (default: [">", "!"]).':
    'onchar 模式的触发前缀（默认：[">", "!"]）。',
  "Require @mention in channels before responding (default: true).":
    "响应前需要在频道中 @mention（默认：开启）。",
  "Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).":
    "当配置文件因账单/信用不足而失败时的基础退避（小时）（默认：5）。",
  "Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).":
    "截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。",
  "Optional repository root shown in the system prompt runtime line (overrides auto-detect).":
    "系统提示运行时行中显示的可选存储库根目录（覆盖自动检测）。",
  'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).':
    "消息信封的时区（“utc”、“local”、“user”或 IANA 时区字符串）。",
  'Include absolute timestamps in message envelopes ("on" or "off").':
    "在消息信封中包含绝对时间戳（“on”或“off”）。",
  'Include elapsed time in message envelopes ("on" or "off").':
    "在消息信封中包含经过时间（“on”或“off”）。",
  "Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).":
    "对 MEMORY.md 和 memory/*.md 进行向量搜索（支持每智能体覆盖）。",
  'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).':
    '内存搜索索引源（默认：["memory"]；添加“sessions”以包括会话转录）。',
  "Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).":
    "包括在内存搜索中的额外路径（目录或 .md 文件；从工作区解析的相对路径）。",
  "Enable experimental session transcript indexing for memory search (default: false).":
    "启用内存搜索的实验性会话转录索引（默认：关闭）。",
  'Embedding provider ("openai", "gemini", "voyage", or "local").':
    "嵌入提供商（“openai”、“gemini”、“voyage”或“local”）。",
  "Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).":
    "远程嵌入的自定义基础 URL（兼容 OpenAI 的代理或 Gemini 覆盖）。",
  "Extra headers for remote embeddings (merged; remote overrides OpenAI headers).":
    "远程嵌入的额外标头（合并；远程覆盖 OpenAI 标头）。",
  "Enable batch API for memory embeddings (OpenAI/Gemini; default: true).":
    "启用内存嵌入的批处理 API（OpenAI/Gemini；默认：开启）。",
  "Wait for batch completion when indexing (default: true).":
    "索引时等待批处理完成（默认：开启）。",
  "Max concurrent embedding batch jobs for memory indexing (default: 2).":
    "内存索引的最大并发嵌入批处理作业（默认：2）。",
  "Polling interval in ms for batch status (default: 2000).":
    "批处理状态的轮询间隔（毫秒）（默认：2000）。",
  "Timeout in minutes for batch indexing (default: 60).": "批处理索引的超时（分钟）（默认：60）。",
  "Local GGUF model path or hf: URI (node-llama-cpp).":
    "本地 GGUF 模型路径或 hf: URI (node-llama-cpp)。",
  'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").':
    "嵌入失败时的回退提供商（“openai”、“gemini”、“local”或“none”）。",
  "SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).":
    "SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。",
  "Enable sqlite-vec extension for vector search (default: true).":
    "启用向量搜索的 sqlite-vec 扩展（默认：开启）。",
  "Optional override path to sqlite-vec extension library (.dylib/.so/.dll).":
    "sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。",
  "Enable hybrid BM25 + vector search for memory (default: true).":
    "启用内存的混合 BM25 + 向量搜索（默认：开启）。",
  "Weight for vector similarity when merging results (0-1).": "合并结果时向量相似度的权重（0-1）。",
  "Weight for BM25 text relevance when merging results (0-1).":
    "合并结果时 BM25 文本相关性的权重（0-1）。",
  "Multiplier for candidate pool size (default: 4).": "候选池大小的乘数（默认：4）。",
  "Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).":
    "在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：开启）。",
  "Memory backend configuration (global).": "内存后端配置（全局）。",
  'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).':
    "内存后端（“builtin”为 OpenClaw 嵌入，“qmd”为 QMD sidecar）。",
  'Default citation behavior ("auto", "on", or "off").': "默认引用行为（“auto”、“on”或“off”）。",
  "Whether to automatically index MEMORY.md + memory/**/*.md (default: true).":
    "是否自动索引 MEMORY.md + memory/**/*.md（默认：开启）。",
  "Additional directories/files to index with QMD (path + optional glob pattern).":
    "使用 QMD 索引的额外目录/文件（路径 + 可选 Glob 模式）。",
  "Optional stable name for the QMD collection (default derived from path).":
    "QMD 集合的可选稳定名称（默认源自路径）。",
  "Enable QMD session transcript indexing (experimental, default: false).":
    "启用 QMD 会话转录索引（实验性，默认：关闭）。",
  "Override directory for sanitized session exports before indexing.":
    "索引前覆盖已清理会话导出的目录。",
  "Retention window for exported sessions before pruning (default: unlimited).":
    "修剪前导出会话的保留窗口（默认：无限）。",
  "How often the QMD sidecar refreshes indexes (duration string, default: 5m).":
    "QMD sidecar 刷新索引的频率（持续时间字符串，默认：5m）。",
  "Minimum delay between successive QMD refresh runs (default: 15000).":
    "连续 QMD 刷新运行之间的最小延迟（默认：15000）。",
  "Block startup until the boot QMD refresh finishes (default: false).":
    "阻止启动直到引导 QMD 刷新完成（默认：关闭）。",
  "How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.":
    "QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。",
  "Timeout for QMD maintenance commands like collection list/add (default: 30000).":
    "QMD 维护命令（如集合列表/添加）的超时（默认：30000）。",
  "Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).":
    "QMD 召回的会话/频道范围（语法同 session.sendPolicy；默认：仅直接）。",
  "Optional cap on cached embeddings (best-effort).": "缓存嵌入的可选上限（尽力而为）。",
  "Lazy sync: schedule a reindex on search after changes.": "懒同步：更改后在搜索时安排重新索引。",
  "Minimum appended bytes before session transcripts trigger reindex (default: 100000).":
    "会话转录触发重新索引前的最小追加字节数（默认：100000）。",
  "Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).":
    "会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。",
  'Select the active memory plugin by id, or "none" to disable memory plugins.':
    "通过 ID 选择活动内存插件，或“none”以禁用内存插件。",
  'Install source ("npm", "archive", or "path").': "安装源（“npm”、“archive”或“path”）。",
  "Resolved install directory (usually ~/.openclaw/extensions/<id>).":
    "解析的安装目录（通常为 ~/.openclaw/extensions/<id>）。",
  "Agent avatar (workspace-relative path, http(s) URL, or data URI).":
    "智能体头像（工作区相对路径、http(s) URL 或数据 URI）。",
  "Ordered fallback models (provider/model). Used when the primary model fails.":
    "有序备用模型（提供商/模型）。当主模型失败时使用。",
  "Optional image model (provider/model) used when the primary model lacks image input.":
    "当主模型缺少图像输入时使用的可选图像模型（提供商/模型）。",
  'Delay style for block replies ("off", "natural", "custom").':
    "块回复的延迟风格（“off”、“natural”、“custom”）。",
  "Register native commands with channels that support it (Discord/Slack/Telegram).":
    "向支持的频道（Discord/Slack/Telegram）注册原生命令。",
  "Register native skill commands (user-invocable skills) with channels that support it.":
    "向支持的频道注册原生技能命令（用户可调用技能）。",
  "Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).":
    "允许 bash 聊天命令（`!`; `/bash` 别名）运行主机 Shell 命令（默认：关闭；需要 tools.elevated）。",
  "How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).":
    "Bash 后台运行前的等待时间（默认：2000；0 立即后台运行）。",
  "Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like \"whatsapp:+15551234567\"). '*' is ignored.":
    "仅限所有者的工具/命令的明确所有者允许列表。使用频道原生 ID（可选前缀如 \"whatsapp:+15551234567\"）。'*' 被忽略。",
  'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).':
    "私信会话范围：“main”保持连续性；“per-peer”、“per-channel-peer”或“per-account-channel-peer”隔离私信历史（推荐用于共享收件箱/多账户）。",
  "Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).":
    "将规范身份映射到提供商前缀的对等 ID 以进行私信会话链接（例如：telegram:123456）。",
  "Allow Telegram to write config in response to channel events/commands (default: true).":
    "允许 Telegram 响应频道事件/命令写入配置（默认：开启）。",
  "Allow Slack to write config in response to channel events/commands (default: true).":
    "允许 Slack 响应频道事件/命令写入配置（默认：开启）。",
  "Allow Mattermost to write config in response to channel events/commands (default: true).":
    "允许 Mattermost 响应频道事件/命令写入配置（默认：开启）。",
  "Allow Discord to write config in response to channel events/commands (default: true).":
    "允许 Discord 响应频道事件/命令写入配置（默认：开启）。",
  "Allow WhatsApp to write config in response to channel events/commands (default: true).":
    "允许 WhatsApp 响应频道事件/命令写入配置（默认：开启）。",
  "Allow Signal to write config in response to channel events/commands (default: true).":
    "允许 Signal 响应频道事件/命令写入配置（默认：开启）。",
  "Allow iMessage to write config in response to channel events/commands (default: true).":
    "允许 iMessage 响应频道事件/命令写入配置（默认：开启）。",
  "Allow Microsoft Teams to write config in response to channel events/commands (default: true).":
    "允许 Microsoft Teams 响应频道事件/命令写入配置（默认：开启）。",
  'Override native commands for Discord (bool or "auto").':
    "覆盖 Discord 的原生命令（布尔值或“auto”）。",
  'Override native skill commands for Discord (bool or "auto").':
    "覆盖 Discord 的原生技能命令（布尔值或“auto”）。",
  'Override native commands for Telegram (bool or "auto").':
    "覆盖 Telegram 的原生命令（布尔值或“auto”）。",
  'Override native skill commands for Telegram (bool or "auto").':
    "覆盖 Telegram 的原生技能命令（布尔值或“auto”）。",
  'Override native commands for Slack (bool or "auto").':
    "覆盖 Slack 的原生命令（布尔值或“auto”）。",
  'Override native skill commands for Slack (bool or "auto").':
    "覆盖 Slack 的原生技能命令（布尔值或“auto”）。",
  "Max reply-back turns between requester and target (0–5).":
    "请求者和目标之间的最大回复轮数（0–5）。",
  "Additional Telegram bot menu commands (merged with native; conflicts ignored).":
    "额外的 Telegram 机器人菜单命令（与原生合并；忽略冲突）。",
  'When to send ack reactions ("group-mentions", "group-all", "direct", "all").':
    "何时发送确认反应（“group-mentions”、“group-all”、“direct”、“all”）。",
  "Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).":
    "来自同一发送者的快速入站消息的批处理防抖窗口（0 禁用）。",
  'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.telegram.allowFrom=["*"]。',
  "Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.":
    "Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私人主题 + sendMessageDraft。",
  'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).':
    'channels.telegram.streamMode="block" 时发出 Telegram 草稿更新前的最小字符数（默认：200）。',
  'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).':
    'channels.telegram.streamMode="block" 时 Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',
  "Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.":
    "Telegram 草稿块的首选断点（段落 | 换行 | 句子）。默认：段落。",
  "Max retry attempts for outbound Telegram API calls (default: 3).":
    "Telegram 出口 API 调用的最大重试次数（默认：3）。",
  "Maximum retry delay cap in ms for Telegram outbound calls.":
    "Telegram 出口调用的最大重试延迟上限（毫秒）。",
  "Override Node autoSelectFamily for Telegram (true=enable, false=disable).":
    "覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。",
  "Max seconds before Telegram API requests are aborted (default: 500 per grammY).":
    "Telegram API 请求中止前的最大秒数（默认：500 per grammY）。",
  'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.whatsapp.allowFrom=["*"]。',
  "Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).":
    "来自同一发送者的快速连续消息的批处理防抖窗口（0 禁用）。",
  'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.signal.allowFrom=["*"]。',
  'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.imessage.allowFrom=["*"]。',
  'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.bluebubbles.allowFrom=["*"]。',
  'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.discord.dm.allowFrom=["*"]。',
  "Max retry attempts for outbound Discord API calls (default: 3).":
    "Discord 出口 API 调用的最大重试次数（默认：3）。",
  "Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.":
    "启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：关闭。",
  "Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.":
    "启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：关闭。",
  "Resolve PluralKit proxied messages and treat system members as distinct senders.":
    "解析 PluralKit 代理消息并将系统成员视为不同的发送者。",
  "Optional PluralKit token for resolving private systems or members.":
    "用于解析私有系统或成员的可选 PluralKit 令牌。",
  'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].':
    '私信访问控制（推荐“pairing”）。“open”需要 channels.slack.dm.allowFrom=["*"]。',
  "ws://host:18789": "ws://主机:18789",
  "sha256:ab12cd34…": "sha256:ab12cd34…",
  "user@host": "user@host",
  "/openclaw": "/openclaw",
  "dist/control-ui": "dist/control-ui",
  "https://control.example.com": "https://control.example.com",
  "https://chat.example.com": "https://chat.example.com",
  "avatars/openclaw.png": "avatars/openclaw.png",
  Logging: "日志",
  Agents: "智能体",
  Bindings: "绑定",
  Messages: "消息",
  Commands: "命令",
  Hooks: "Hooks",
  "Messaging Channels": "消息频道",
  Presence: "在线状态",
  "Voice Wake": "语音唤醒",
  memory: "内存",
  设置向导: "设置向导",
  Wizard_help: "配置向导设置",
  lastRunAt: "最后运行时间",
  "Last Run At": "最后运行时间",
  lastRunAt_help: "上次运行此智能体的时间",
  lastRunCommand: "最后运行命令",
  "Last Run Command": "最后运行命令",
  lastRunCommand_help: "上次运行使用的命令",
  lastRunCommit: "最后运行提交",
  "Last Run Commit": "最后运行提交",
  lastRunCommit_help: "上次运行的 git commit SHA",
  lastRunMode: "最后运行模式",
  "Last Run Mode": "最后运行模式",
  lastRunMode_help: "上次运行使用的模式",
  lastRunVersion: "最后运行版本",
  "Last Run Version": "最后运行版本",
  lastRunVersion_help: "上次运行的 OpenClaw 版本",
  更新: "更新",
  Update_help: "更新设置",
  更新通道: "更新通道",
  "Update Channel_help": "Git 和 npm 安装的更新通道",
  'Update channel for git + npm installs ("stable", "beta", or "dev").':
    'Git 和 npm 安装的更新通道（"stable"、"beta" 或 "dev"）',
  启动时检查更新: "启动时检查更新",
  "Update Check on Start_help": "是否在网关启动时检查更新",
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
  // Only add if not already present (simple check)
  // We check lowercase because our lookup handles case-insensitivity,
  // but the file keys are what matters.
  // Actually, duplicate keys are fine (we'll dedupe later if needed),
  // but better to avoid spamming the file.

  // We will just append them.
  if (!content.includes(JSON.stringify(key))) {
    newLines.push(`  ${JSON.stringify(key)}: ${JSON.stringify(value)},`);
  }
}

const newContent = before + "\n" + newLines.join("\n") + after;
writeFileSync(translationPath, newContent, "utf-8");
console.log(`Added ${newLines.length} translations.`);
