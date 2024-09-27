import heroImg from '/4onhomepage.jpg';
import g_1 from '/1.jpg';
import g_2 from '/2home.jpg';
import g_3 from '/3home.jpg';
import g_4 from '/5home.jpg';
import g_5 from '/6home.jpg';
import g_6 from '/7home.jpg';
import t_1 from '/rajgopal.jpg';
import t_2 from '/harish.jpg';
import t_3 from '/siddesh.jpg';
import t_4 from '/ramesh.jpg';
import t_0 from '/kantharau.jpg';
import h_s from '/underourvisionaraystory.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Hero Section */}
            <div
                className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImg})`,
                }}
            >
                {/* Overlay with opacity */}
                <div className="absolute inset-0 bg-[#14353F] bg-opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <h1 className="text-white text-4xl md:text-6xl leading-tight">
                        Linking Lives,<br />
                        Lifting Spirits
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-xl">
                        Join us in transforming communities through impactful initiatives in Health, Education, Agriculture, Women Empowerment, Awareness Programs, Swachh Bharat, and Digital India. The exciting news is that by participating, you can earn 100 AICTE points!
                    </p>

                    {/* Join Now Button */}
                    <button className="mt-6 px-6 py-3 bg-orange-600 text-white text-lg rounded-md hover:bg-orange-500 transition duration-300">
                        <Link to='/contact'>JOIN NOW</Link>
                    </button>
                </div>
            </div>


            {/* Gallery Section */}
            <section className="py-12 px-4 ">
                <h2 className="text-center text-3xl font-bold mb-8">Our Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_1} alt="Gallery Image 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_2} alt="Gallery Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_3} alt="Gallery Image 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_4} alt="Gallery Image 4" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_5} alt="Gallery Image 5" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                        <img src={g_6} alt="Gallery Image 6" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Additional Information */}
            <div className='text-center mb-10 mt-5'>
                <p className='text-3xl mb-8'>Why do you need only us???</p>
                <p>We are legit</p>
                <p>Individual certificates will be given</p>
                <p>For AICTE activities Reports will be given</p>
            </div>
            {/* story */}
            <div>
                <div>
                    <p className="text-4xl text-center mb-4">Our Visionary Story</p>
                    <p className="max-w-xl mx-auto text-center">
                        Connect4Society is a dynamic NGO lighting up Bengaluru and Tumkur with its impactful initiatives in Health, Education, Agriculture, Women Empowerment, and Awareness Programs.
                    </p>
                </div>
                <div className="rounded-tr-3xl rounded-bl-3xl overflow-hidden mt-10 mx-auto max-w-[70vw] max-h-[65vh]">
                    <img src={h_s} alt="" className="w-full h-auto object-cover" />
                </div>
                <div>
                    <p className="text-4xl text-center my-4">Our Journey</p>
                    <p className="max-w-xl mx-auto text-center">
                        Connect4Society is on a mission to transform lives and communities through passionate efforts and innovative programs.
                    </p>
                    <p className="max-w-xl mx-auto text-center">
                        We empower women, educate minds, promote health, and foster sustainable agriculture to drive positive change across Karnataka.
                    </p>
                    <p
                    className='text-center text-orange-500 hover:text-orange-600 my-2'
                    ><Link to='about'>LEARN MORE</Link></p>
                </div>
            </div>
            {/* works */}
            <div className="py-12 px-4 bg-gray-100">
                <div className='text-center'>
                    <p className="text-3xl font-bold mb-8">
                        Connect4Society Dominantly Working On…
                    </p>
                    <ul className="list-disc list-inside space-y-4 text-lg md:text-xl">
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Helping Local Schools to achieve good results
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Enhancing the Village Income
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-red-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Water Harvesting Awareness
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-yellow-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Reducing Energy Consumption Awareness
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-teal-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Tourism Promotion
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-purple-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Digital India
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-indigo-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Woman Empowerment
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Swachh Bharat
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-pink-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Food Packing/Preservation/Distribution
                        </li>
                        <li className="flex items-center justify-center font-semibold">
                            <svg className="w-6 h-6 text-gray-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Woman Empowerment
                        </li>
                    </ul>
                </div>

                <div className="my-10 px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-12 flex flex-col justify-start w-full sm:w-72 md:w-80 lg:w-1/4">
                            <p className="text-3xl text-gray-700 mb-1">Sustainable Agriculture</p>
                            <p className="text-gray-700">
                                We promote sustainable farming practices to ensure food security and protect the environment.
                            </p>
                        </div>

                        <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-12 flex flex-col justify-start w-full sm:w-72 md:w-80 lg:w-1/4">
                            <p className="text-3xl text-gray-700 mb-1">Community Awareness</p>
                            <p className="text-gray-700">
                                We raise awareness about various social issues to promote empathy and drive positive change.
                            </p>
                        </div>
                        <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-12 flex flex-col justify-start w-full sm:w-72 md:w-80 lg:w-1/4">
                            <p className="text-3xl text-gray-700 mb-1">Collaborative Approach</p>
                            <p className="text-gray-700">
                                We believe in the power of collaboration and work with diverse stakeholders to achieve collective impact.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

            {/* Team Section */}
            <section className="pb-12 px-4 ">
                <h2 className="text-center text-3xl font-bold mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="flex flex-col items-center">
                        <img src={t_1} alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <p className="text-lg font-semibold">Sri Rajgopal</p>
                        <p>President</p>
                    </div>
                  
                    <div className="flex flex-col items-center">
                        <img src={t_4} alt="Team Member 4" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <p className="text-lg font-semibold">Ramesh</p>
                        <p>Vice President</p>
                    </div>
                  
                    <div className="flex flex-col items-center">
                        <img src={t_0} alt="Team Member 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <p className="text-lg font-semibold">Sri Kantharaju</p>
                        <p>Director</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={t_2} alt="Team Member 2" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <p className="text-lg font-semibold">Harish</p>
                        <p>Secretary</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={t_3} alt="Team Member 3" className="w-32 h-32 object-cover rounded-full mb-4" />
                        <p className="text-lg font-semibold">Siddesh</p>
                        <p>Trustee</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
