import { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
        }));
      },

      handleDislike: () => {
        //state block
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
        }));
      },
    };
  }
  //can also be ouside the state block
  render() {
    const ratingTotal = this.state.likes + this.state.dislikes;
    return (
      <>
        <div className="content-rating">
          <p className="textbox">
            This is a React Class-based component, it contains a like and
            dislike button that updates the state when clicked. This component
            will be packaged as a dockerfile and shipped to docker hub. This is
            an example of a micro service in a very small application.
          </p>
          <div className="rating-button">
            <button className="like-button" onClick={this.state.handleLike}>
              Like: {this.state.likes}
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike: {this.state.dislikes}
            </button>
            <p className="textbox">Total Rating: {ratingTotal}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
