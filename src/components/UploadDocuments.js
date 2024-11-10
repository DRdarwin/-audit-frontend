import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function UploadDocument() {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логіка завантаження документа
        console.log('Uploading:', title, file);
    };

    return (
        <Container className="mt-4">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Document Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>File</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Upload
                </Button>
            </Form>
        </Container>
    );
}

export default UploadDocument;
