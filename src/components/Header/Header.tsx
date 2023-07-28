import { AlignJustify, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-16 bg-zinc-900 flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-between text-zinc-200">
        {/* wrapper-container */}
        <h1>LOGO</h1>
        <div className="w-[5.625rem] h-full flex items-center justify-between">
          {/* wrapper-actions */}
          <Search size={24}/>
          <AlignJustify size={24}/>
        </div>
      </div>
    </header>
  )
}