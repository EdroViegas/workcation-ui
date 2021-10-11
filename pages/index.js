
import Link from 'next/Link'
import Image from 'next/Image'
import ItemCard from '../components/item_card'


const items = [
    {
        id: 1,
        title: 'Modern home in city center',
        image: 'w9.jpg',
        bed: 3,
        bath: 7,
        price: '3,400',
        pricePer: 'wk',
        stars: 3,
        status: 'Plus',
        reviews: 39

    },
    {
        id: 1,
        title: 'Large dream home with ... ',
        image: 'w10.jpg',
        bed: 5,
        bath: 4,
        price: '1,400',
        pricePer: 'wk',
        stars: 5,
        status: 'New',
        reviews: 34

    }
    ,
    {
        id: 1,
        title: 'Isolated house outside ... ',
        image: 'w3.jpg',
        bed: 5,
        bath: 4,
        price: '1,400',
        pricePer: 'wk',
        stars: 5,
        status: 'New',
        reviews: 34

    }



]

const itemsP = [
    {
        id: 1,
        title: 'Modern home in city center',
        image: 'w4.jpg',
        bed: 3,
        bath: 7,
        price: '3,400',
        pricePer: 'wk',
        stars: 3,
        status: 'Plus',
        reviews: 39

    },
    {
        id: 1,
        title: 'Isolated house outside ... ',
        image: 'w7.jpg',
        bed: 5,
        bath: 4,
        price: '1,400',
        pricePer: 'wk',
        stars: 5,
        status: 'Plus',
        reviews: 34

    }
    ,
    {
        id: 1,
        title: 'Isolated house outside ... ',
        image: 'w6.jpg',
        bed: 5,
        bath: 4,
        price: '1,400',
        pricePer: 'wk',
        status: 'New',
        stars: 5,
        reviews: 34

    }



]

