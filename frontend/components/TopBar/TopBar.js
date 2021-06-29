import { Container, Grid, Image, Input, Menu } from "semantic-ui-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <Menu borderless className="top-bar">
            <Menu.Item>
                <Link href="/">
                    <a>
                        <Image size="tiny" src="/gaming.png" alt="Gaming" />
                    </a>
                </Link>
            </Menu.Item>

            <Menu.Menu position='right'>
                <Link href="/test">
                    <a className="item">Project Name</a>
                </Link>
                <Menu.Item as='a'>Blog</Menu.Item>
                <Menu.Item as='a'>Articles</Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};
