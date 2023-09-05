export interface IOrderInputProps {
  label: string;
  options?: string[];
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
