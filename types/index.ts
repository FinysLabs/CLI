export interface AgentContext {
    // Contents of .finysconfig.json
    config: {
      name: string;
      version: string;
      description: string;
      wallet: string;
      triggers: any[];
      actions: any[];
      [key: string]: any;
    };
    // Example runtime properties (you can expand later)
    walletBalance: number;
    prices: Record<string, number>;
  }
  