import React, { Component } from "react";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import CommentArea from "./CommentArea";

import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";

class LatesRelease extends Component {
  state = {
    listLibri: history,
    selectedBook: {},
    displayComments: false,
  };

  showComments = (book) => {
    this.setState({ selectedBook: book, displayComments: true });
  };

  render() {
    console.log(this.state);

    return (
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => this.setState({ listLibri: fantasy })}
            >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.setState({ listLibri: history })}
            >
              History
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ listLibri: horror })}>
              horror
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => this.setState({ listLibri: romance })}
            >
              romance
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.setState({ listLibri: scifi })}>
              scifi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <CommentArea
          book={this.state.selectedBook}
          show={this.state.displayComments}
          onClose={() => this.setState({ displayComments: false })}
        />

        <Row>
          {this.state.listLibri.map((book, key) => (
            <Col xs={4} className="my-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title> {book.title} </Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.showComments(book)}
                  >
                    See commments
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatesRelease;
