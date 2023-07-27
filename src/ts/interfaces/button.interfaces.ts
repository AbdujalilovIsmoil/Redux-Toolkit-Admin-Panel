export interface buttonInterface {
  children?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string | number;
  type?: "dashed" | "default" | "link" | "primary" | "text";
}
