import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="py-40 flex items-center">
    <div className="container">
        <h1 className="font-bold text-primary/90 text-4xl mb-5 lg:text-6xl">Welcome to my Portfoilo!</h1>
        <p className="text-muted-foreground mb-6">
          Hello, I'm Ryota Kato. I'm a full-stack developer and Photographer based in Vancouver Canada. I'm passionate about creating beautiful and functional websites and applications. I'm also passionate about photography and love capturing moments that will last a lifetime. 
        </p>
        <div className="flex gap-3 font-semibold">
          <Button><Link href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</Link></Button>
          <Button><Link href="https://github.com/" target="_blank" rel="noopener noreferrer">My CV</Link></Button>
        </div>
    </div>
</div>
  );
}
