import { Command } from "commander";
import fs from "fs";
import path from "path";

const program = new Command("create")
  .description("Create a new Finys agent")
  .argument("[agentName]", "Name of the agent")
  .action((agentName?: string) => {
    const configPath = path.resolve(process.cwd(), ".finysconfig.json");
    if (!fs.existsSync(configPath)) {
      console.error("❌ No .finysconfig.json found. Run `finys init` first.");
      process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    let baseName = agentName || config.name || "my-finys-agent";
    baseName = baseName.replace(/(\.ts|\.json)$/, "");

    const agentsDir = path.resolve(process.cwd(), "agents");
    if (!fs.existsSync(agentsDir)) {
      fs.mkdirSync(agentsDir);
    }

    const fileName = `${baseName}.ts`;
    const filePath = path.join(agentsDir, fileName);
    if (fs.existsSync(filePath)) {
      console.error(`❌ Agent file already exists: agents/${fileName}`);
      return;
    }

    const template = `import { AgentContext } from '../../types';

export default async function ${baseName.replace(/-|\s/g, '_')}(context: AgentContext) {
  // TODO: implement your agent logic here
  console.log('Agent "${baseName}" running with context:', context);
}
`;

    fs.writeFileSync(filePath, template);
    console.log(`🎉 Created new agent template: agents/${fileName}`);
  });

export default program;
