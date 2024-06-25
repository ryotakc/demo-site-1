import Link from "next/link";
import Section from "./section";
import Card from "./card";
import { CarouselPhoto } from "./carousel";

export default function Features() {
    return (

        <Section title="Phogo Gallery" subTitle="Lorem ipsum dolor sit amet consectetur.">
            <div className="container">
                <CarouselPhoto ></CarouselPhoto>                
            </div>

        </Section>
        

    );
}
