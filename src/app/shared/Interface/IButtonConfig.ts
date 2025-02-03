export type ButtonColor = 'primary' | 'accent' | 'warn';

export interface IButtonConfig {
  label: string;
  color: ButtonColor;
  icon: string;
  disabled: boolean;
}