export type Chain = "eth" | "base" | "solana";

export interface PriceTrigger {
  type: "price-check";
  asset: string;
  operator: ">" | "<";
  threshold: number;
}

export interface ActionSwap {
  type: "swap";
  from: string;
  to: string;
  amount: number;
}

export type Trigger = PriceTrigger;
export type Action  = ActionSwap;

export interface FinysAgentConfig {
  id: string;
  name: string;
  chain: Chain;
  wallet: string;
  trigger: Trigger;
  action: Action;
}
