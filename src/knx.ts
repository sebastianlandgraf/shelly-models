export type KnxGetConfigResponse = KnxConfig;

export interface KnxConfig {
  enable: boolean,
    ia: string,
    routing: {
      addr: string
    }
}

export interface KnxSetConfigRequest {
  config: Partial<KnxConfig>;
}

export interface KnxGetStatusResponse {}

export interface KnxGetStatusResponse {}
