'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { House, IconNode, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";



export default function ToolbarButton({
    href,
    icon,
    title
}: {
    href: string,
    icon: ReactNode,
    title: string
}) {
    const pathname = usePathname();
    const IconSlot = Slot as LucideIcon;


    return (
        <Button size="icon" variant="ghost" className={cn('hover:bg-accent/30 rounded-full', href === pathname && 'ring-1 ring-primary')} asChild>
            <Link href={href} >
                <IconSlot size={18}>
                    {icon}
                </IconSlot>
                <span className="sr-only">{title}</span>
                <span className="opacity-0 bottom-0 translate-y-1/2 transition origin-bottom pointer-events-none scale-0 duration-500 group-aria-[current=page]:scale-100 group-aria-[current=page]:opacity-100 size-2 absolute shadow-[0_-2px_10px] shadow-sky-500 rounded-full bg-sky-500"></span>
            </Link>
            
        </Button>
    )
}

