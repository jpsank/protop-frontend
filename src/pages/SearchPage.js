import {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import DataDisplay from '../components/SearchPage/DataDisplay';

const SearchPage = () => {

    const [data, setData] = useState(null);
    const [pdbId, setPdbId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        await fetchData(pdbId);
        setIsLoading(false);
    }

    const fetchData = async (pdbId) => {
        let endpoint = `http://127.0.0.1:8000/getProteinData?pdbID=${pdbId}`
        let response = await axios.get(endpoint)
        let data = response.data
        setData(data)
    }

    return (
        <Container className="my-5 mx-sm-5 mx-0">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <div className="input-group">
                        <Form.Control 
                            type="text" 
                            placeholder="Enter PDB ID" 
                            value={pdbId} 
                            onChange={(e) => setPdbId(e.target.value)} 
                            className="rounded-0"
                        />
                        <div className="input-group-append">
                            <Button variant="outline-secondary" type="submit" className="rounded-0">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form.Group>
            </Form>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {data ? (
                        <DataDisplay data={data} />
                    ) : null}
                </>
            )}
        </Container>
    )
};

export default SearchPage;
