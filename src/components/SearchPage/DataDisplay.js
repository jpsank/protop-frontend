import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const DataDisplay = ( {data} ) => {

    const pdb = data.pdb;
    const uniprot = data.uniprot[0];  // Assuming only one uniprot entry for simplicity

    return (
        <div className="container mt-5">
            <Card>
                <Card.Header><strong>PDB Entry: {pdb.id}</strong></Card.Header>
                <Card.Body>
                    <Card.Title>{pdb.desc}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>DOI:</strong> {pdb.prim_doi}</ListGroup.Item>
                        <ListGroup.Item><strong>Keywords:</strong> {pdb.keywords}</ListGroup.Item>
                        <ListGroup.Item><strong>Organisms:</strong> {pdb.organisms.join(', ')}</ListGroup.Item>
                        <ListGroup.Item><strong>Authors:</strong> {pdb.authors.join(', ')}</ListGroup.Item>
                        <ListGroup.Item><strong>Method:</strong> {pdb.method}</ListGroup.Item>
                        <ListGroup.Item><strong>Resolution:</strong> {pdb.resolution}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card className="mt-4">
                <Card.Header><strong>UniProt Entry: {uniprot.id}</strong></Card.Header>
                <Card.Body>
                    <Card.Title>{uniprot.protein}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Gene:</strong> {uniprot.gene}</ListGroup.Item>
                        <ListGroup.Item><strong>Organism:</strong> {uniprot.organism}</ListGroup.Item>
                        <ListGroup.Item><strong>Sequence Length:</strong> {uniprot.length}</ListGroup.Item>
                        <ListGroup.Item><strong>Sequence:</strong> <div style={{wordBreak: "break-all"}}>{uniprot.sequence}</div></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DataDisplay;
