
import Image from 'next/image';

function ItemCard({ item }) {

    const image = `/img/${item.image}`;

    return <div className=' ' >


        <div className='relative  pb-5/6'>

            <Image src={image} width='180' height='120' layout='responsive' alt='Recipe' className='absolute  h-full w-full     object-cover rounded-lg shadow-md' />

        </div>

        <div className='relative px-4 -mt-16 '>


            <div className="bg-white  p-3 rounded-lg shadow-lg">

                <div className='flex items-baseline'>


                    <span className='inline-block  p-1 bg-green-200 text-gray-800 text-xs rounded-full px-2 uppercase '>{item.status}</span>

                    <div className='ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wider'>
                        <span className=''>{item.bed} BEDS {item.bath} - BATHS</span>
                    </div>

                </div>


                <h4 className='mt-1 font-semibold text-md leading-tight truncate'>{item.title}</h4>

                <div className='mt-1'>

                    ${item.price}
                    <span className='text-gray-600 text-sm'>/{item.pricePer}</span>

                </div>

                <div className='mt-1 flex items-center'>

                    <div className='flex gap-5 '>
                        <span className='text-md text text-green-500'>
                            ★★★★★

                        </span>

                        <span className='text-sm'>{item.reviews} Reviews</span>
                    </div>

                </div>
            </div>


        </div>

    </div >



}



/*
function ItemCard({ item }) {

    const image = `/img/${item.image}`;

    return <div className="relative  mb-20 ">



        <div className="static bg-gray-600 rounded-lg border-0 overflow-hidden shadow-lg">
            <img src={image} alt='Recipe' className='w-full  h-72    object-cover ' />

        </div>
        <div className="absolute    top-52  left-4  h-36   w-11/12  bg-white  rounded-md border-0 shadow-lg p-3">

            <div className='flex flex-col gap-2'>
                <div className=''>


                    <div className='flex items-center gap-x-2 '>
                        <div className=' bg-green-200 rounded-full text-center  w-12'>
                            <span className=' text-xs font-bold '>PLUS</span>

                        </div>
                        <span className='text-xs text-gray-400'>{item.bed} BEDS {item.bath} - BATHS</span>

                    </div>

                </div>

                <div className=''>

                    <h2 className=' font-bold'>{item.title}</h2>

                </div>
                <div className=''>

                    <span className='font-semibold'>${item.price} </span>
                    <span className='text-gray-600'>/{item.pricePer}</span>

                </div>
                <div className=''>

                    <div className='flex gap-5 '>
                        <span className='text-lg text text-green-500'>
                            ★★★★★

                        </span>

                        <span>{item.reviews} Reviews</span>
                    </div>

                </div>
            </div>


        </div>
    </div>


}

*/


export default ItemCard