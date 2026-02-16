import { readFileSync, writeFileSync } from "fs";

const translations = {
  "Local Embedding Model Path_help": "本地嵌入模型路径",
  "Local GGUF model path or hf: URI (node-llama-cpp).":
    "本地 GGUF 模型路径或 hf: URI (node-llama-cpp)。",
  "Memory Search Model": "内存搜索模型",
  "Memory Search Model_help": "用于内存搜索的模型",
  "Memory Search Provider": "内存搜索提供商",
  "Memory Search Vector Index": "内存搜索向量索引",
  "Memory Search Vector Index_help": "是否启用向量索引",
  "Enable sqlite-vec extension for vector search (default: true).":
    "启用 sqlite-vec 扩展以进行向量搜索（默认：开启）。",
  "Memory Search Vector Extension Path": "内存搜索向量扩展路径",
  extensionPath: "扩展路径",
  "Memory Search Vector Extension Path_help": "sqlite-vec 扩展库的路径",
  "Optional override path to sqlite-vec extension library (.dylib/.so/.dll).":
    "sqlite-vec 扩展库的可选覆盖路径 (.dylib/.so/.dll)。",
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
