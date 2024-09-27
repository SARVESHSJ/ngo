import React, { useState } from "react";
import heroImg from "/contactsectionmainphoto.jpg";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    // Locations array with converted coordinates
    const locations = [
        { lat: 12.9716, lng: 77.5946, name: "KSV COMPLEX" },
        { lat: 12.9718, lng: 77.5950, name: "Ksv Nilaya" },
        { lat: 12.9820, lng: 77.6031, name: "Kunchitigara Sarvajanika Vidyarthi Nilaya" },
    ];

    // State to manage form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State to manage feedback message
    const [submitMessage, setSubmitMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false); // To differentiate between success and error

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/contacts/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage("ThankYou for Supporting ,We will contact you soon");
                setIsSuccess(true);
                // Reset form
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitMessage("Failed to send message. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmitMessage("An error occurred. Please try again.");
            setIsSuccess(false);
        }
    };

    return (
        <div>
            {/* Hero Image Section */}
            <div
    className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center"
    style={{
        backgroundImage: `url(${heroImg})`,
        // backgroundSize: 'contain', // Change from 'cover' to 'contain'
        // backgroundRepeat: 'no-repeat', // Prevent repetition of the image
        // backgroundPosition: 'center', // Center the image
    }}
>
                <div className="absolute inset-0 bg-[#14353F] bg-opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <h1 className="text-white text-3xl md:text-4xl leading-tight">
                        Get in touch with Connect4Society
                    </h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row gap-6 p-4 w-full md:w-9/12 mx-auto my-10">
                {/* Form Section */}
                <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                        Connect with Us for Collaboration or Support
                    </h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-100 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-100 focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-2 rounded-md bg-gray-100 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            Submit
                        </button>
                    </form>

                    {/* Feedback message */}
                    {submitMessage && (
                        <div
                            className={`mt-4 p-2 rounded-md ${
                                isSuccess ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                            }`}
                        >
                            {submitMessage}
                        </div>
                    )}
                </div>

                {/* Leaflet Map Section */}
                <div className="w-full md:w-1/2 p-1 border rounded-lg shadow-lg">
                    <MapContainer
                        center={[12.9716, 77.5946]}
                        zoom={13}
                        style={{ width: "100%", height: "400px" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {locations.map((location, index) => (
                            <Marker key={index} position={[location.lat, location.lng]}>
                                <Popup>{location.name}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>

            {/* Office Details Section */}
            
            <div className="w-full p-4 flex flex-col items-center">
  <div className="flex justify-between items-center w-full max-w-3xl">
    {/* WhatsApp Logo on the Left */}
    <div className="flex flex-col items-center">
      <a href="https://chat.whatsapp.com/GirsQbLx1a70k3fH1RhiOy" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" color="green" />

      </a>
      <p className="mt-2 text-gray-700 hover:text-orange-600 transition duration-200">
        <a href="https://chat.whatsapp.com/GirsQbLx1a70k3fH1RhiOy" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
      </p>
    </div>

    {/* Address and Contact Information */}
    <div className="flex flex-col gap-2 text-lg items-center text-center">
      <h3 className="text-3xl font-semibold text-gray-600">Bengaluru Office</h3>
      <a
        href="mailto:connect4society@gmail.com"
        className="hover:text-orange-600 transition duration-200"
      >
        connect4society@gmail.com
      </a>
      <a
        href="tel:+916363059709"
        className="hover:text-orange-600 transition duration-200"
      >
        +91 6363059709
      </a>
      <p className="text-gray-700 hover:text-orange-600">
        #46,KSV nilaya <br />
        Miller’s Road, <br />
        Vasantha Nagar, <br />
        Bangalore-560052
      </p>
    </div>

    {/* Instagram Logo on the Right */}
    <div className="flex flex-col items-center">
      <a href="https://www.instagram.com/connect4society?igsh=MXB3bDhlYzQ4eHZudw==" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="2x" color="purple" />

      </a>
      <p className="mt-2 text-gray-700 hover:text-orange-600 transition duration-200">
        <a href="https://www.instagram.com/connect4society?igsh=MXB3bDhlYzQ4eHZudw==" target="_blank" rel="noopener noreferrer">
          Join Now
        </a>
      </p>
    </div>
  </div>

  <hr className="w-full border-t my-10 border-orange-600" />
</div>

        </div>
    );
};

export default Contact;
