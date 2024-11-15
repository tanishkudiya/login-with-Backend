import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Resizer from 'react-image-file-resizer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal } from 'react-bootstrap';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        profilePicture: '',
        goals: '',
        workoutsCompleted: 0,
        caloriesBurned: 0,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [preview, setPreview] = useState(null); // For image preview
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    const [showModal, setShowModal] = useState(false);

    // Fetch user data from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
            .then((response) => {
                if (response.data) {
                    setUser(response.data);
                    setPreview(response.data.profilePicture); // Set initial preview
                }
            })
            .catch((error) => console.error("Error fetching user data:", error));
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            Resizer.imageFileResizer(
                file,
                300, // width
                300, // height
                "JPEG",
                70, // quality
                0, // rotation
                (uri) => {
                    setPreview(uri);
                    setUser((prevUser) => ({
                        ...prevUser,
                        profilePicture: uri,
                    }));
                },
                "base64"
            );
        }
    };


    // Toggle edit mode
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/user', user)
            .then((response) => {
                setUser(response.data);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error saving user data:", error));
    };

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    // Functions to open and close the modal
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div style={styles.container} className='d-flex justify-content-center border-2px align-items-center flex-column'>
            <h2>{user.name}</h2>
            <div className='d-flex justify-content-center align-items-center flex-column' style={styles.profileSection}>
                {preview ? (
                    <img className='mb-3' src={preview} alt="Profile" style={styles.profilePicture} onClick={toggleModal} />
                ) : (
                    <div style={styles.profilePlaceholder}>No Image</div>
                )}

                {isEditing ? (
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                style={styles.input}
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={user.age}
                                onChange={handleInputChange}
                                style={styles.input}
                            />
                        </label>
                        <label>
                            Goals:
                            <textarea
                                name="goals"
                                value={user.goals}
                                onChange={handleInputChange}
                                style={styles.textarea}
                            />
                        </label>
                        <label>
                            Profile Picture:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={styles.input}
                            />
                        </label>
                        <button type="submit" style={styles.button}>Save</button>
                    </form>
                ) : (
                    <div style={styles.infoSection}>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Goals:</strong> {user.goals}</p>
                        <button onClick={toggleEditMode} style={styles.button}>Edit Profile</button>
                    </div>
                )}
            </div>

            <div style={styles.statsSection}>
                <h3>Workout Stats</h3>
                <p><strong>Workouts Completed:</strong> {user.workoutsCompleted}</p>
                <p><strong>Calories Burned:</strong> {user.caloriesBurned} kcal</p>
            </div>
        </div>

    );
    //   {/* Modal for Enlarged Image */ }
    {
        isModalOpen && (
            <div style={styles.modal} onClick={toggleModal}>
                <img
                    src={preview}
                    alt="Enlarged Profile"
                    style={styles.enlargedImage}
                />
            </div>
        )
    }
};

// Define your styles here

// const styles = {
//     card: { width: '18rem', cursor: 'pointer', margin: '1rem' },
//     cardImage: { height: '150px', objectFit: 'cover' },
//     modalCard: { width: '100%' },
//     modalImage: { height: '250px', objectFit: 'cover' },



const styles = {
    container: { padding: '20px', backgroundColor: '#f1f1f1' },
    profileSection: { marginBottom: '20px' },
    profilePicture: { width: '100px', height: '100px', borderRadius: '50%' },
    profilePlaceholder: { width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    form: { display: 'flex', flexDirection: 'column' },
    input: { marginBottom: '10px' },
    textarea: { marginBottom: '10px' },
    button: { padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' },
    infoSection: { padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' },
    statsSection: { padding: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px' },

    //   Modal Styles
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    enlargedImage: {
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '10px',
    },
};

export default UserProfile;
