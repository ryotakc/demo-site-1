import Link from "next/link";
import Section from "../../about/components/section";

export default function Contact() {
    return (
        <Section title="Contact" subTitle="Lorem ipsum dolor sit amet consectetur.">
            <div className="container">
                <Link href="/contact">Contact</Link>
            </div>
        </Section>
    );
}
