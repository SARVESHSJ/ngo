import { Link } from 'react-router-dom';
import heroImg from '/Aboutsectionmainphoto.jpg';
import abtImg from '/about2.jpg';
import misAndvis from '/aboutmissinvisio3.jpg';
import img1 from '/rajgopal.jpg';
import img2 from '/harish.jpg';
import img3 from '/siddesh.jpg';
import img4 from '/ramesh.jpg';
import img5 from '/kantharau.jpg';

const About = () => {
    return (
        <div>
            {/* Hero Image Section */}
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
                    <h1 className="text-white text-3xl md:text-4xl leading-tight">
                        Empowering Lives, Transforming Communities
                    </h1>
                </div>
            </div>

            {/* About Section */}
            <div className="flex flex-col items-center my-10 px-4 gap-8 max-w-6xl mx-auto text-center">
                {/* Headline */}
                <h1 className="text-3xl font-bold mb-4 text-gray-700">About Connect4Society</h1>

                {/* Image */}
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <img src={abtImg} alt="About Image" className="w-full rounded-bl-3xl rounded-tr-3xl shadow-lg" />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <p className="text-gray-600">
                        Connect4Society is a dynamic NGO making a positive impact in Bengaluru and Tumkur through its initiatives in Health, Education, Agriculture, Women Empowerment, and Awareness Programs.
                        We empower women, educate minds, promote health, and foster sustainable agriculture. Join us in driving positive change across Karnataka!
                    </p>
                </div>
            </div>


            {/* Mission and Vision Section */}
            <div className="flex flex-col items-center my-10 px-4 gap-8 max-w-6xl mx-auto text-center">
                {/* Headline */}
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Mission & Vision</h1>

                {/* Image */}
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <img src={misAndvis} alt="Mission and Vision Image" className="w-full rounded-bl-3xl rounded-tr-3xl shadow-lg" />
                </div>

                {/* Mission Content */}
                <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Our Mission</h2>
                        <p className="text-gray-600">
                            To transform lives and communities by empowering women, educating minds, promoting health, and fostering sustainable agriculture.
                        </p>
                    </div>

                    {/* Vision Content */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-700">Our Vision</h2>
                        <p className="text-gray-600">
                            To create a society where every individual has equal opportunities, access to quality education, good health, and a sustainable environment.
                        </p>
                    </div>
                </div>
            </div>


            <div className="mt-10 px-4 w-full mx-auto bg-gray-200 p-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Images */}
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {[img1, img4, img5, img2,img3].map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-28 h-28 object-cover rounded-full shadow-lg"
                            />
                        ))}
                    </div>

                    {/* Join Now Content */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700">Join Us and Make a Difference</h2>
                        <button className="p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200 mt-4">
                            <Link to='/contact'>JOIN NOW</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
