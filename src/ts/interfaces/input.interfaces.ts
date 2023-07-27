import { ChangeEvent } from "react";

export interface inputInterface {
  name?: string;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
  minLength?: number;
  id?: number | string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}
