FINYSLABS CLI

The Finys CLI is the official developer toolkit for building secure financial automation agents using the Finys Protocol. It enables users to define, simulate, and eventually deploy on-chain and off-chain financial logic — such as rebalancing crypto, executing swaps, or monitoring market triggers — using a single command line interface.


-------------------------------------------------------------------------------------------------

ARCHITECTURE OVERVIEW

The CLI is structured for agent-based automation. Each agent is defined by a config file specifying:

-Chain and Wallet (e.g., Ethereum, Base, Solana coming soon)

-Trigger Condition (e.g., ETH price > 3000)

-Action Logic (e.g., swap ETH to USDC)

-Simulation Mode: Local mock evaluation (live execution coming soon)


-------------------------------------------------------------------------------------------------

Clone & Install

git clone https://github.com/FinysLabs/CLI.git
cd CLI
npm install

- Build the CLI

npm run build



- Link the CLI (for global access)

npm link

You can now run finys from any terminal window.


USAGE

- Initialize a project

finys init

This creates a .finysconfig.json file with project metadata.

- Create a new agent

finys create price-checker

This generates agents/price-checker.ts with boilerplate logic.

- Run an agent simulation

finys run eth-check

Simulates logic in agents/eth-check.json using mock price feeds.

-------------------------------------------------------------------------------------------------

SAMPLE AGENT CONFIG
{
  "id": "eth-check",
  "name": "ETH Price Checker",
  "chain": "eth",
  "wallet": "0xYourWallet",
  "trigger": {
    "type": "price-check",
    "asset": "ETH",
    "operator": ">",
    "threshold": 3000
  },
  "action": {
    "type": "swap",
    "from": "ETH",
    "to": "USDC",
    "amount": 0.1
  }
}

-------------------------------------------------------------------------------------------------

FEATURES

✅ Agent Scaffolding – Create new agents in seconds

✅ Local Simulations – Test logic with mock market data

✅ JSON-based Configs – Simple and portable logic format

✅ Chain Support – Ethereum, Base, and Solana (upcoming)

✅ Custom Actions – Extendable swap, notify, rebalance actions


-------------------------------------------------------------------------------------------------


MIT © 2025 Finys Labs
