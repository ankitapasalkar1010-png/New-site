# Annapurna Homemade Marketplace

## Mobile Testing on Local Network (WiFi)
This project uses Vite to provide a blazing-fast local development server with Live Reloading. It is configured to bind to all network interfaces (`host: "0.0.0.0"`).

**To test on your phone:**
1. Start the server using: `npm run dev -- --host`
2. Look for the `Network: http://192.168.x.x:5173/` URL printed in the terminal.
3. Open that URL on your phone (must be on the same WiFi network).

> **Important note for Windows users:**
> The first time you run this, Windows Defender Firewall may block Node.js from accepting incoming network connections. You MUST click "Allow access" on the Firewall prompt, or manually allow Node.js/Vite through your firewall for Private Networks. Otherwise, your phone will fail to connect and time out.
