import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 hover:bg-white/10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

