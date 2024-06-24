import Link from "next/link";
import { Button } from "../../../components/ui/button";
import Home from "@/app/page";
import {House, Image, Mail} from "lucide-react";
import ToolbarButton from "./toolbar-button";
import UserMenu from "./user-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Toolbar() {
    return (
        <div className="fixed gap-3 bottom-8 left-1/2 -translate-x-1/2 backdrop-blur h-16 flex items-center border border-border/20 shadow-lg rounded-full p-2 bg-muted/40 md:bg-muted/60">
            <UserMenu/>
            <ToolbarButton href="/" icon={<House/>} title="Home"></ToolbarButton>
            <ToolbarButton href="/about" icon={<Image/>} title="Phogoraphy"></ToolbarButton>
            <ToolbarButton href="/contact" icon={<Mail/>} title="Contact"></ToolbarButton>
            <ModeToggle/>
        </div>

    );
}
