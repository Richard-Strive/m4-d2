import React from "react";
import { Card } from "react-bootstrap";

class CommentList extends React.Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    this.getComment();
  };

  getComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJiY2E2YjBiOTI1ZTAwMTcyOTU2NWMiLCJpYXQiOjE2MDYxNDI1NzIsImV4cCI6MTYwNzM1MjE3Mn0.35iyzavLHuIHm6NXO2hGQWCgAmikhjVVT2kgf69QTac",
            "Content-Type": "appliscation/json",
          },
        }
      );

      const myComments = await response.json();

      if (myComments.length > 0) {
        alert("You have some comments");
        this.setState({ comments: myComments });
      } else {
        alert("NO COMMENTS");
      }
    } catch (error) {
      console.log(error);
    }
  };
  lo;
  render() {
    return (
      <>
        <Card body>Let's go</Card>
      </>
    );
  }
}

export default CommentList;
