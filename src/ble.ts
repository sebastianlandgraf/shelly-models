export type BleGetConfigResponse = BleConfig;

export interface BleConfig {
  enable: boolean;
  rpc: {
    enable: boolean;
  };
  observer: {
    enable: boolean;
  };
}

export interface BleSetConfig {
  config: Partial<BleConfig>;
}

export interface BleGetStatusResponse {
  active?: boolean;
}

export interface BleSetConfigRequest {
  config: BleConfig;
}
