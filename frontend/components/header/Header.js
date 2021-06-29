import { Container } from "semantic-ui-react";
import TopBar from "../TopBar/TopBar";

export default function Header() {
    return (
        <Container className="header">
            <TopBar/>
        </Container>
    );
};
