import { Container } from "semantic-ui-react";
import Header from "../../components/Header";

export default function BasicLayout({ children }) {
    return (
        <Container fluid className="basic-layout">
            <Container>
            </Container>
                <Header/>

            <Container className="content">
                { children }
                Basic layout
            </Container>
        </Container>
    );
};
