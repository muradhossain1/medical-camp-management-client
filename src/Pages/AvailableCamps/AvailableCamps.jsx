import { Helmet } from "react-helmet-async";
import CampCard from "../../Components/CampCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AvailableCamps = () => {
    const axiosPublic = useAxiosPublic()
    const [camps, setCamps] = useState([])
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [layout, setLayout] = useState(false);

    useEffect(() => {
        const fetchAllBlogs = async () => {
            const { data } = await axiosPublic.get(`/camps?search=${search}`);
            setCamps(data)
        }
        fetchAllBlogs()
    }, [search, axiosPublic])

    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === 'price') {
            const sortedCampsPrice = [...camps].sort((a, b) => b.price - a.price);
            setCamps(sortedCampsPrice)
        }
        if (sortType === 'registered') {
            const sortedparticipantCount = [...camps].sort((a, b) => b.participantCount - a.participantCount);
            setCamps(sortedparticipantCount)
        }
        if (sortType === 'alphabetical') {
            // Sort by camp name in alphabetical order
            const sortedAlphabetical = [...camps].sort((a, b) => a.campName.localeCompare(b.campName));
            setCamps(sortedAlphabetical);
        }
    }
    const handleLayoutToggle = () => {
        setLayout((prevLayout) => (prevLayout === false ? true : false));
    };
    return (
        <div>
            <Helmet>
                <title>Medical Capm | Available</title>
            </Helmet>
            <div>
                <h2 className="text-center text-4xl font-bold py-8">Available all Camps</h2>
                <div className='flex flex-col md:flex-row  items-center justify-center gap-8 '>
                    <div>
                        <details className="dropdown">
                            <summary className="px-6 w-full py-2 text-base text-white font-medium btn text-center my-2 bg-gray-700 rounded-md hover:bg-gray-800">
                                {sort ? `Sort by: ${sort}` : 'Sort by'}
                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-semibold">
                                <li onClick={() => handleSort('price')}><a>Sort by Camp Fees</a></li>
                                <li onClick={() => handleSort('registered')}><a>Sort by Most Registered</a></li>
                                <li onClick={() => handleSort('alphabetical')}><a>Sort Alphabetical order</a></li>
                            </ul>
                        </details>
                    </div>
                    <form>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e => setSearch(e.target.value)}
                                value={search}
                                placeholder='Enter camps Name...'
                                aria-label='Enter camps Name'
                            />

                            <button onClick={e => e.preventDefault()} className='px-1 md:px-4 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-800 '>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <button
                            onClick={handleLayoutToggle}
                            className="px-6 w-full py-3 text-base text-white font-medium text-center my-2 bg-gray-700 rounded-md hover:bg-gray-800"
                        >
                             Layout
                        </button>
                    </div>
                </div>
                <div className={`grid gap-6 pt-8 ${layout === false ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {
                        camps?.map(camp => <CampCard key={camp._id} camp={camp}></CampCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableCamps;