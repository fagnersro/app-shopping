import CardRankedProducts from "./CardRankedProducts/CardRankedProducts";

export default function RankedProducts() {
  return (
    <main className="w-full h-full border-[0px] border-yellow-400 grid grid-cols-1 grid-rows-3">
      <div className="w-full h-full border-b-[1px] border-zinc-600">
        {/* container-one */}
          <CardRankedProducts />
      </div>

      <div className="w-full h-full border-b-[1px] border-zinc-600">
        {/* container-two */}
      </div>

      <div className="w-full h-full border-b-[1px] border-zinc-600">
        {/* container-three */}
      </div>
    </main>
  )
}