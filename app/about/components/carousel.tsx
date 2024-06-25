'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const photos = [
    "/photograph/pic1.jpg",
    "/photograph/pic2.jpg",
    "/photograph/pic3.jpg",
    "/photograph/pic4.jpg",
    "/photograph/pic5.jpg",
];


export function CarouselPhoto() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel 
            plugins={[plugin.current]}
            className="container w-full h-full flex flex-col items-center space-y-3" 
        >
            <CarouselContent className="w-full h-full">
                {photos.map((photo, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                        <div className="p-1 w-full h-full">
                            <Card className="w-full h-full">
                                <CardContent className="flex items-center justify-center p-0 w-full h-full">
                                    <img src={photo} alt={`Photo ${index + 1}`} className="object-cover w-full h-full" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
