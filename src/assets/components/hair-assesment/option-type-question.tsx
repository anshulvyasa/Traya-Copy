import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const OptionTypeQuestion = ({
  questionTitle,
  options,
  updateFn,
  nextFn,
}: {
  questionTitle: string;
  options: { id: string; optionTitle: string; value: string }[];
  updateFn: (id: string) => void;
  nextFn: () => void;
}) => {
  const handleValueChange = (selectedValue: string) => {
    updateFn(selectedValue);
  };

  return (
    <div>
      <h1 className="text-neutral-800 text-[26px] px-3 sm:text-3xl font-medium mb-13">
        {questionTitle}
      </h1>

      <RadioGroup className="mb-2" onValueChange={handleValueChange}>
        {options.map((option) => (
          <div className="flex items-center gap-3" key={option.id}>
            <RadioGroupItem value={option.value} id={option.id} />
            <Label htmlFor={option.id} className="text-lg">
              {option.optionTitle}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <Button
        className="w-100"
        onClick={() => {
          nextFn();
        }}
      >
        Next
      </Button>
    </div>
  );
};
