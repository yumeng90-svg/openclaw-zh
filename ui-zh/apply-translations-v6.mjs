import { readFileSync, writeFileSync } from "fs";

const translations = {
  // Context trimming settings
  "cache-ttl": "缓存 TTL",
  softTrim: "软修剪",
  "Soft Trim": "软修剪",
  softTrim_help: "是否启用软修剪功能",
  headChars: "头部字符数",
  "Head Chars": "头部字符数",
  headChars_help: "保留消息头部的最大字符数",
  tailChars: "尾部字符数",
  "Tail Chars": "尾部字符数",
  tailChars_help: "保留消息尾部的最大字符数",
  softTrimRatio: "软修剪比例",
  "Soft Trim Ratio": "软修剪比例",
  softTrimRatio_help: "软修剪时保留消息中间部分的比例",

  // Params and model providers
  params_help: "模型参数配置",
  "minimax:default": "Minimax:默认",
  "Minimax:default": "Minimax:默认",
  "minimax:default_help": "Minimax 默认配置",
  email: "邮箱",
  Email: "邮箱",
  email_help: "邮箱认证配置",
  api_key: "API 密钥",
  oauth: "OAuth",
  minimax: "Minimax",
  Minimax: "Minimax",
  minimax_help: "Minimax 提供商配置",
  api: "API",
  Api: "API",
  api_help: "API 配置",
  "openai-completions": "OpenAI 补全",
  "openai-responses": "OpenAI 响应",
  "anthropic-messages": "Anthropic 消息",
  "google-generative-ai": "Google 生成式 AI",
  "github-copilot": "GitHub Copilot",
  "bedrock-converse-stream": "Bedrock 对话流",
  "api-key": "API 密钥",
  "aws-sdk": "AWS SDK",
  authHeader: "认证请求头",
  "Auth Header": "认证请求头",
  authHeader_help: "自定义认证请求头配置",
  models_help: "模型配置",
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
