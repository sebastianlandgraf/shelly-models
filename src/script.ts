export type ScriptGetConfigResponse = ScriptConfig;

export interface ScriptSetConfigRequest {
  id: number;
  config: ScriptConfig;
}
export interface ScriptConfig {
  id: number;
  name: string;
  enable: boolean;
}

export interface ScriptListResponse {
  scripts: {
    id: number;
    name: string;
    enable: boolean;
    running: boolean;
  }[];
}

export interface ScriptCreateRequest {
  name: string;
}

export interface ScriptCreateResponse {
  id: number;
}

export interface ScriptGetStatusResponse {
  id: number;
  running: boolean;
  mem_used: number;
  mem_peak: number;
  mem_free: number;
}

export interface ScriptPutCodeRequest {
  id: number;
  code: string;
  append?: boolean;
}

export interface ScriptPutCodeResponse {
  len: number;
}

export interface ScriptGetCodeRequest {
  id: number;
  offset?: number;
  len?: number;
}

export interface ScriptGetCodeResponse {
  data: string;
  left: number;
}

export interface WasRunningResponse {
  was_running: boolean;
}
