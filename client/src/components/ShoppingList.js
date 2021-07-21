import React, { Component } from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";
import {
    CSSTransition,
    TransitionGroup
} from "react-transition-group";
import { v1 as uuid } from "uuid";

class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                { id: uuid(), name: "Computer" },
                { id: uuid(), name: "iPod" },
                { id: uuid(), name: "Laptop" },
                { id: uuid(), name: "iPhone" },
                { id: uuid(), name: "Kindle" }
            ]
        }
    }

    render() {
        const { items } = this.state;

        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt('Add new item!');
                        if (name) {
                            this.setState(state => ({
                                items: [...items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >
                    Add
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.map(({ id, name }) => (
                            <CSSTransition
                                classNames="fade"
                                key={ id }
                                timeout={ 500 }
                            >
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={ () => {
                                            this.setState(state => ({
                                                items: items.filter(item => item.id !== id)
                                            }));
                                        } }
                                    >&times;</Button>
                                    { name }
                                </ListGroupItem>
                            </CSSTransition>
                        )) }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;
