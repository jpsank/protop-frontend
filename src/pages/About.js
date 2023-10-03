import { Container } from "react-bootstrap";

const Contact = () => {
    return (
        <Container className="my-5 mx-sm-5 mx-0">
            <h3>About ProTop</h3>
            <p>This is a protein research software developed during CPSC 439/549 - Software Engineering at Yale University.</p>
            <p>Structural biologists currently face a fragmented landscape of information sources and tools. ProTop is a web application that aims to provide a centralized platform for protein research. It will allow users to search for proteins by name or ID and visualize and edit their structures collaboratively. It will also provide a catalog of knotted proteins and a deep learning model for predicting knottedness.</p>
            <p>Team members: Anna Su, Jason Apostol, Julian Sanker, Daniel Zuo, Lily Cai.</p>
        </Container>
    );
};

export default Contact;
