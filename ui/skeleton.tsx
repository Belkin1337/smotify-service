import { cn } from "@/lib/utils/styles"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-medium bg-neutral-100 dark:bg-neutral-800", className)}
      {...props}
    />
  )
}

export { Skeleton }
