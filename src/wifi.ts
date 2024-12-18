export interface WifiListApClientsResponse {
  ts: number;
  ap_clients: Apclient[];
}

export interface Apclient {
  mac: string;
  ip: string;
  ip_static: boolean;
  mport: number;
  since: number;
}

export interface WifiConfig {
  ap: Ap;
  sta: Sta;
  sta1: Sta;
  roam: Roam;
}

interface Roam {
  rssi_thr: number;
  interval: number;
}

interface Sta {
  ssid: string;
  is_open: boolean;
  enable: boolean;
  ipv4mode: string;
  ip: string;
  netmask: string;
  gw: string;
  nameserver: string;
}

interface Ap {
  ssid: string;
  is_open: boolean;
  enable: boolean;
  range_extender: unknown;
}

export type WifiGetConfigResponse = WifiConfig;

export interface WifiSetConfigRequest {
  config: WifiConfig;
}

export interface WifiGetStatusResponse {
  sta_ip: string;
  status: string;
  ssid: string;
  rssi: number;
}
