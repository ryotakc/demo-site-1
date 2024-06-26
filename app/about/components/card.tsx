import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Section({
    title,
    photoLink,
    alt,
    children,
    dounloadLink
}: {
    title: string,
    photoLink: string,
    alt: string,
    children: React.ReactNode
    dounloadLink: string
}) {
    return (
        <div className="border relative rounded-md p-6 shadow space-y-3">
            <div className="aspect-video bg-muted">
                <img src={photoLink} alt={alt} className="rounded-lg" />
            </div>
            <h2 className="font-bold">{title}
                <Link href={dounloadLink} className="absolute inset-0" target="_blank" rel="noopener noreferrer"></Link>
            </h2>
            
            {children}

            <Button>
                <Link href={dounloadLink}>Download</Link>
            </Button>
        </div>

    )
}
