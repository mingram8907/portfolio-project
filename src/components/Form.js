import { useState } from "react";
import {Form as BForm, Button, Container} from 'react-bootstrap'

function Form(props) {
    const { movieSearch, setMovie } = props;
    //  formData is an object
    const [formData, setFormData] = useState({searchTerm: ""})  
    
    //  handle change on the input
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    // handle the on submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await movieSearch(formData.searchTerm);
        setMovie(data)
    }

    return (
        <Container className="mt-3">
            <BForm onSubmit={handleSubmit}>
                <BForm.Group className="mb-3">
                    <BForm.Control
                        className="mb-3"
                        type="text" 
                        placeholder="What's your favorite movie?" 
                        value={formData.searchTerm} 
                        name="searchTerm" 
                        onChange={handleChange}
                        required
                    />

                    <Button variant="info" type="submit">Search</Button>
                </BForm.Group>
            </BForm>
        </Container>
    );
}

export default Form;