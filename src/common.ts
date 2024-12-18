export interface ComponentIdRequest {
  id: number;
}

export interface Temperature {
  tC: number;
  tF: number;
}

export interface Aenergy {
  total: number;
  by_minute: number[];
  minute_ts: number;
}

const emptySymbol = Symbol('EmptyObject type');
export type EmptyObject = { [emptySymbol]?: never };

export interface RestartRequiredResponse {
  restart_required: true;
}
