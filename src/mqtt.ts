export type MqttGetConfigResponse = MqttConfig;

export interface MqttSetConfigRequest {
  config: Partial<MqttConfig>;
}

export interface MqttConfig {
  enable: boolean;
  server: string;
  client_id: string;
  user: null;
  ssl_ca: null;
  topic_prefix: string;
  rpc_ntf: boolean;
  status_ntf: boolean;
  use_client_cert: boolean;
  enable_rpc: boolean;
  enable_control: boolean;
}

export interface MqttGetStatusResponse {
  connected: boolean;
}
