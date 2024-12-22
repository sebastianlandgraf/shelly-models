export interface InputGetStatusResponse {
  id: number;
  state: boolean;
}

export type InputGetConfigResponse = InputConfig;

export interface InputSetConfigRequest {
  id: number;
  config: Partial<InputConfig>;
}

export interface InputConfig {
  id: number;
  name: null;
  type: string;
  enable: boolean;
  invert: boolean;
  factory_reset: boolean;
}
