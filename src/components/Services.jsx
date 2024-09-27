import heroImg from '/servicesmainphoto.jpg';
import img1 from '/serviceshealthblog.jpg';
import img2 from '/serviceseducationblog.jpg';
import img3 from '/servicesagricultureblog.jpg';
import img4 from '/sheconomy.jpg';
import img5 from '/servicesawarenessblog.jpg';
import img6 from '/servicescommunityblog.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Health Initiatives',
            description: "Our health initiatives focus on preventive care, education, and awareness campaigns to ensure every community member enjoys good health and well-being.",
            image: img1,
        },
        {
            title: 'Education Programs',
            description: "From scholarships to skill-building workshops, we aim to provide educational support at all levels to foster a knowledgeable and empowered society.",
            image: img2,
        },
        {
            title: 'Agricultural Sustainability',
            description: "Our agricultural initiatives focus on training farmers, promoting organic methods, and creating market linkages to improve agricultural productivity and sustainability.",
            image: img3,
        },
        {
            title: 'Women Empowerment',
            description: "By providing vocational training, healthcare, and support services, we aim to empower women to lead fulfilling lives and contribute positively to their communities.",
            image: img4,
        },
        {
            title: 'Awareness Campaigns',
            description: "Through impactful campaigns and collaborations, we raise awareness on critical social issues to drive positive change and community engagement.",
            image: img5,
        },
        {
            title: 'Community Development',
            description: "We work closely with local communities to identify needs and implement holistic development projects that enhance livelihoods and foster sustainable growth.",
            image: img6,
        },
    ];

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
                    Empowering Communities Through Diverse Programs
                    </h1>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-screen-2xl mx-auto my-10 px-8 flex flex-wrap gap-8 justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center border rounded-lg shadow-lg overflow-hidden w-full md:w-[48%] lg:w-[30%]"
                    >
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>



            {/* Call to Action Section */}
            <div className='text-center my-10 px-4'>
                <p className='text-3xl font-semibold mb-4'>Call To Action</p>
                <p className='mb-6 max-w-lg mx-auto'>
                    Join us in making a difference! Our impactful initiatives span Health, Education, Agriculture, Women Empowerment, and Awareness Programs, along with Swachh Bharat and Digital India campaigns. Exciting news: by participating, you can earn 100 AICTE points!
                </p>
                <button className='p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600'>
                    <Link to='/blog'>READ MORE</Link> <span className='ml-2'>→</span>
                </button>
            </div>


        </div>
    );
};

export default Services;