function Layout() {


    return <div>

        <div className="text-gray-600 grid md:grid-cols-4 lg:grid-cols-5  " >

            <div className=' hidden sm:hidden lg:block    md:col-span-1 xl:flex md:flex-col md:justify-start bg-workcation-200'>

                <div className='flex justify-center  py-1   w-full bg-workcation-100'>

                    <div >
                        <Image width={190} height={34} src='/workcation.jpg' alt='Workcation' className='  w-48  sm:48  ' />
                    </div>

                </div>

                <div className='sm:hidden md:block'>

                    <div className='flex justify-between flex-col px-4'>

                        <div className='flex justify-between   mt-4'>
                            <div className=''>
                                <h4 className=' mb-1 text-gray-500 font-bold text-xs'>Bedrooms</h4>
                                <select className='  w-20 h-8 rounded-lg px-2   bg-workcation-300  text-white border-0 text-xs ' >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </div>
                            <div>
                                <h4 className='mb-1 text-gray-500 font-bold text-xs' >Bathrooms</h4>
                                <select className='  w-20 h-8 px-2 rounded-lg bg-gray-100 bg-workcation-300 text-white border-0  text-xs' >
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex justify-center items-center   mt-4'>
                            <div className='mx-7 mt-6'>
                                <h4 className=' mb-1 text-gray-500 font-bold text-xs'>Price Range</h4>
                                <select className='outline-none  w-56 h-8 rounded-lg    bg-workcation-300  text-white border-0  mt-1 text-xs' >
                                    <option value='1' >Up to $2,000 /wk</option>
                                    <option value='2' >Up to $3,000 /wk</option>

                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-t-4 mt-5 border-workcation-100 border-white p-5'>

                    <h4 className='mb-4 text-gray-500 font-bold text-sm'>Property Type</h4>

                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-x-2 gap-y-4'>
                            <input type='radio' className=' p-2   text-indigo-400 bg-workcation-100 border-0 ' name='type' />
                            <span className='text-white text-xs'>House</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='radio' className=' p-2   text-indigo-400 bg-workcation-100 border-0' name='type' />
                            <span className='text-white   text-xs'>Apartment</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='radio' className=' p-2   text-indigo-400 bg-workcation-100 border-0' name='type' />
                            <span className='text-white text-xs'>Loft</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='radio' className=' p-2   text-indigo-400 bg-workcation-100 border-0' name='type' />
                            <span className='text-white text-xs'>Townhouse</span>


                        </div>
                    </div>


                </div>

                <div className='border-t-4  border-workcation-100  p-5'>

                    <h4 className='mb-4 text-gray-500 font-bold text-sm'>Amenities</h4>


                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-x-2 gap-y-4'>
                            <input type='checkbox' className=' h-5 w-5   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Balcony</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Air conditioning</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5    text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Pool</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Beach</span>

                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5 focus:outline-none focus:shadow-none focus:border-0   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Pet friendly</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Kid friendly</span>
                        </div>

                        <div className='flex gap-x-2'>
                            <input type='checkbox' className=' h-5 w-5   text-indigo-400 bg-workcation-100 border-0 rounded-md ' name='type' />
                            <span className='text-white text-xs'>Parking</span>
                        </div>

                    </div>






                </div>

                <div className=' mt-4 flex justify-center  border-t-4  border-workcation-100  '>

                    <div className=' w-full px-2 mb-4'>
                        <button className='mt-4 bg-indigo-400 md:px-5 md:py-2 rounded-lg h-10 w-full   hover:shadow-inner  transform hover:scale-105  transition ease-out duration-300'>

                            <span className='text-white  text-sm'>Update Results</span>

                        </button>
                    </div>





                </div>







            </div>


            <main className=' bg-gray-100 md:col-span-4'>


                <header className='flex justify-center md:justify-between items-center bg-white h-12  p-4'>


                    <div className='hidden md:inline-flex   flex  justify-between  items-center h-8 rounded-lg  bg-gray-100 border-0 '>
                        <div className='ml-3 mt-2 mr-3'>
                            <Image height={25} width={25} src='/search.png' alt='search' className=' w-6 h-6' />
                        </div>

                        <input type='text' placeholder='Search by keywords' className='focus:border-0 text-sm focus:outline-none focus:border-transparent focus:ring-2 h-8 bg-gray-100 border-0 rounded ' />

                    </div>

                    <nav className=' mr-7'>

                        <ul className='flex justify-between items-center  gap-x-6 font-semibold text-xs '>
                            <li >
                                <span>List your property</span>
                            </li>
                            <li>
                                <span>trips</span>
                            </li>
                            <li>
                                <span>Messages</span>
                            </li>
                            <li>
                                <span>Support</span>
                            </li>
                            <li>
                                <div className='border-4 border-gray-200 rounded-full overflow-hidden hover:border-indigo-100  hover:shadow-inner  transform hover:scale-110  transition ease-out duration-300'>
                                    <img src='/person/1.jpg' alt='Recipe' className='w-8 h-8 sm:48   object-cover ' />
                                </div>

                            </li>
                        </ul>
                    </nav>


                </header>

                <div className='mx-5'>
                    <h4 className="text-black mt-4  mb-1 text-sm ">Los Angeles</h4>
                    <div className='flex justify-between mr-5'>

                        <h3 className='text-gray-400 text-xs'>Live like the stars in these luxurious Southern California estates</h3>

                        <a href='#' className=' text-purple-400 text-xs'>View all</a>
                    </div>

                    <div className='mt-3 mr-5 grid lg:grid-cols-3 gap-10'>


                        {
                            items.map((item => {
                                return <div key={item.id}>

                                    <ItemCard item={item} />

                                </div>
                            }))

                        }

                    </div>


                </div>


                <div className='mx-5 mb-2 '>
                    <h4 className="text-black   mb-2 text-sm  ">Phoenix</h4>
                    <div className='flex justify-between mr-5'>

                        <h3 className='text-gray-400 text-xs'>Escape the cold and enjoy great weather without breaking the bank.</h3>

                        <a href='#' className=' text-purple-400 text-xs'>View all</a>
                    </div>

                    <div className='mt-3 mr-5 grid lg:grid-cols-3 gap-10'>


                        {
                            itemsP.map((item => {
                                return <div key={item.id}>

                                    <ItemCard item={item} />

                                </div>
                            }))

                        }

                    </div>





                </div>

            </main>

        </div >
    </div >


}

export default Layout