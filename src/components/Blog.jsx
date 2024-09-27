import heroImg from '/home_g_3.png';
import PostCard from './PostCard.jsx';

const Blog = () => {
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
                        Inspiring Stories Helping Communities Thrive
                    </h1>
                </div>
            </div>

            {/* Blog Posts Section */}
           <div className="w-full flex flex-wrap justify-center">
                <PostCard />
           </div>
        </div>
    );
};

export default Blog;
