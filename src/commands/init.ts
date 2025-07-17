import { Command } from "commander";
import fs from "fs";
import path from "path";

const program = new Command("init")
  .description("Initialize Finys config")
  .action(() => {
    const configPath = path.resolve(process.cwd(), ".finysconfig.json");

    if (fs.existsSync(configPath)) {
      console.log("⚠️  .finysconfig.json already exists.");
      return;
    }

    const defaultConfig = {
      name: "my-finys-agent",
      wallet: "0xYourWalletAddress",
      chain: "eth"
    };

    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log("✅ Created .finysconfig.json");
  });

export default program;
