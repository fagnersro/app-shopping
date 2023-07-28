import RankedProducts from '@/components/RankedProducts/RankedProducts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='w-[100%] h-[250px]'>
        {/* slid-products-container-ranking */}
        <div className='w-full h-full grid grid-cols-[70%_30%] grid-rows-1 gap-1'>
          {/* container-grid */}

          <div className='w-full h-full border-[0px] border-red-500'>
            {/* container-70% */}
            <RankedProducts />
          </div>
          
          <div className='w-full h-full border-[1px] border-gray-900'>
            {/* container-30% */}
            true world
          </div>
        </div>
      </div>
      <div className='w-full min-h-screen border-[0px] border-red-950'>
        {/* copy-initial */}
      </div>
    </main>
  )
}
