import Link from "next/link";
import Section from "./section";

export default function Features() {
    return (

        <Section title="Phogo Gallery" subTitle="Lorem ipsum dolor sit amet consectetur.">
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="border relative rounded-md p-6 shadow space-y-3">
                    <div className="aspect-video bg-muted"><img src="/photograph/pic1.jpg" alt="photo1" className="rounded-lg" /></div>
                    <h2 className="font-bold">Kayak<Link href={"/"} className="absolute inset-0"></Link></h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>Download</button>
                </div>
                <div className="border rounded-md p-6 shadow">bbb</div>
                <div className="border rounded-md p-6 shadow">ccc</div>
            </div>  
        </Section>
    );
}
