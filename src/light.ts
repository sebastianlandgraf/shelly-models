import { Aenergy, Temperature } from './common';

export interface LightGetStatusResponse {
  id: number;
  source: string;
  output: boolean;
  brightness: number;
  temperature: Temperature;
  aenergy: Aenergy;
  apower: number;
  current: number;
  voltage: number;
}

interface NightMode {
  enable: boolean;
  brightness: number;
}

interface ButtonDoublePush {
  brightness: number;
}

interface ButtonPresets {
  button_doublepush: ButtonDoublePush;
}

interface LightConfig {
  id: number;
  name: string;
  initial_state: string;
  auto_on: boolean;
  auto_on_delay: number;
  auto_off: boolean;
  auto_off_delay: number;
  transition_duration: number;
  min_brightness_on_toggle: number;
  night_mode: NightMode;
  button_fade_rate: number;
  button_presets: ButtonPresets;
  in_mode: string;
  current_limit: number;
  power_limit: number;
  undervoltage_limit: number;
  voltage_limit: number;
}

export interface LightSetConfigRequest {
  id: number;
  config: Partial<LightConfig>;
}

export type LightGetConfigResponse = LightConfig;
