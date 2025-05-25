import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
    {
        variants: {
            variant: {
                default: "bg-gradient text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
                destructive: "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
                outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
                secondary: "bg-surface text-white border-2 border-transparent hover:border-primary hover:shadow-lg",
                ghost: "hover:bg-surface hover:text-white",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-6 py-3 text-sm",
                sm: "h-10 rounded-lg px-4 text-xs",
                lg: "h-14 rounded-xl px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }