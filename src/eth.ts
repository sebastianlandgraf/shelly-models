export interface EthConfig {
  enable: true;
  ipv4mode: 'static';
  ip: string;
  netmask: string;
  gw: string;
  nameserver: string;
  server_mode:boolean;
}

export type EthGetConfigResponse = EthConfig;

export interface EthSetConfigRequest {
  config: Partial<EthConfig>;
}

export interface EthGetStatusResponse {
  ip: string | null;
}
