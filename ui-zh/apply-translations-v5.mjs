config-form.shared.ts:1649 [缺翻译] 原文: "extraDirs_help"
config-form.shared.ts:1649 [缺翻译] 原文: "mappings"
config-form.shared.ts:1649 [缺翻译] 原文: "Mappings"
config-form.shared.ts:1649 [缺翻译] 原文: "mappings_help"
config-form.shared.ts:1649 [缺翻译] 原文: "presets"
config-form.shared.ts:1649 [缺翻译] 原文: "Presets"
config-form.shared.ts:1649 [缺翻译] 原文: "presets_help"import { readFileSync, writeFileSync } from 'fs';

const translations = {
    "Block Streaming Break": "块流中断",
    "blockStreamingBreak": "块流中断",
    "Block Streaming Chunk": "块流分块",
    "blockStreamingChunk": "块流分块",
    "newline": "换行",
    "sentence": "句子",
    "minChars": "最小字符数",
    "Min Chars": "最小字符数",
    "minChars_help": "最小字符数设置",
    "Block Streaming Coalesce": "块流合并",
    "blockStreamingCoalesce": "块流合并",
    "blockStreamingCoalesce_help": "块流合并设置",
    // Handle the case where Chinese is used as a key (bug in frontend)
    "中断偏好": "中断偏好"
};

const translationPath = 'c:/Users/chuan/Desktop/AiCode/openclaw/ui-zh/src/ui/views/config-form.shared.ts';
const content = readFileSync(translationPath, 'utf-8');

const endMarker = '};\n\nconst MISSING_KEYS';

const endIdx = content.indexOf(endMarker);
if (endIdx === -1) {
    console.error('Could not find end marker');
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
    const newContent = before + '\n' + newLines.join('\n') + after;
    writeFileSync(translationPath, newContent, 'utf-8');
    console.log(`Added ${newLines.length} new translations.`);
} else {
    console.log('No new translations to add.');
}
