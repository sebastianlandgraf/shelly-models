export interface KvsSetRequest {
  key: string;
  value: string;
  etag?: string;
}

export interface KvsGetRequest {
  key: string;
}

export interface KvsSetResponse {
  etag: string;
  rev: string;
}

export interface KvsGetManyResponse {
  items: KvsItemList;
}

export interface KvsListResponse {
  keys: KvsItemList;
  rev: number;
}

export interface KvsItemList {
  [k: string]: KvsGetResponse;
}

export interface KvsGetResponse {
  etag: string;
  value?: string;
}

export interface KvsGetManyRequest {
  match: string;
}

export interface KvsDeleteRequest {
  key: string;
  etag?: string;
}

export interface KvsDeleteResponse {
  rev: number;
}
