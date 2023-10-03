import {useState, useEffect} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const SearchPage = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let corsAnywhere = 'https://mighty-brushlands-86895-994b68372246.herokuapp.com/'

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function fetchClinvar() {
        setIsLoading(true);
        fetch(`${corsAnywhere}https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=clinvar&term=FGFR3[gene]&retmax=3&retmode=json`).then(res => res.json()).then(
            async (data) => {
                let firstFive = data.esearchresult.idlist;
                let firstTenSummaries = [];
                
                for(let i = 0; i < firstFive.length; i++) {
                    let id = firstFive[i];
                    let res = await axios.get(`${corsAnywhere}https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=clinvar&id=${id}&retmode=json`)
                    firstTenSummaries.push(res.data.result[id])
                    await sleep(300); // Avoid rate limiting
                }  
                setData(firstTenSummaries)
                setIsLoading(false);
            }
        );
    }
    
    useEffect(() => {

        fetchClinvar()
        
        // fetch('https://data.rcsb.org/rest/v1/core/entry/4HHB').then(res => res.json()).then(
        //     data => console.log(data)
        // );
        // fetch('https://knotprot.cent.uw.edu.pl/browse/?raw=1&set=False&bridgeType=probab%2Ccov_ion&knotTypes=%2B31').then(res => res.json()).then(
        //     data => console.log(data)
        // );
    }, []);

    return (
        <Container className="my-5 mx-sm-5 mx-0">
            <h1>Search</h1>
            <h2> Clinvar </h2>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Clinical Significance</th>
                            <th>Object Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item) => (
                            <tr key={item.uid}>
                                <td>{item.uid}</td>
                                <td>{item.clinical_significance.description}</td>
                                <td>{item.obj_type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </Container>
    )
};

export default SearchPage;
            
