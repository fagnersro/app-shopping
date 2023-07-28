import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

export default function CardRankedProducts() {
  return (
    <main className="w-full h-full border-[1px] border-red-600 flex">
      {/* container */}
      <div className="w-[100px] h-full border-[1px] border-yellow-600">
        {/* image-container */}
        <Image src="/product-1.png" alt="" width={40} height={30}/>
      </div>
      
      <div className="w-[90%] flex flex-col justify-between">
        {/* wrapper-desc-action */}
        <div className="w-[90%] flex flex-col border-[1px] border-zinc-600">
          {/* description-container */}
          <h3>Title-product</h3>
          <span>Value</span>
        </div>
        <div className="w-[90%] flex justify-between border-[1px] border-zinc-600">
          {/* action-container */}
          <span className="flex">
            <Star size={15}/>
            <Star size={15}/>
            <Star size={15}/>
          </span>
          <span className="">
          <ShoppingCart size={15}/>
          </span>
        </div>
      </div>
    </main>
  )
}