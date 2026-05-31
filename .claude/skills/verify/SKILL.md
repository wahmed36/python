---
name: verify
description: Start the Node.js server, exercise key routes or functionality, confirm the change works, and report findings. Use after implementing a feature or fix to validate it before marking done.
disable-model-invocation: false
---

## Verify Skill

When invoked, verify that recent changes work correctly in the running app:

1. **Check for a start command** — look at `package.json` for the dev/start script (e.g., `npm run dev`, `npm start`). If none exists yet, note it and skip to step 4.

2. **Start the server** — run the dev server in the background. Wait for it to be ready (watch for a "listening on port" log line or similar).

3. **Exercise the change** — make HTTP requests or run the relevant code path. Focus on:
   - The golden path for the new/changed feature
   - Any edge cases that could regress
   - A quick check that adjacent routes still respond correctly

4. **Run tests** — run `npm test` (or whatever test script is configured). Report pass/fail counts.

5. **Shut down** — stop the background server.

6. **Report** — one short paragraph: what was tested, what passed, anything unexpected. If something failed, describe the failure clearly so it can be fixed before the change is considered done.

If $ARGUMENTS is provided, treat it as a specific endpoint or scenario to focus on.
