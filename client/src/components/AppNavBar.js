import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

class AppNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar
                className="mb-5"
                    color="dark"
                    dark
                    expand="sm"
                >
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={ this.toggle } />
                        <Collapse
                            isOpen={ this.state.isOpen }
                            navbar 
                        >
                            <Nav
                                className="ms-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="https://github.com/hosamelshazly92/Shopping-List">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default AppNavBar;
