export interface IOrderInputProps {
  label: string;
  options?: string[];
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
