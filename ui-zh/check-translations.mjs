import { readFileSync } from "fs";

// Paths
const schemaPath = "c:/Users/chuan/Desktop/AiCode/openclaw/src/config/schema.ts";
const translationPath =
  "c:/Users/chuan/Desktop/AiCode/openclaw/ui-zh/src/ui/views/config-form.shared.ts";

// Read files
const schemaContent = readFileSync(schemaPath, "utf-8");
const translationContent = readFileSync(translationPath, "utf-8");

// Extract source strings from schema.ts
// Looking for: "key": "Value String",
// We want "Value String"
const sourceStrings = new Set();
const sourceMap = new Map(); // normalized -> original

// Helper to extract strings from a specific object block
function extractFromBlock(content, blockName) {
  const blockStart = content.indexOf(`const ${blockName}: Record<string, string> = {`);
  if (blockStart === -1) {
    return;
  }

  let depth = 1;
  let idx = blockStart + `const ${blockName}: Record<string, string> = {`.length;
  let blockEnd = -1;

  while (depth > 0 && idx < content.length) {
    if (content[idx] === "{") {
      depth++;
    } else if (content[idx] === "}") {
      depth--;
    }
    idx++;
  }
  blockEnd = idx;

  const block = content.substring(blockStart, blockEnd);

  // Regex to capture values: "key": "value"
  // Note: This is a simple regex, might miss complex cases with escaped quotes
  const regex = /:\s*(['"])(.*?)\1,/g;
  let match;
  while ((match = regex.exec(block)) !== null) {
    const val = match[2];
    // Check if it's a string literal and not code
    if (!val.includes("${")) {
      sourceStrings.add(val);
      sourceMap.set(val.trim().toLowerCase(), val);
    }
  }
}

extractFromBlock(schemaContent, "FIELD_LABELS");
extractFromBlock(schemaContent, "FIELD_HELP");
extractFromBlock(schemaContent, "FIELD_PLACEHOLDERS"); // Maybe placehholders too?

// Also extract GROUP_LABELS
extractFromBlock(schemaContent, "GROUP_LABELS");

// Extract translation keys from config-form.shared.ts
const translationKeys = new Set();
const translationBlockStart = translationContent.indexOf(
  "const FIELD_TRANSLATIONS: Record<string, string> = {",
);
const translationBlockEnd = translationContent.indexOf("};\n\nexport function lookupTranslation");
const translationBlock = translationContent.substring(translationBlockStart, translationBlockEnd);

const transRegex = /"([^"]+)":\s*"/g;
let tMatch;
while ((tMatch = transRegex.exec(translationBlock)) !== null) {
  translationKeys.add(tMatch[1].trim().toLowerCase());
}

// Compare
const missing = [];
const nearMisses = [];

for (const source of sourceStrings) {
  const normalized = source.trim().toLowerCase();

  if (!translationKeys.has(normalized)) {
    // Check for near misses (e.g. punctuation differences)
    // Simple check: ignore punctuation and brackets
    const strippedSource = normalized.replace(/[[\]().,;:'"\s]/g, "");
    let foundNearMiss = false;

    for (const transKey of translationKeys) {
      const strippedTrans = transKey.replace(/[[\]().,;:'"\s]/g, "");
      if (strippedSource === strippedTrans && strippedSource.length > 5) {
        nearMisses.push({ source, match: transKey });
        foundNearMiss = true;
        break;
      }
    }

    if (!foundNearMiss) {
      missing.push(source);
    }
  }
}

console.log("--- Missing Translations (Total: " + missing.length + ") ---");
missing.forEach((s) => console.log(`MISSING: "${s}"`));

console.log("\n--- Near Misses (Possible Punctuation Mismatch) ---");
nearMisses.forEach((m) => console.log(`SOURCE: "${m.source}"\nMATCH?: "${m.match}"\n`));
