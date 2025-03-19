import { cx } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"relative overflow-hidden bg-cs-slate-900 text-white rounded-[8px] border border-cs-slate-900 hover:text-text-primary transition-colors duration-300 dark:bg-white dark:text-cs-slate-100 dark:border-cs-slate-200 dark:hover:text-white",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"relative overflow-hidden bg-white text-cs-slate-900 rounded-[8px] border border-cs-slate-900 hover:text-white transition-colors duration-300 dark:bg-black dark:text-white dark:border-cs-slate-200 dark:hover:text-cs-slate-100",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "relative overflow-hidden bg-cs-slate-900 text-white rounded-[8px] border border-cs-slate-900 hover:text-text-primary transition-colors duration-300 dark:bg-white dark:text-cs-slate-100 dark:border-cs-slate-200 dark:hover:text-white flex items-center relative z-10",
				linkSecondary:
					"relative overflow-hidden bg-white text-cs-slate-900 rounded-[8px] border border-cs-slate-900 hover:text-white transition-colors duration-300 dark:bg-black dark:text-white dark:border-cs-slate-200 dark:hover:text-cs-slate-100 z-10",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cx(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
