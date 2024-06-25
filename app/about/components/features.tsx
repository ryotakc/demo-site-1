import Link from "next/link";
import Section from "./section";
import Card from "./card";
import { CarouselPhoto } from "./carousel";

export default function Features() {
    return (

        <Section title="Phogo Gallery" subTitle="Lorem ipsum dolor sit amet consectetur.">
            
            <div className="grid mb-10 lg:grid-cols-3 gap-4">
                <Card title="Kayak" photoLink="/photograph/pic1.jpg" alt="photo1" dounloadLink="/photograph/pic1.jpg">
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
                <Card title="Kayak" photoLink="/photograph/pic2.jpg" alt="photo2" dounloadLink="/photograph/pic2.jpg">
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
                <Card title="Kayak" photoLink="/photograph/pic3.jpg" alt="photo3" dounloadLink="/photograph/pic3.jpg">
                    <p>Lorem ipsum dolor sit amet.</p>
                </Card>
            </div>  
            
            <div className="container">
                <CarouselPhoto ></CarouselPhoto>                
            </div>

        </Section>
    );
}
