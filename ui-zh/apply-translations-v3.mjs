import { readFileSync, writeFileSync } from "fs";

const translations = {
  0: "第 1 项",
  "0_help": "列表中的第 1 项",
  1: "第 2 项",
  "1_help": "列表中的第 2 项",
  2: "第 3 项",
  "2_help": "列表中的第 3 项",
  3: "第 4 项",
  "3_help": "列表中的第 4 项",
  4: "第 5 项",
  "4_help": "列表中的第 5 项",
  5: "第 6 项",
  "5_help": "列表中的第 6 项",
  compat: "兼容性",
  compat_help: "兼容性设置",
  maxTokensField: "最大 Token 字段",
  "Max Tokens Field": "最大 Token 字段",
  maxTokensField_help: "用于指定最大 Token 数的字段名",
  max_completion_tokens: "最大补全 Token",
  max_tokens: "最大 Token",
  supportsDeveloperRole: "支持开发者角色",
  "Supports Developer Role": "支持开发者角色",
  supportsDeveloperRole_help: "模型是否支持开发者角色",
  supportsReasoningEffort: "支持推理工作量",
  "Supports Reasoning Effort": "支持推理工作量",
  supportsReasoningEffort_help: "模型是否支持推理工作量参数",
  supportsStore: "支持存储",
  "Supports Store": "支持存储",
  supportsStore_help: "模型是否支持存储功能",
  contextWindow: "上下文窗口",
  "Context Window": "上下文窗口",
  contextWindow_help: "模型的上下文窗口大小",
  cost: "成本",
  Cost: "成本",
  cost_help: "模型调用成本",
  cacheRead: "缓存读取",
  "Cache Read": "缓存读取",
  cacheRead_help: "缓存读取成本",
  cacheWrite: "缓存写入",
  "Cache Write": "缓存写入",
  cacheWrite_help: "缓存写入成本",
  input: "输入",
  Input: "输入",
  input_help: "输入成本",
  output: "输出",
  Output: "输出",
  output_help: "输出成本",
  id: "ID",
  Id: "ID",
  id_help: "唯一标识符",
  name: "名称",
  Name: "名称",
  name_help: "显示名称",
  reasoning: "推理",
  Reasoning: "推理",
  reasoning_help: "推理成本",
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
