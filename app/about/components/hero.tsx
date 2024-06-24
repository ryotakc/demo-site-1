import React from "react";
import {Button} from "@/components/ui/button";

export default function Hero() {
    return (
        <div className="py-40 flex items-center">
            <div className="container">
                <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">Hero</h1>
                <p className="text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, necessitatibus id. Minima, velit debitis quo aliquam quidem aspernatur, odit ipsum odio adipisci optio corporis modi nihil distinctio dignissimos eveniet est.
                </p>
                <Button>Contact</Button>
            </div>
        </div>
    );
}
