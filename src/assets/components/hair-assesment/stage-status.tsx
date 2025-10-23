import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "about-you",
    content: ["About", "You"],
  },
  {
    id: "hair-health",
    content: ["Hair", "Health"],
  },
  {
    id: "internal-health",
    content: ["Internal", "Health"],
  },
  {
    id: "scalp-assesment",
    content: ["Scalp", "Assesment"],
  },
];

export const StageStatus = ({
  currStage,
}: {
  currStage:
    | "about-you"
    | "hair-health"
    | "internal-health"
    | "scalp-assesment";
}) => {
  return (
    <div className="flex justify-center gap-2 mt-10">
      {stages.map((stage) => (
        <Card
          className={cn(
            "px-3 sm:px-4 bg-gray-100 shadow-sm",
            stage.id === currStage && "bg-[#00A36C]"
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="text-neutral-900 font-medium text-[12px] break1:text-[16px] sm:text-lg">
              <span className="block">{stage.content[0]}</span>
              <span>{stage.content[1]}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
