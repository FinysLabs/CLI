export interface AgentContext {
    config: {
        name: string;
        version: string;
        description: string;
        wallet: string;
        triggers: any[];
        actions: any[];
        [key: string]: any;
    };
    walletBalance: number;
    prices: Record<string, number>;
}
