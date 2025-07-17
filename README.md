# FINYS CLI

Finys CLI is the official developer toolkit for building secure financial automation agents using the Finys Protocol. It enables users to define, simulate, and eventually deploy on-chain and off-chain financial logic — such as rebalancing crypto, executing swaps, or monitoring market triggers — using a single command-line interface.

This CLI serves as the foundation for creating personalized financial agents that can run locally, on cloud, or in decentralized compute environments.

---

## 🔁 ARCHITECTURE & FLOW

The Finys CLI is structured for agent-based automation. Each agent uses a config file that defines:

- **Chain and wallet**
- **Trigger condition** (e.g. ETH price > 3000)
- **Action logic** (e.g. swap ETH to USDC)
- **Execution** is simulated locally via `finys run`, and real-time execution will be supported in production
- **Triggers & Actions**: Supports price, time, and custom triggers with swap or notify actions
- **Agent Scaffolding**: Quickly create agents with `finys create`
- **Local Simulation**: Simulate decisions with mock price feed
- **Chain-Aware**: Specify wallet and chain per agent (ETH, BASE, SOL coming)
- **Modular Structure**: Extend CLI with your own modules or adapters
- **Developer Friendly**: TypeScript-based, easy to build and extend

---

## ⚡ QUICK START

### 🔹 Clone & Install

```bash
git clone https://github.com/FinysLabs/CLI.git
cd CLI
npm install


### 🔹 Build the CLI

```bash
npm run build


