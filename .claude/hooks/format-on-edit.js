// Runs as a Claude Code PostToolUse hook on Write|Edit events.
// Reads the hook payload from stdin, extracts the file path, and runs Prettier
// if the file is a JS/TS source file.
let data = '';
process.stdin.on('data', chunk => (data += chunk));
process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(data);
    const filePath = (payload.tool_input || {}).file_path || '';
    if (/\.(js|ts|jsx|tsx)$/.test(filePath)) {
      require('child_process').execSync(
        `npx --yes prettier --write "${filePath.replace(/"/g, '\\"')}"`,
        { stdio: 'inherit', shell: true }
      );
    }
  } catch (_) {
    // Silently ignore — hooks must not block Claude on formatter errors
  }
});
