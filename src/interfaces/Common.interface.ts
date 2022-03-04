export interface CommonResponseInterface {
  name: string;
  url: string;
  created: string;
  edited: string;
  films: string[];
}

export interface Response<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
