import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 hover:bg-white/10 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

