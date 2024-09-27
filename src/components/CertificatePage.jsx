import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CertificatePage.css'; 

const CertificatePage = () => {
    const { participantName } = useParams();
    const [certificate, setCertificate] = useState(null);
    const navigate=useNavigate();
   
    useEffect(() => {
        // Fetch certificate data when the component loads
        const fetchCertificate = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/certificates/${participantName}`,
                    
                );
                setCertificate(response.data);
            } catch (error) {
                console.error('Error fetching certificate', error);
            }
        };

        fetchCertificate();
    }, [participantName]);

    if (!certificate) {
        return <div>Loading...</div>;
    }

    return (
        <div className="certificate-container">
           

            <h1><b>The certificate has been successfully verified.<br />
             We are pleased to formally acknowledge that {participantName} has been an integral part of the Connect4Society team, actively contributing to impactful social initiatives.<br /> 
             Their dedication to community service and involvement in noteworthy projects is detailed in the certificate provided below.</b></h1>
            {certificate.map((certificate,index)=>
            (
                <div key={index} className="certificate-wrapper">
                    <img src={certificate.certificateUrl} alt={`Certificate ${index + 1}`} />

                    </div>
            ))}
             {/* Add Back button */}
             <button className="back-button" onClick={() => navigate('/')}>
                Back to Home
            </button>
        </div>
    );
};

export default CertificatePage;
