import { Aenergy } from './common';

export interface PmGetStatusResponse {
  id: number;
  freq: number;
  aenergy: Aenergy;
  ret_aenergy: Aenergy;
  apower: number;
  current: number;
  voltage: number;
}



interface PmConfig {
  id: number;
  name: string;
  reverse:boolean;
}

export interface PmSetConfigRequest {
  id: number;
  config: Partial<PmConfig>;
}

export type PmGetConfigResponse = PmConfig;
