import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage src="/replicate-prediction-owmhs5nrsrgatfvdxkbgitirce copy.png" alt="avatar"></AvatarImage>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ullam quod eius totam asperiores minus expedita dolorum repellat autem possimus distinctio voluptas suscipit quidem quasi unde maxime, eaque atque modi!</p>
      </PopoverContent>
    </Popover>
  )
}

