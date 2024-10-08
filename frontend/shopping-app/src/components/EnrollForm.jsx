import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EnrollForm({ onSearch }) {
    const [formData, setFormData] = useState({
        searchterm: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (onSearch) onSearch(formData.searchterm);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} className="d-flex">
                <Form.Control
                    type="text"
                    placeholder="Search"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <p>Search Products</p>
        </div>
    );
}

export default EnrollForm;
