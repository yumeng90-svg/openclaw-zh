import { readFileSync, writeFileSync } from "fs";

const translations = {
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
  Update: "更新",
  Update_help: "更新设置",
  "Update Channel": "更新通道",
  "Update Channel_help": "Git 和 npm 安装的更新通道",
  'Update channel for git + npm installs ("stable", "beta", or "dev").':
    'Git 和 npm 安装的更新通道（"stable"、"beta" 或 "dev"）',
  "Update Check on Start": "启动时检查更新",
  "Update Check on Start_help": "是否在网关启动时检查更新",
  Diagnostics: "诊断",
  Diagnostics_help: "诊断设置",
  "Cache Trace": "缓存追踪",
  cacheTrace_help: "缓存追踪设置",
  "Cache Trace Enabled": "启用缓存追踪",
  "Cache Trace Enabled_help": "是否启用缓存追踪",
  "Cache Trace File Path": "缓存追踪文件路径",
  "Cache Trace File Path_help": "缓存追踪文件的保存路径",
  "Cache Trace Include Messages": "追踪包含消息全文",
  "Cache Trace Include Messages_help": "是否在追踪中包含消息全文",
  "Cache Trace Include Prompt": "追踪包含提示词",
  "Cache Trace Include Prompt_help": "是否在追踪中包含提示词",
  "Cache Trace Include System": "追踪包含系统提示词",
  "Cache Trace Include System_help": "是否在追踪中包含系统提示词",
  "Diagnostics Enabled": "启用诊断",
  "Diagnostics Enabled_help": "是否启用诊断功能",
  "Diagnostics Flags": "诊断标志",
  "Diagnostics Flags_help": "启用特定目标的诊断日志",
  'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".':
    '通过标志启用定向诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',
  otel_help: "OpenTelemetry 设置",
  "OpenTelemetry Enabled": "启用 OpenTelemetry",
  "OpenTelemetry Enabled_help": "是否启用 OpenTelemetry",
  "OpenTelemetry Endpoint": "OpenTelemetry 端点",
  "OpenTelemetry Endpoint_help": "OpenTelemetry 收集器的 URL",
  "OpenTelemetry Flush Interval (ms)": "OpenTelemetry 刷新间隔 (ms)",
  "OpenTelemetry Flush Interval (ms)_help": "发送数据的频率",
  "OpenTelemetry Headers": "OpenTelemetry 请求头",
  "OpenTelemetry Headers_help": "发送到收集器的额外 HTTP 头",
  "OpenTelemetry Logs Enabled": "启用 OpenTelemetry 日志",
  "OpenTelemetry Logs Enabled_help": "是否发送日志到 OpenTelemetry",
  "OpenTelemetry Metrics Enabled": "启用 OpenTelemetry 指标",
  "OpenTelemetry Metrics Enabled_help": "是否发送指标到 OpenTelemetry",
  "OpenTelemetry Protocol": "OpenTelemetry 协议",
  "OpenTelemetry Protocol_help": "使用的传输协议 (http/protobuf 或 grpc)",
  "http/protobuf": "http/protobuf",
  grpc: "grpc",
  "OpenTelemetry Trace Sample Rate": "OpenTelemetry 追踪采样率",
  "OpenTelemetry Trace Sample Rate_help": "追踪数据的采样比例 (0.0 - 1.0)",
  "OpenTelemetry Service Name": "OpenTelemetry 服务名称",
  "OpenTelemetry Service Name_help": "在 OpenTelemetry 中标识此服务的名称",
  "OpenTelemetry Traces Enabled": "启用 OpenTelemetry 追踪",
  "OpenTelemetry Traces Enabled_help": "是否发送追踪数据到 OpenTelemetry",
  Gateway: "网关",
  Gateway_help: "网关设置",
  Auth: "认证",
  auth: "认证",
  auth_help: "认证设置",
  "Allow Tailscale": "允许 Tailscale",
  allowTailscale_help: "是否允许 Tailscale 连接",
  Mode: "模式",
  mode_help: "运行模式",
  Password: "密码",
  "Gateway Password": "网关密码",
  "Gateway Password_help": "连接网关所需的密码",
  "Gateway Token": "网关令牌",
  "Gateway Token_help": "连接网关所需的令牌",
  "Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.":
    "默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定所需。",
  Bind: "绑定",
  bind: "绑定",
  bind_help: "网络绑定设置",
  "Control UI": "控制界面",
  controlUi_help: "控制界面设置",
  "Control UI Allowed Origins": "控制界面允许的来源",
  "Control UI Allowed Origins_help": "允许连接控制界面的域名列表",
  "Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).":
    "控制 UI/WebChat websocket 连接的允许浏览器来源（仅完整来源，例如 https://control.example.com）。",
  "Allow Insecure Control UI Auth": "允许不安全的控制界面认证",
  "Allow Insecure Control UI Auth_help": "是否允许通过 HTTP 进行认证",
  "Control UI Base Path": "控制界面基础路径",
  "Control UI Base Path_help": "控制界面的 URL 前缀",
  "Optional URL prefix where the Control UI is served (e.g. /openclaw).":
    "提供控制 UI 的可选 URL 前缀（例如 /openclaw）。",
  "Dangerously Disable Control UI Device Auth": "危险：禁用控制界面设备认证",
  "Dangerously Disable Control UI Device Auth_help": "仅使用令牌/密码进行认证，禁用设备检查",
  "DANGEROUS. Disable Control UI device identity checks (token/password only).":
    "危险。禁用控制 UI 设备身份检查（仅令牌/密码）。",
  Enabled: "已启用",
  enabled: "已启用",
  enabled_help: "是否启用此功能",
  "Control UI Assets Root": "控制界面资源根目录",
  "Control UI Assets Root_help": "控制界面静态文件的文件系统路径",
  "Optional filesystem root for Control UI assets (defaults to dist/control-ui).":
    "控制 UI 资产的可选文件系统根目录（默认为 dist/control-ui）。",
  http_help: "HTTP 设置",
  Endpoints: "端点",
  endpoints_help: "API 端点设置",
  "Chat Completions": "聊天补全",
  chatCompletions_help: "聊天补全 API 设置",
  "OpenAI Chat Completions Endpoint": "OpenAI 聊天补全端点",
  "OpenAI Chat Completions Endpoint_help": "兼容 OpenAI 的聊天补全 API 地址",
  "Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).":
    "启用兼容 OpenAI 的 `POST /v1/chat/completions` 端点（默认：关闭）。",
  Responses: "响应",
  responses_help: "响应设置",
  Files: "文件",
  files_help: "文件处理设置",
  "Allowed MIME Types": "允许的 MIME 类型",
  allowedMimes_help: "允许处理的文件类型列表",
  "Allow URL": "允许 URL",
  allowUrl_help: "是否允许处理 URL",
  "Max Bytes": "最大字节数",
  maxBytes_help: "允许处理的最大文件大小",
  "Max Chars": "最大字符数",
  maxChars_help: "允许处理的最大字符数",
  "Max Redirects": "最大重定向次数",
  maxRedirects_help: "网络请求允许的最大重定向次数",
  pdf_help: "PDF 处理设置",
  "Max Pages": "最大页数",
  maxPages_help: "PDF 处理的最大页数",
  "Max Pixels": "最大像素数",
  maxPixels_help: "图像处理的最大像素数",
  "Min Text Chars": "最小文本字符数",
  minTextChars_help: "识别为文本所需的最小字符数",
  "Timeout (ms)": "超时 (ms)",
  timeoutMs_help: "操作超时时间",
  Images: "图片",
  images_help: "图片处理设置",
  "Max Body Bytes": "最大包体字节数",
  maxBodyBytes_help: "HTTP 请求包体的最大大小",
  Nodes: "节点",
  nodes_help: "节点设置",
  "Gateway Node Allowlist (Extra Commands)": "网关节点允许列表 (额外命令)",
  "Gateway Node Allowlist (Extra Commands)_help": "允许在网关节点上执行的额外命令列表",
  "Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).":
    "除网关默认值外允许的额外 node.invoke 命令（命令字符串数组）。",
  Browser: "浏览器",
  browser_help: "浏览器设置",
  "Gateway Node Browser Mode": "网关节点浏览器模式",
  "Gateway Node Browser Mode_help": "浏览器的路由模式 (自动/手动/禁用)",
  'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).':
    "节点浏览器路由（“auto” = 选择单个连接的浏览器节点，“manual” = 需要节点参数，“off” = 禁用）。",
  "Gateway Node Browser Pin": "网关节点浏览器固定",
  "Gateway Node Browser Pin_help": "将浏览器路由固定到特定节点 ID",
  "Pin browser routing to a specific node id or name (optional).":
    "将浏览器路由固定到特定节点 ID 或名称（可选）。",
  "Gateway Node Denylist": "网关节点拒绝列表",
  "Gateway Node Denylist_help": "禁止连接的节点 ID 列表",
  Port: "端口",
  port_help: "服务监听端口",
  Reload: "重载",
  reload_help: "重载设置",
  "Config Reload Debounce (ms)": "配置重载防抖 (ms)",
  "Config Reload Debounce (ms)_help": "应用配置更改前的等待时间",
  "Debounce window (ms) before applying config changes.": "应用配置更改前的防抖窗口 (ms)。",
  "Config Reload Mode": "配置重载模式",
  "Config Reload Mode_help": "配置更改的热重载策略",
  'Hot reload strategy for config changes ("hybrid" recommended).':
    "配置更改的热重载策略（推荐“hybrid”）。",
  Remote: "远程",
  remote_help: "远程连接设置",
  autoGenerate_help: "自动生成设置",
  "CA Path": "CA 证书路径",
  caPath_help: "CA 证书文件的路径",
  "Cert Path": "证书路径",
  certPath_help: "SSL 证书文件的路径",
  "Key Path": "密钥路径",
  keyPath_help: "SSL 密钥文件的路径",
  "Trusted Proxies": "受信代理",
  trustedProxies_help: "受信任的反向代理列表",
  "Node Host": "节点主机",
  "Node Host_help": "节点连接的主机地址",
  "Browser Proxy": "浏览器代理",
  browserProxy_help: "浏览器代理设置",
  "Node Browser Proxy Allowed Profiles": "节点浏览器代理允许的配置文件",
  allowProfiles: "允许的配置文件",
  "Node Browser Proxy Allowed Profiles_help": "允许通过代理访问的浏览器配置文件列表",
  "Optional allowlist of browser profile names exposed via the node proxy.":
    "通过节点代理公开的浏览器配置文件名称的可选允许列表。",
  "Node Browser Proxy Enabled": "启用节点浏览器代理",
  "Node Browser Proxy Enabled_help": "是否启用节点浏览器代理功能",
  "Expose the local browser control server via node proxy.":
    "通过节点代理公开本地浏览器控制服务器。",
  Agents: "智能体",
  agents: "智能体",
  Agents_help: "智能体设置",
  Defaults: "默认值",
  defaults: "默认值",
  defaults_help: "默认设置",
  "Block Streaming Break": "块流中断",
  blockStreamingBreak_help: "块流中断设置",
  text_end: "文本结束",
  message_end: "消息结束",
  "Block Streaming Chunk": "块流分块",
  blockStreamingChunk_help: "块流分块设置",
  "Break Preference": "中断偏好",
  breakPreference: "中断偏好",
  breakPreference_help: "分块中断的偏好设置",
  paragraph: "段落",
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
  // Only add if not already present
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
