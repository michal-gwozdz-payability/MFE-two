export enum PybMpStatusState {
  Active = 'Active',
  SetUpRequired = 'Setup Required',
  Init = ''
}

export interface PybMpStatusConfig {
  logo: string;
  label: string;
  mpKey: string;
  login: string;
}

export interface PybMpIntegration {
  login: string;
  password: string;
  authId: string;
}
