import { Temperature } from './common.js';

export type SwitchGetConfigResponse = SwitchConfig;

export interface SwitchSetConfigRequest {
  id: number;
  config: Partial<SwitchConfig>;
}
export interface SwitchConfig {
  id: number;
  name: string | null;
  in_mode: 'momentary' | 'follow' | 'flip' | 'detached';
  initial_state: 'off' | 'on' | 'restore_last' | 'match_input';
  auto_on: boolean;
  auto_on_delay: number;
  auto_off: boolean;
  auto_off_delay: number;
  input_id: number;
  power_limit?: number | null;
  voltage_limit?: number | null;
  current_limit?: number | null;
}

export interface SwitchGetStatusResponse {
  id: number;
  output: boolean;
  source: string;
  temperature: Temperature;
}

export interface SwitchSetResponse {
  was_on: boolean;
}

export interface SwitchSetRequest {
  id: number;
  on: boolean;
  toggle_after?: number;
}
