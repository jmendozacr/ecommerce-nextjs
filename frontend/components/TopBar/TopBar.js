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
                <Menu.Item>
                    <Input
                        id="searc-game"
                        icon={{name: "search"}}
                        placeholder="search game"
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/test">
                        <a>Project Name</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Articles">
                        <a>Articles</a>
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};
