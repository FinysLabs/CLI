import { Command } from "commander";
import fs from "fs";
import path from "path";
import { FinysAgentConfig, PriceTrigger, ActionSwap } from "../../types/agent";
import log from "../utils/logger";

const program = new Command("run")
  .description("Simulate an agent by ID")
  .argument("<agentId>", "Name of the agent (without .json)")
  .action(async (agentId: string) => {
    const file = path.resolve(process.cwd(), "agents", `${agentId}.json`);
    if (!fs.existsSync(file)) {
      return log.error(`Agent config not found: ${file}`);
    }

    const raw = fs.readFileSync(file, "utf-8");
    const cfg: FinysAgentConfig = JSON.parse(raw);
    log.info(`Running agent "${cfg.name}" on chain ${cfg.chain}`);

    // MOCK: static prices
    const prices: Record<string, number> = { ETH: 3200, USDC: 1 };

    const trig = cfg.trigger as PriceTrigger;
    const current = prices[trig.asset];
    log.info(`Price[${trig.asset}]: ${current}`);

    const ok =
      trig.operator === ">"
        ? current > trig.threshold
        : current < trig.threshold;

    if (!ok) {
      return log.info(
        `Trigger not met: ${trig.asset} ${trig.operator} ${trig.threshold} (current: ${current})`
      );
    }

    const act = cfg.action as ActionSwap;
    log.info(`Action: swapping ${act.amount} ${act.from} → ${act.to}`);
    await new Promise((r) => setTimeout(r, 500));
    log.success(`Swapped ${act.amount} ${act.from} → ${act.to}`);
  });

export default program;
