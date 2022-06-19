import { Info } from './character.model';

export interface LocationsData {
  info: Info;
  results: Location[];
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationQuery {
  name: string;
  dimension: string;
}
