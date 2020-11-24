import React from "react";
import CommentList from "./CommentList";

import { Modal, Button, Card, Col } from "react-bootstrap";

class CommentArea extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onClose}
          className="d-flex justify-content-center"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.book.title}</Modal.Body>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="text-center">
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Text>{this.props.book.asin}</Card.Text>
            </Card>
          </Col>
          <CommentList asin={this.props.book.asin} />
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="secondary" onClick={this.props.onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CommentArea;
