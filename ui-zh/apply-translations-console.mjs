import { readFileSync, writeFileSync } from "fs";

const translations = {
  // Basic password/auth settings
  password: "密码",
  "Remote Gateway Password_help": "远程网关密码",
  "Remote Gateway SSH Identity_help": "远程网关 SSH 身份配置",
  "Remote Gateway SSH Target_help": "远程网关 SSH 目标配置",
  "Remote Gateway TLS Fingerprint_help": "远程网关 TLS 指纹配置",
  "Remote Gateway Token_help": "远程网关令牌配置",
  transport_help: "传输方式配置",
  "Remote Gateway URL_help": "远程网关 URL 配置",
  tailscale_help: "Tailscale 配置",
  resetOnExit_help: "退出时重置配置",
  tls_help: "TLS 配置",
  idleMs_help: "空闲超时配置",

  // Block streaming
  blockStreamingDefault: "块流默认值",
  "Block Streaming Default": "块流默认值",
  blockStreamingDefault_help: "块流默认设置配置",

  // Context pruning & memory
  "Bootstrap Max Chars_help": "引导最大字符数配置",
  "CLI Backends_help": "CLI 后端配置",
  compaction_help: "压缩配置",
  maxHistoryShare_help: "最大历史分享配置",
  memoryFlush_help: "内存刷新配置",
  prompt_help: "提示词配置",
  softThresholdTokens_help: "软阈值 Token 数配置",
  systemPrompt_help: "系统提示词配置",
  default: "默认",
  reserveTokensFloor_help: "保留 Token 下限配置",
  contextPruning_help: "上下文修剪配置",
  hardClear_help: "强制清除配置",
  placeholder_help: "占位符配置",
  hardClearRatio_help: "强制清除比例配置",
  keepLastAssistants_help: "保留最后助手数配置",
  minPrunableToolChars_help: "最小可修剪工具字符数配置",
  tools_help: "工具配置",
  allow_help: "允许配置",
  deny_help: "拒绝配置",
  ttl_help: "生存时间配置",
  contextTokens_help: "上下文 Token 数配置",
  elevatedDefault_help: "默认提升权限配置",

  // Envelope settings
  "包络 elapsed": "包络 elapsed",
  "Envelope Elapsed_help": "包络 elapsed 配置",
  "Envelope Timestamp_help": "包络时间戳配置",
  "Envelope Timezone_help": "包络时区配置",
  heartbeat_help: "心跳配置",
  accountId_help: "账户 ID 配置",
  ackMaxChars_help: "确认最大字符数配置",
  activeHours_help: "活跃时间配置",
  end_help: "结束配置",
  start_help: "开始配置",
  timezone_help: "时区配置",
  every_help: "每次配置",
  includeReasoning_help: "包含推理配置",
  model_help: "模型配置",
  session_help: "会话配置",
  target_help: "目标配置",
  'Delivery target ("last", "none", or a channel id). Known channels: telegram, whatsapp, discord, googlechat, slack, signal, imessage.':
    '投递目标（"last"、"none" 或频道 ID）。已知频道：telegram、whatsapp、discord、googlechat、slack、signal、imessage。',
  to_help: "收件人配置",
  humanDelay_help: "人类延迟配置",
  "Human Delay Max (ms)_help": "人类延迟最大值配置",

  // Memory search
  "Memory Search Embedding Cache_help": "内存搜索嵌入缓存配置",
  "Memory Search Embedding Cache Max Entries_help": "内存搜索嵌入缓存最大条目数配置",
  chunking_help: "分块配置",
  "内存分块重叠 Token 数": "内存分块重叠 Token 数",
  "Memory Chunk Overlap Tokens_help": "内存分块重叠 Token 数配置",
  "内存分块 Token 数": "内存分块 Token 数",
  "Memory Chunk Tokens_help": "内存分块 Token 数配置",
  "Enable Memory Search_help": "启用内存搜索配置",
  experimental_help: "实验性功能配置",
  "Memory Search Session Index (Experimental)_help": "内存搜索会话索引（实验性）配置",
  "Extra Memory Paths_help": "额外内存路径配置",
  "Memory Search Fallback_help": "内存搜索回退配置",

  // Provider names
  openai: "OpenAI",
  gemini: "Gemini",
  voyage: "Voyage",
  none: "无",
  local_help: "本地配置",
  modelCacheDir_help: "模型缓存目录配置",
  "Memory Search Provider_help": "内存搜索提供商配置",
  query_help: "查询配置",
  hybrid_help: "混合模式配置",
  "Memory Search Hybrid Candidate Multiplier_help": "内存搜索混合候选乘数配置",
  "Memory Search Hybrid_help": "内存搜索混合配置",
  "Memory Search Text Weight_help": "内存搜索文本权重配置",
  "Memory Search Vector Weight_help": "内存搜索向量权重配置",
  "Memory Search Max Results_help": "内存搜索最大结果数配置",
  "Memory Search Min Score_help": "内存搜索最小分数配置",
  "Remote Embedding API Key_help": "远程嵌入 API 密钥配置",
  "Remote Embedding Base URL_help": "远程嵌入基础 URL 配置",
  batch_help: "批处理配置",
  "Remote Batch Concurrency_help": "远程批处理并发数配置",
  pollIntervalMs_help: "轮询间隔配置",
  timeoutMinutes_help: "超时分钟数配置",
  wait_help: "等待配置",
  "Remote Embedding Headers_help": "远程嵌入请求头配置",
  "Memory Search Sources_help": "内存搜索源配置",
  store_help: "存储配置",
  driver_help: "驱动程序配置",
  "Memory Search Index Path_help": "内存搜索索引路径配置",
  vector_help: "向量配置",
  sync_help: "同步配置",
  intervalMinutes_help: "间隔分钟数配置",
  "Index on Search (Lazy)_help": "搜索时索引（懒加载）配置",
  "Index on Session Start_help": "会话开始时索引配置",

  // Sessions
  sessions: "会话",
  Sessions: "会话",
  sessions_help: "会话配置",
  "Session Delta Bytes_help": "会话增量字节数配置",
  "Session Delta Messages_help": "会话增量消息数配置",
  "Watch Memory Files_help": "监视内存文件配置",
  "Memory Watch Debounce (ms)_help": "内存监视防抖配置",
  "Model Fallbacks_help": "模型后备配置",
  "Primary Model_help": "主要模型配置",
  "Repo Root_help": "仓库根目录配置",
  sandbox_help: "沙盒配置",

  // Host control & container
  allowHostControl: "允许主机控制",
  "Allow Host Control": "允许主机控制",
  allowHostControl_help: "允许主机控制配置",
  autoStart_help: "自动启动配置",
  autoStartTimeoutMs_help: "自动启动超时配置",
  cdpPort_help: "CDP 端口配置",
  containerPrefix_help: "容器前缀配置",
  enableNoVnc_help: "启用无 VNC 配置",
  headless_help: "无头模式配置",
  image_help: "镜像配置",
  noVncPort_help: "无 VNC 端口配置",
  vncPort_help: "VNC 端口配置",
  docker_help: "Docker 配置",

  // Container settings (Chinese keys)
  "AppArmor 配置": "AppArmor 配置",
  apparmorProfile_help: "AppArmor 配置",
  binds_help: "挂载绑定配置",
  capDrop_help: "能力丢弃配置",
  cpus_help: "CPU 核心数配置",
  dns_help: "DNS 配置",

  // Environment
  env: "环境变量",
  Env: "环境变量",
  env_help: "环境变量配置",
  extraHosts_help: "额外主机配置",
  memory_help: "内存配置",
  memorySwap_help: "交换内存配置",
  network_help: "网络配置",
  pidsLimit_help: "进程数限制配置",
  readOnlyRoot_help: "只读根目录配置",
  seccompProfile_help: "Seccomp 配置",
  setupCommand_help: "设置命令配置",
  tmpfs_help: "临时文件系统配置",

  // Ulimits
  ulimits: "资源限制",
  Ulimits: "资源限制",
  ulimits_help: "资源限制配置",
  user_help: "用户配置",
  workdir_help: "工作目录配置",

  // Session tools
  perSession_help: "按会话配置",
  prune_help: "清理配置",
  idleHours_help: "空闲小时数配置",
  maxAgeDays_help: "最大天数配置",
  scope_help: "范围配置",
  shared: "共享",
  sessionToolsVisibility_help: "会话工具可见性配置",
  workspaceAccess_help: "工作区访问配置",
  ro: "只读",
  rw: "读写",
  workspaceRoot_help: "工作区根目录配置",
  skipBootstrap_help: "跳过引导配置",
  subagents_help: "子智能体配置",
  archiveAfterMinutes_help: "归档时间配置",

  // Thinking
  thinking_help: "思考模式配置",
  thinkingDefault: "思考默认",
  "Thinking Default": "思考默认",
  thinkingDefault_help: "思考默认配置",

  // Thinking effort levels
  low: "低",
  medium: "中",
  high: "高",
  xhigh: "极高",

  // UI settings
  timeFormat_help: "时间格式配置",
  timeoutSeconds_help: "超时秒数配置",
  typingIntervalSeconds_help: "输入状态间隔配置",
  typingMode_help: "输入状态模式配置",
  userTimezone_help: "用户时区配置",
  verboseDefault_help: "默认详细程度配置",
  Workspace_help: "工作区配置",

  // List/approvals
  list: "列表",
  List: "列表",
  list_help: "列表配置",
  approvals: "审批",
  Approvals: "审批",
  approvals_help: "审批配置",
  exec_help: "执行配置",
  agentFilter: "智能体过滤器",
  "Agent Filter": "智能体过滤器",
  agentFilter_help: "智能体过滤器配置",
  both: "两者",
  sessionFilter_help: "会话过滤器配置",
  targets_help: "目标配置",
  cooldowns: "冷却时间",
  Cooldowns: "冷却时间",
  cooldowns_help: "冷却时间配置",

  // Billing & Auth
  "Billing Backoff Overrides_help": "账单退避覆盖配置",
  "Auth Profile Order_help": "认证配置顺序配置",
  "Auth Profiles_help": "认证配置文件配置",
  broadcast_help: "广播配置",
  strategy_help: "策略配置",

  // Canvas host
  canvasHost_help: "Canvas 主机配置",
  liveReload_help: "热重载配置",
  root_help: "根目录配置",

  // Shell env
  shellEnv_help: "Shell 环境配置",
  vars: "变量",
  Vars: "变量",
  vars_help: "变量配置",

  // Media
  media_help: "媒体配置",
  preserveFilenames_help: "保留文件名配置",

  // Memory backend
  Memory_help: "内存配置",
  "Memory Backend_help": "内存后端配置",
  "Memory Citations Mode_help": "内存引用模式配置",

  // QMD settings
  qmd_help: "QMD 配置",
  "QMD Binary_help": "QMD 二进制配置",
  "QMD Include Default Memory_help": "包含默认内存配置",
  limits: "限制",
  Limits: "限制",
  limits_help: "限制配置",
  "QMD Max Injected Chars_help": "QMD 最大注入字符数配置",
  "QMD Max Results_help": "QMD 最大结果数配置",
  "QMD Max Snippet Chars_help": "QMD 最大片段字符数配置",
  "QMD Search Timeout (ms)_help": "QMD 搜索超时配置",
  "QMD Extra Paths_help": "QMD 额外路径配置",
  "QMD Surface Scope_help": "QMD 作用范围配置",
  Default: "默认",
  default_help: "默认配置",
  rules: "规则",
  Rules: "规则",
  rules_help: "规则配置",
  "QMD Session Indexing_help": "QMD 会话索引配置",
  "QMD Session Export Directory_help": "QMD 会话导出目录配置",
  "QMD Session Retention (days)_help": "QMD 会话保留天数配置",
  update_help: "更新配置",
  "QMD Command Timeout (ms)_help": "QMD 命令超时配置",
  "QMD Update Debounce (ms)_help": "QMD 更新防抖配置",
  "QMD Embed Interval_help": "QMD 嵌入间隔配置",
  "QMD Embed Timeout (ms)_help": "QMD 嵌入超时配置",
  "QMD Update Interval_help": "QMD 更新间隔配置",
  "QMD Update on Startup_help": "启动时更新 QMD 配置",
  "QMD Update Timeout (ms)_help": "QMD 更新超时配置",
  "QMD Wait for Boot Sync_help": "等待启动同步配置",

  // Meta & Config
  meta: "元数据",
  Meta: "元数据",
  meta_help: "元数据配置",
  "Config Last Touched At_help": "配置最后修改时间配置",
  "Config Last Touched Version_help": "配置最后修改版本配置",
  Tools_help: "工具配置",

  // Agent to agent
  agentToAgent_help: "智能体对智能体配置",
  "Tool Allowlist Additions_help": "工具允许列表添加配置",
  "Tool Policy by Provider_help": "按提供商的工具策略配置",
  elevated_help: "提升权限配置",

  // Allow from
  allowFrom: "允许来源",
  "Allow From": "允许来源",
  allowFrom_help: "允许来源配置",

  // Apply patch
  applyPatch_help: "应用补丁配置",
  "apply_patch 模型允许列表": "应用补丁模型允许列表",
  "apply_patch Model Allowlist_help": "应用补丁模型允许列表配置",
  "Enable apply_patch_help": "启用应用补丁配置",

  // Exec settings
  "Exec Ask_help": "执行询问配置",
  "on-miss": "未命中时",
  backgroundMs_help: "后台超时配置",
  cleanupMs_help: "清理超时配置",
  "Exec Host_help": "执行主机配置",
  node: "节点",
  "Exec Node Binding_help": "执行节点绑定配置",
  "Exec Notify On Exit_help": "退出时通知执行配置",
  "Exec PATH Prepend_help": "执行路径前置配置",
  "Exec Safe Bins_help": "执行安全二进制配置",
  "Exec Security_help": "执行安全配置",
  allowlist: "允许列表",
  timeoutSec_help: "超时秒数配置",

  // Link understanding
  links_help: "链接配置",
  "Enable Link Understanding_help": "启用链接理解配置",
  "Link Understanding Max Links_help": "链接理解最大链接数配置",
  "Link Understanding Models_help": "链接理解模型配置",
  "Link Understanding Scope_help": "链接理解范围配置",
  "Link Understanding Timeout (sec)_help": "链接理解超时配置",

  // Audio understanding
  audio_help: "音频配置",
  "Audio Understanding Attachment Policy_help": "音频理解附件策略配置",
  maxAttachments_help: "最大附件数配置",
  first: "第一个",
  prefer: "偏好",
  prefer_help: "偏好配置",
  last: "最后一个",

  // Audio providers
  "基础 URL": "基础 URL",
  baseUrl_help: "基础 URL 配置",
  deepgram_help: "Deepgram 配置",
  detectLanguage_help: "检测语言配置",
  punctuate_help: "标点配置",
  smartFormat_help: "智能格式配置",
  "Enable Audio Understanding_help": "启用音频理解配置",
  headers_help: "请求头配置",
  "Audio Understanding Language_help": "音频理解语言配置",
  "Audio Understanding Max Bytes_help": "音频理解最大字节数配置",
  "Audio Understanding Max Chars_help": "音频理解最大字符数配置",
  "Audio Understanding Models_help": "音频理解模型配置",
  "Audio Understanding Prompt_help": "音频理解提示词配置",
  providerOptions_help: "提供商选项配置",
  "Audio Understanding Scope_help": "音频理解范围配置",
  "Audio Understanding Timeout (sec)_help": "音频理解超时配置",
  "Media Understanding Concurrency_help": "媒体理解并发数配置",

  // Image understanding
  "Image Understanding Attachment Policy_help": "图片理解附件策略配置",
  "Enable Image Understanding_help": "启用图片理解配置",
  language_help: "语言配置",
  "Image Understanding Max Bytes_help": "图片理解最大字节数配置",
  "Image Understanding Max Chars_help": "图片理解最大字符数配置",
  "Image Understanding Models_help": "图片理解模型配置",
  "Image Understanding Prompt_help": "图片理解提示词配置",
  "Image Understanding Scope_help": "图片理解范围配置",
  "Image Understanding Timeout (sec)_help": "图片理解超时配置",
  "Media Understanding Shared Models_help": "媒体理解共享模型配置",

  // Video understanding
  video_help: "视频配置",
  "Video Understanding Attachment Policy_help": "视频理解附件策略配置",
  "Enable Video Understanding_help": "启用视频理解配置",
  "Video Understanding Max Bytes_help": "视频理解最大字节数配置",
  "Video Understanding Max Chars_help": "视频理解最大字符数配置",
  "Video Understanding Models_help": "视频理解模型配置",
  "Video Understanding Prompt_help": "视频理解提示词配置",
  "Video Understanding Scope_help": "视频理解范围配置",
  "Video Understanding Timeout (sec)_help": "视频理解超时配置",

  // Cross context
  message_help: "消息配置",
  "Allow Cross-Context Messaging_help": "允许跨上下文消息配置",
  crossContext_help: "跨上下文配置",
  "Allow Cross-Context (Across Providers)_help": "允许跨上下文（跨提供商）配置",
  "Allow Cross-Context (Same Provider)_help": "允许跨上下文（相同提供商）配置",
  marker_help: "标记配置",
  "Cross-Context Marker_help": "跨上下文标记配置",
  "Cross-Context Marker Prefix_help": "跨上下文标记前缀配置",
  "Cross-Context Marker Suffix_help": "跨上下文标记后缀配置",

  // Web search
  "Web Search Max Results_help": "Web 搜索最大结果数配置",
  perplexity_help: "Perplexity 配置",
  "API 密钥": "API 密钥",
  apiKey_help: "API 密钥配置",
  "Web Search Provider_help": "Web 搜索提供商配置",
  brave: "Brave",
  "Web Search Timeout (sec)_help": "Web 搜索超时配置",

  // Webchat
  heartbeatSeconds_help: "心跳间隔配置",
  reconnect_help: "重连配置",
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
