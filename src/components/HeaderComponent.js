import React, { Component } from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Card, CardHeader, CardText, CardTitle, Modal, ModalHeader,
    ModalBody, Button, FormGroup, Label, Form, Input, ModalFooter
} from "reactstrap";
// import {Jumbotron} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin(event){
           this.toggleModal();
           alert("username "+this.username.value+"password "+this.password.value+"Remeber me "+this.remember.checked)
           event.preventDefault();
    }
    render() {
        return (
            <>

                <Navbar dark expand="md">    {/* //expand md => md to large navbar will be fully expanded */}
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" className="mr-auto">
                            <img src="assets/images/logo.png" height="30" width="50" alt="Ristronet con fusion"></img>
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-list fa-lg"></span> About us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-info fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in" ></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Card style={{ background: "#9575CD" }}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <CardTitle style={{ fontSize: 50 }}> Ristorante Con Fusion </CardTitle>
                                <CardText>
                                    We take inspiration from te World's best cuisines, and create a unique
                                    fusion experience. Our lipsmacking creations
                                    will ti ckle your culinary senses!
                                </CardText>
                            </div>
                        </div>
                    </div>
                </Card>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className={this.props.className}>
               
                    <ModalHeader toggle={this.toggleModal}  class="close" aria-label="Close">Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" 
                                innerRef={(input) => this.username=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword"
                                innerRef={(input) => this.password=input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember=input}/>{' '}
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" onClick={this.handleLogin} color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
export default HeaderComponent;