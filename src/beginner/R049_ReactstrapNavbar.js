import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class R049_ReactstrapNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-auto" />
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://example.com/">200</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                
            </div>
        );
    }
}

export default R049_ReactstrapNavbar;