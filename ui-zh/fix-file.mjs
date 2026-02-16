import { readFileSync, writeFileSync } from "fs";

const filePath = "c:/Users/chuan/Desktop/AiCode/openclaw/ui-zh/src/ui/views/config-form.shared.ts";
const content = readFileSync(filePath, "utf-8");

// Find the start of the bad block
const startMarker = '  "Identity Avatar": "身份头像",';
const startIdx = content.indexOf(startMarker);

// Find the end of the bad block
const endMarker = '"Voice Wake": "语音唤醒",};';
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  // We want to keep everything before startMarker (but verify preceding newline)
  // and replace the whole block with "};"

  // Check if there's a newline before startMarker
  // The previous line is empty (line 993)

  // We want to replace from startIdx up to endIdx + endMarker.length

  const before = content.substring(0, startIdx);
  const after = content.substring(endIdx + endMarker.length);

  // The original file had "};" on a new line.
  // My script appended lines and the last line merged with "};"
  // So we should put "};" back.

  const newContent = before + "};" + after;

  writeFileSync(filePath, newContent, "utf-8");
  console.log("Fixed file successfully.");
} else {
  console.error("Could not find markers to fix file.");
  if (startIdx === -1) {
    console.error("Start marker not found");
  }
  if (endIdx === -1) {
    console.error("End marker not found");
  }
}
