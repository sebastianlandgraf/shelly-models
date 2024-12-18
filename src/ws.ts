export type WsGetConfigResponse = WsConfig;

export interface WsSetConfigRequest {
  config: WsConfig;
}

export interface WsConfig {
  enable: boolean;
  server: string | null;
  ssl_ca: '*' | 'user_ca.pem' | 'ca.pem';
}

export interface WsGetStatusResponse {
  connected: boolean;
}
