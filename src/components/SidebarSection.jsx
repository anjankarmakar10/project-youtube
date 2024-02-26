import { Children, useState } from "react";
import Button from "@/components/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

const SidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && (
        <div className="ml-4 mt-2 text-base font-semibold  mb-1">{title}</div>
      )}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full text-sm h-10 flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon strokeWidth="1.5px" className="w-6 h-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
};
export default SidebarSection;
