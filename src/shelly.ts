import { BleGetConfigResponse, BleGetStatusResponse } from './ble.js';
import { CloudGetConfigResponse, CloudGetStatusResponse } from './cloud.js';
import { CoverGetConfigResponse, CoverGetStatusResponse } from './cover.js';
import { EthGetConfigResponse, EthGetStatusResponse } from './eth.js';
import { InputGetConfigResponse, InputGetStatusResponse } from './input.js';
import { KnxGetConfigResponse, KnxGetStatusResponse } from './knx.js';
import { LightGetConfigResponse, LightGetStatusResponse } from './light.js';
import { MqttGetConfigResponse, MqttGetStatusResponse } from './mqtt.js';
import { ScriptGetConfigResponse, ScriptGetStatusResponse } from './script.js';
import { SwitchGetConfigResponse, SwitchGetStatusResponse } from './switch.js';
import { SysGetConfigResponse, SysGetStatusResponse } from './sys.js';
import { WifiGetConfigResponse, WifiGetStatusResponse } from './wifi.js';
import { WsGetConfigResponse, WsGetStatusResponse } from './ws.js';

export interface ShellyGetStatusResponse {
  ble: BleGetStatusResponse;
  bthome: {
    errors: { [key: number]: string };
  };
  cloud: CloudGetStatusResponse;
  eth: EthGetStatusResponse;
  'cover:0'?: CoverGetStatusResponse;
  'input:0'?: InputGetStatusResponse;
  'input:1'?: InputGetStatusResponse;
  'input:2'?: InputGetStatusResponse;
  'input:3'?: InputGetStatusResponse;
  knx: KnxGetStatusResponse;
  'light:0'?: LightGetStatusResponse;
  'light:1'?: LightGetStatusResponse;
  mqtt: MqttGetStatusResponse;
  'switch:0'?: SwitchGetStatusResponse;
  'switch:1'?: SwitchGetStatusResponse;
  'switch:2'?: SwitchGetStatusResponse;
  'script:0'?: ScriptGetStatusResponse;
  'script:1'?: ScriptGetStatusResponse;
  'script:2'?: ScriptGetStatusResponse;
  'script:3'?: ScriptGetStatusResponse;
  'script:4'?: ScriptGetStatusResponse;
  'script:5'?: ScriptGetStatusResponse;
  'script:6'?: ScriptGetStatusResponse;
  'script:7'?: ScriptGetStatusResponse;
  'script:8'?: ScriptGetStatusResponse;
  'script:9'?: ScriptGetStatusResponse;
  sys: SysGetStatusResponse;
  wifi: WifiGetStatusResponse;
  ws: WsGetStatusResponse;
}

export interface ShellyListMethodsResponse {
  methods: string[];
}

export interface ShellyGetDeviceInfoResponse {
  name: null;
  id: string;
  mac: string;
  slot: number;
  model: string;
  gen: number;
  fw_id: string;
  ver: string;
  app: string;
  auth_en: boolean;
  auth_domain: null;
  profile: string;
}

export interface ShellyGetConfigResponse {
  ble: BleGetConfigResponse;
  bthome: KnxGetConfigResponse;
  cloud: CloudGetConfigResponse;
  'cover:0'?: CoverGetConfigResponse;
  eth: EthGetConfigResponse;
  'input:0'?: InputGetConfigResponse;
  'input:1'?: InputGetConfigResponse;
  'input:2'?: InputGetConfigResponse;
  'input:3'?: InputGetConfigResponse;
  knx: KnxGetConfigResponse;
  'light:0'?: LightGetConfigResponse;
  'light:1'?: LightGetConfigResponse;
  mqtt: MqttGetConfigResponse;
  'switch:0'?: SwitchGetConfigResponse;
  'switch:1'?: SwitchGetConfigResponse;
  'switch:2'?: SwitchGetConfigResponse;
  'script:1'?: ScriptGetConfigResponse;
  'script:2'?: ScriptGetConfigResponse;
  'script:3'?: ScriptGetConfigResponse;
  'script:4'?: ScriptGetConfigResponse;
  'script:5'?: ScriptGetConfigResponse;
  'script:6'?: ScriptGetConfigResponse;
  'script:7'?: ScriptGetConfigResponse;
  'script:8'?: ScriptGetConfigResponse;
  'script:9'?: ScriptGetConfigResponse;
  sys: SysGetConfigResponse;
  wifi: WifiGetConfigResponse;
  ws: WsGetConfigResponse;
}

export interface ShellyGetComponentsResponse {
  components: Component[];
  cfg_rev: number;
  offset: number;
  total: number;
}

export interface Component {
  key: string;
  status?:
    | CoverGetStatusResponse
    | InputGetStatusResponse
    | SwitchGetStatusResponse;
  config?:
    | CoverGetConfigResponse
    | InputGetConfigResponse
    | SwitchGetConfigResponse;
}

export interface ShellyListProfilesResponse {
  profiles: Profiles;
}

export interface Profiles {
  cover: components;
  switch: components;
}

export interface components {
  components: ProfileComponent[];
}

export interface ProfileComponent {
  type: string;
  count: number;
}

export interface ShellyCheckForUpdateResponse {
  beta?: Version;
  stable?: Version;
}

export interface Version {
  version: string;
  build_id: string;
}

export interface ShellyGetComponentsRequest {
  offset?: number;
  include?: ('config' | 'status')[];
  dynamic_only?: boolean;
}
