import Link from "next/link";
import Section from "../../about/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <Section title="Contact" subTitle="Send me some feedbacks and questions!!">
            <div className="flex flex-col items-center space-y-3">
                <Input type="email" id="email" placeholder="Email" className="w-96" />
                <Input type="subject" placeholder="Subject" className="w-96" />
                <Textarea placeholder="Type your message here." className="w-96" />
                <Button className="mt-4" asChild>
                    <Link href="/contact">Send</Link>
                </Button>
            </div>
        </Section>
    );
}
