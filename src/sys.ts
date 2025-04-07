import { EmptyObject } from './common.js';

export interface SysDevice {
  name: string;
  mac: string;
  fw_id: string;
  discoverable: boolean;
  eco_mode: boolean;
  profile?: 'cover' | 'switch' | undefined;
  addon_type: string | null;
  sys_btn_toggle: boolean;
}

export interface SysGetStatusResponse {
  mac: string;
  restart_required: boolean;
  time: string;
  unixtime: number;
  last_sync_ts: number;
  uptime: number;
  ram_size: number;
  ram_free: number;
  ram_min_free: number;
  fs_size: number;
  fs_free: number;
  cfg_rev: number;
  kvs_rev: number;
  schedule_rev: number;
  webhook_rev: number;
  btrelay_rev:number;
  available_updates:
    | EmptyObject
    | { stable?: { version: string }; beta?: { version: string } };
  reset_reason: number;
  wakeup_reason?: {
    boot:
      | 'poweron'
      | 'software_restart'
      | 'deepsleep_wake'
      | 'internal'
      | 'unknown';
    cause:
      | 'button'
      | 'usb'
      | 'periodic'
      | 'status_update'
      | 'alarm'
      | 'alarm_test'
      | 'undefined';
  };
  wakeup_period: number;
}

export type SysGetConfigResponse = SysConfig;

export interface SysSetConfigRequest {
  config: Partial<SysConfig>;
}

export interface SysConfig {
  device?: SysDevice;
  location: Location;
  debug: Debug;
  ui_data: Uidata;
  rpc_udp: Rpcudp;
  readonly sntp: Sntp;
  cfg_rev: number;
}

interface Sntp {
  server: string;
}

interface Rpcudp {
  dst_addr: string | null;
  listen_port: number | null;
}

interface Uidata {
  cover: string;
}

interface Debug {
  level: number;
  file_level: unknown;
  mqtt: { enable: boolean };
  websocket: { enable: boolean };
  udp: Udp;
}

interface Udp {
  addr: string | null;
}

interface Location {
  tz: string;
  lat: number;
  lon: number;
}
