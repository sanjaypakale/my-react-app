// RegistrationForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../common-components/ConfirmationDialog'

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleShowConfirmation = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleConfirmSubmission = () => {
        setShowConfirmation(false);
        // Proceed with form submission
        handleSubmit();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        // e.preventDefault();
        // Basic form validation
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // API call to submit user data (replace 'YOUR_API_ENDPOINT' with your actual endpoint)
        try {
            //const response = await axios.post('YOUR_API_ENDPOINT', formData);

            //console.log('User registered successfully:', response.data);

            // Handle success, e.g., redirect to a new page
            navigate('/home', { state: { userData: formData } });
        } catch (error) {
            console.error('Error registering user:', error);
            // Handle error, e.g., display an error message to the user
        }
    };

    return (
        <div className='container row col-5'>
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleShowConfirmation();
            }}>
                <Form.Group controlId="username" className='label'>
                    <Form.Label className='label'>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className='textbox'
                        isInvalid={errors.username}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email" className='label'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='textbox'
                        isInvalid={errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password" className='label'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='textbox'
                        isInvalid={errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="confirmPassword" className='label'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='textbox'
                        isInvalid={errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                    </Form.Control.Feedback>
                </Form.Group>
                <div style={{ textAlign: 'left', marginTop: '10px' }}>
                    <Button variant="primary" type="submit" >
                        Register
                    </Button>
                    <Button variant='secondary' type='button' style={{ marginLeft: '10px' }}>
                        Cancel
                    </Button>
                </div>
                <ConfirmationDialog
                    show={showConfirmation}
                    handleClose={handleCloseConfirmation}
                    handleConfirm={handleConfirmSubmission}
                />
            </Form>
        </div>
    );
};

export default RegistrationForm;
