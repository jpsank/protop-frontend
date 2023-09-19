import { useState, useEffect } from 'react';


const Search = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=clinvar&term=%7Bpdb_id%7D%5Bgene%5D&retmax=500&retmode=json').then(res => res.json()).then(
        //     data => setData(data)
        // );
        // fetch('https://data.rcsb.org/rest/v1/core/entry/4HHB').then(res => res.json()).then(
        //     data => console.log(data)
        // );
        // fetch('https://knotprot.cent.uw.edu.pl/browse/?raw=1&set=False&bridgeType=probab%2Ccov_ion&knotTypes=%2B31').then(res => res.json()).then(
        //     data => console.log(data)
        // );
    }, []);

    return (
        <>
            <h1>Search</h1>
            <p>Search page body content</p>
        </>
    )
};

export default Search;
