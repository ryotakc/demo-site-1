import Link from "next/link";
import Section from "./section";

export default function Features() {
    return (

        <Section title="Features" subTitle="Lorem ipsum dolor sit amet consectetur.">
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="border relative rounded-md p-6 shadow space-y-3">
                    <div className="aspect-video bg-muted"></div>
                    <h2 >Title<Link href={"/"} className="absolute inset-0"></Link></h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button>Tag A</button>
                </div>
                <div className="border rounded-md p-6 shadow">bbb</div>
                <div className="border rounded-md p-6 shadow">ccc</div>
            </div>  
        </Section>
    );
}
