import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAboutYou } from "@/lib/redux/apphooks/useAboutYou";
import type React from "react";
import { toast } from "sonner";

interface InputTypeQuestionProps {
  questionTitle: string;
  updateFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextFn: () => void;
  feild: string;
  value: string;
}

export const InputTypeQuestion = ({
  questionTitle,
  updateFn,
  nextFn,
  feild,
  value,
}: InputTypeQuestionProps) => {
  const { phone, age } = useAboutYou();

  const handleNext = () => {
    if (feild === "phone" && (phone.trim() === "" || isNaN(Number(phone)))) {
      toast.error("Wrong Input");
      return;
    }
    if (feild === "age" && (age.trim() === "" || isNaN(Number(age)))) {
      toast.error("Wrong Input");
      return;
    }
    nextFn();
  };

  return (
    <div className="flex flex-col justify-between items-center sm:min-w-xl">
      <h1 className="text-neutral-800 text-[26px] px-3 sm:text-3xl font-medium mb-13">
        {questionTitle}
      </h1>
      <Input onChange={updateFn} className="mb-2 max-w-[80%]" value={value} />

      <Button className="w-56 sm:w-64" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};
