import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = ({ credentials }) => {
    const [participantNameForQRCode, setParticipantNameForQRCode] = useState('');
    const [participantNameForCertificate, setParticipantNameForCertificate] = useState('');
    const [certificateFile, setCertificateFile] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [loadingContacts, setLoadingContacts] = useState(true);
    const [errorContacts, setErrorContacts] = useState(null);
    const [title, setTitle] = useState('');
    const [sections, setSections] = useState([]);
    const [authorName, setAuthorName] = useState('');
    const [image, setImage] = useState(null);
    const [errorPost, setErrorPost] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch contacts
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                // const response = await fetch('http://localhost:8080/admin/contact/all');
                const response = await fetch('http://localhost:8080/admin/contact/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${credentials}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                setErrorContacts(error.message);
            } finally {
                setLoadingContacts(false);
            }
        };

        fetchContacts();
    }, []);

    // Handle certificate upload
    const handleCertificateUpload = async () => {
        if (!participantNameForCertificate || !certificateFile) {
            alert("Please provide both participant name and certificate file.");
            return;
        }

        const formData = new FormData();
        formData.append('participantName', participantNameForCertificate);
        formData.append('certificate', certificateFile);

        try {
            await axios.post('http://localhost:8080/admin/uploadCertificate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Basic ${credentials}`
                }
            });
            alert('Certificate uploaded successfully');
        } catch (error) {
            console.error('Error uploading certificate', error);
            alert('Failed to upload certificate.');
        }
    };

    // Handle QR code generation
    const handleQRCodeGeneration = async () => {
        if (!participantNameForQRCode) {
            alert("Please provide a participant name.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:8080/admin/generateQRCode', {
                participantName: participantNameForQRCode 
            }, {
                headers: {
                    'Authorization': `Basic ${credentials}`
                }
            });
            alert('QR Code generated: ' + response.data);
        } catch (error) {
            console.error('Error generating QR Code', error);
            alert('Failed to generate QR Code.');
        }
    };

    // Handle adding post sections
    const handleAddSection = () => {
        setSections([...sections, { heading: '', content: '' }]);
    };

    const handleSectionChange = (index, field, value) => {
        const newSections = [...sections];
        newSections[index][field] = value;
        setSections(newSections);
    };

    const handleSubmitPost = async (e) => {
        e.preventDefault();

        if (!title || !authorName) {
            setErrorPost('Title and author name are required.');
            return;
        }

        setErrorPost(''); // Clear existing errors
        setSuccessMessage('');

        const content = sections.length ? JSON.stringify(sections) : null; // Optional content
        const postData = new FormData();
        postData.append('title', title);
        postData.append('authorName', authorName);
        if (content) postData.append('content', content);
        if (image) postData.append('image', image);

        try {
            await axios.post('http://localhost:8080/admin/addPost', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Basic ${credentials}`
                },
            });
            setSuccessMessage('Post submitted successfully.');
            setTitle('');
            setSections([]);
            setImage(null);
            setAuthorName('');
        } catch (error) {
            setErrorPost('Failed to submit post. Please try again.');
        }
    };

    return (
        <div className="admin-container">
            <h1 className="admin-title">Admin Page</h1>

            {/* QR Code Generation Section */}
            <div className="section">
                <h2>Generate QR Code</h2>
                <input
                    type="text"
                    placeholder="Participant Name for QR Code"
                    value={participantNameForQRCode}
                    onChange={(e) => setParticipantNameForQRCode(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleQRCodeGeneration} className="button">Generate QR Code</button>
                
                <hr className="divider" />
                
                {/* Certificate Upload Section */}
                <h2>Upload Certificate</h2>
                <input
                    type="text"
                    placeholder="Participant Name for Certificate"
                    value={participantNameForCertificate}
                    onChange={(e) => setParticipantNameForCertificate(e.target.value)}
                    className="input-field"
                />
                <input
                    type="file"
                    onChange={(e) => setCertificateFile(e.target.files[0])}
                    className="file-input"
                />
                <button onClick={handleCertificateUpload} className="button">Upload Certificate</button>
            </div>

            <hr className="divider" />

            {/* Admin Contacts Section */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h1>
            {loadingContacts ? (
                <div>Loading...</div>
            ) : errorContacts ? (
                <div>Error: {errorContacts}</div>
            ) : (
                <div>
                    {contacts.length === 0 ? (
                        <p>No contacts available.</p>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 break-words" style={{ maxWidth: '200px' }}>{contact.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}

            <hr className="divider" />

            {/* Admin Post Form Section */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Create New Post</h1>
            <form onSubmit={handleSubmitPost}>
                {errorPost && <p className="text-red-500">{errorPost}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author Name</label>
                    <input
                        type="text"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Author Name"
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>

                {sections.map((section, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Section {index + 1}</label>
                        <input
                            type="text"
                            value={section.heading}
                            onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                            placeholder="Heading"
                            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <textarea
                            value={section.content}
                            onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                            placeholder="Content"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleAddSection}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Add Section
                </button>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Image (optional)</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full text-gray-700"
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    Submit Post
                </button>
            </form>
        </div>
    );
};

export default AdminPage;
