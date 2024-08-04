import { cn } from '@/shared/lib/lib'

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'animate-pulse rounded-md bg-slate-200 dark:bg-slate-800',
				className
			)}
			{...props}
		/>
	)
}

export { Skeleton }
