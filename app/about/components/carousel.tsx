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
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="relative container w-full h-full flex flex-col items-center space-y-3 mb-48"
        >
            <CarouselContent className="w-full h-full flex justify-center items-center">
                {photos.map((photo, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                        <div className="w-full h-full">
                            <Card className="w-full h-full">
                                <CardContent className="flex items-center justify-center p-0 w-full h-full">
                                    <img
                                        src={photo}
                                        alt={`Photo ${index + 1}`}
                                        className="object-cover w-full h-full"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 transform -translate-y-1/2 top-1/2 bg-white bg-opacity-50 p-2 rounded-full" />
            <CarouselNext className="absolute right-4 transform -translate-y-1/2 top-1/2 bg-white bg-opacity-50 p-2 rounded-full" />
        </Carousel>
    );
}



// import {
//     Carousel,
//     CarouselSlide,
//     CarouselControlNext,
//     CarouselControlPrev,
//     CarouselIndicators,
// } from "@yamada-ui/carousel"

// export function CarouselPhoto() {
//     return (
//         <Carousel gap={0}>
//         <CarouselSlide as={Center} bg="primary">
//             1
//         </CarouselSlide>
//         <CarouselSlide as={Center} bg="secondary">
//             2
//         </CarouselSlide>
//         <CarouselSlide as={Center} bg="warning">
//             3
//         </CarouselSlide>
//         <CarouselSlide as={Center} bg="danger">
//             4
//         </CarouselSlide>
//         </Carousel>
//     );
// }
