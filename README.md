Finys CLI – Agent Framework for Financial Automation The Finys CLI is the official developer toolkit for building secure financial automation agents using the Finys Protocol. It enables users to define, simulate, and eventually deploy on-chain and off-chain financial logic—such as rebalancing crypto, executing swaps, or monitoring market triggers—using a simple command line interface.

This CLI serves as the foundation for creating personalized financial agents that can run locally, on cloud, or in decentralized compute environments.


Architecture & Flow The Finys CLI is structured for agent-based automation. Agents use a config file that defines:

-Chain and wallet
-Trigger condition (e.g. ETH price > 3000)
-Action logic (e.g. swap ETH to USDC)
-Execution is simulated locally via finys run, and real-time execution will be supported in production via live data sources and smart contract integrations.
-Features Simple Agent Config: JSON-based setup for automation logic.
-Triggers & Actions: Define price, time, or custom triggers with swap or notify actions.
-Agent Scaffolding: Quickly create agents with finys create.
-Local Simulation: Run agent logic and simulate decisions with mock price data.
-Chain-Aware: Specify wallet and chain per agent (ETH, BASE, SOL coming).
-Modular Structure: Extend CLI logic using your own modules or API adapters.
-Developer Friendly: TypeScript-based, easy to build and extend.






Quick Start

Clone & Install bash
git clone https://github.com/FinysLabs/CLI.git cd CLI npm install

Build the CLI bash
npm run build


Link the CLI (for local global access) bash
npm link Now you can run finys from any terminal window.



Usage Initialize project bash

finys init This creates a .finysconfig.json file with project metadata.

Create a new agent bash

finys create price-checker Creates agents/price-checker.ts with boilerplate logic.

Run agent simulation bash

finys run eth-check Runs agents/eth-check.json and simulates logic with mock price feed.

Agent Config Example json

{ "id": "eth-check", "name": "ETH Price Checker", "chain": "eth", "wallet": "0xYourWallet", "trigger": { "type": "price-check", "asset": "ETH", "operator": ">", "threshold": 3000 }, "action": { "type": "swap", "from": "ETH", "to": "USDC", "amount": 0.1 } }

Core Components src/index.ts – CLI entrypoint

src/commands/init.ts – Initializes project config

src/commands/create.ts – Creates new agents

src/commands/run.ts – Simulates agents with mock data

types/agent.ts – Type definitions for triggers and actions

agents/*.json – JSON-defined agent automation rules

NPM Package Info json

"bin": { "finys": "dist/index.js" } After npm link, this lets users run finys globally.



Coming Soon ✅ Live price feeds

✅ Swap execution support via Uniswap or 0x

✅ Time-based and composite triggers

✅ Smart contract backend for verified automation
