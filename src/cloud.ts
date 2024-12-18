export interface CloudGetStatusResponse {
  connected: boolean;
}

export interface CloudConfig {
  enable: boolean;
  server: string;
}

export type CloudGetConfigResponse = CloudConfig;
export interface CloudSetConfigRequest {
  config: CloudConfig;
}
