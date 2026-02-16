#!/bin/bash

# OpenClaw 一键启动脚本 (macOS)
# 功能：启动 Gateway + 中文版 UI 开发服务器

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPENCLAW_DIR="$SCRIPT_DIR/openclaw"
UI_ZH_DIR="$SCRIPT_DIR/openclaw/ui-zh"

# 添加 Homebrew 到 PATH
export PATH="/opt/homebrew/bin:$PATH"

# 定义命令路径
NODE="/opt/homebrew/bin/node"
NPM="/opt/homebrew/bin/npm"

echo "🚀 启动 OpenClaw..."

# 检查目录
if [ ! -d "$OPENCLAW_DIR" ]; then
    echo "❌ 错误：未找到 openclaw 目录"
    exit 1
fi

if [ ! -d "$UI_ZH_DIR" ]; then
    echo "❌ 错误：未找到 ui-zh 目录"
    exit 1
fi

# 检查 node_modules (如果不存在才安装)
if [ ! -d "$OPENCLAW_DIR/node_modules" ]; then
    echo "📦 正在安装 openclaw 依赖..."
    cd "$OPENCLAW_DIR" && $NPM install
fi

if [ ! -d "$UI_ZH_DIR/node_modules" ]; then
    echo "📦 正在安装 ui-zh 依赖..."
    cd "$UI_ZH_DIR" && $NPM install
fi

# 检查是否已配置（使用默认目录）
if [ ! -f "$HOME/.openclaw/openclaw.json" ]; then
    echo ""
    echo "=========================================="
    echo "⚙️  首次启动，请先配置 OpenClaw"
    echo "=========================================="
    echo ""
    cd "$OPENCLAW_DIR"
    $NODE dist/index.js configure
    echo ""
    echo "配置完成！按回车继续启动..."
    read
fi

echo "🔪 停止可能存在的旧 Gateway 进程..."
# 停止可能存在的旧 Gateway
lsof -ti:18789 2>/dev/null | xargs kill -9 2>/dev/null || true
pkill -f "node.*gateway" 2>/dev/null || true
sleep 1

# 重新编译代码（确保包含最新修复）
echo "📦 编译最新代码..."
cd "$OPENCLAW_DIR"
/opt/homebrew/bin/pnpm run build > /dev/null 2>&1

# 启动 Gateway (后台运行)
echo "🔌 启动 Gateway (端口 18789)..."
cd "$OPENCLAW_DIR"
$NODE dist/index.js gateway --port 18789 --token ef322237587947ef98eb85fe23e5ab37 &
GATEWAY_PID=$!
echo "✅ Gateway 已启动 (PID: $GATEWAY_PID)"

# 等待 Gateway 启动
sleep 3

# 启动 ui-zh 开发服务器 (后台运行)
echo "🌐 启动中文版 UI (端口 19002)..."
cd "$UI_ZH_DIR"
$NPM run dev &
UI_PID=$!
echo "✅ UI 已启动 (PID: $UI_PID)"

echo ""
echo "=========================================="
echo "🎉 启动完成！"
echo "   中文版 UI: http://localhost:19002#token=ef322237587947ef98eb85fe23e5ab37"
echo "   Token: ef322237587947ef98eb85fe23e5ab37"
echo "=========================================="
echo ""

# 自动打开浏览器（带 token）
open "http://localhost:19002#token=ef322237587947ef98eb85fe23e5ab37"

echo "按 Ctrl+C 停止所有服务"

# 捕获 Ctrl+C 并停止所有服务
cleanup() {
    echo ""
    echo "🛑 停止服务..."
    kill $GATEWAY_PID 2>/dev/null
    kill $UI_PID 2>/dev/null
    echo "✅ 已停止"
    exit 0
}

trap cleanup SIGINT SIGTERM

# 等待
wait
