import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckboxProps {
  title: string;
  checked?: boolean;
  onCheckedChange?: () => void;
}

export function Checkbox({ title, checked = false, onCheckedChange }: CheckboxProps) {
  return (
    <CheckboxRadix.Root 
      className="flex items-center gap-3 group"
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
        <CheckboxRadix.Indicator>
          <Check size={20} className="text-white" />
        </CheckboxRadix.Indicator>
      </div>

      <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
        {title}
      </span>
    </CheckboxRadix.Root>
  )
}
