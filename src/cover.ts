//done
import { Aenergy, ComponentIdRequest, Temperature } from './common.js';

export interface CoverGetStatusResponse {
  id: number;
  source: string;
  state: string;
  apower: number;
  voltage: number;
  current: number;
  pf: number;
  freq: number;
  aenergy: Aenergy;
  temperature: Temperature;
  pos_control: boolean;
  last_direction: string;
  current_pos: number;
}
export type CoverGetConfigResponse = CoverConfig;

export interface CoverSetConfigRequest {
  id: number;
  config: Partial<CoverConfig>;
}

export interface CoverConfig {
  id: number;
  name: string;
  motor: Motor;
  maxtime_open: number;
  maxtime_close: number;
  initial_state: string;
  invert_directions: boolean;
  in_mode: string;
  swap_inputs: boolean;
  safety_switch: Safetyswitch;
  power_limit: number;
  voltage_limit: number;
  undervoltage_limit: number;
  current_limit: number;
  obstruction_detection: Obstructiondetection;
  slat: SlatConfig;
}

export interface SlatConfig {
  enable: boolean;
  open_time: number;
  close_time: number;
  step: number;
  retain_pos: boolean;
  precise_ctl: boolean;
}

export interface Obstructiondetection {
  enable: boolean;
  direction: string;
  action: string;
  power_thr: number;
  holdoff: number;
}

export interface Safetyswitch {
  enable: boolean;
  direction: string;
  action: string;
  allowed_move: null;
}

export interface Motor {
  idle_power_thr: number;
  idle_confirm_period: number;
}

export type SwitchMoveRequest = ComponentIdRequest & {
  duration?: number;
};

export type SwitchGotoPositionRequest = {
  pos?: number;
  rel?: number;
};
