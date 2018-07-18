import React from 'react';

export default class Comments extends React.Component {
  state = {
    author: '',
    comment: ''
  };

  renderComment = (comment, i) => {
    const { postId } = this.props.params;
    return (
      <div key={i} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => this.props.removeComment(postId, i)}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };

  handleInputChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { postId } = this.props.params;
    this.props.addComment(postId, this.state.author, this.state.comment);
    this.setState({
      author: '',
      comment: ''
    });
  };

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) =>
          this.renderComment(comment, i)
        )}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            ref="author"
            placeholder="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            ref="comment"
            placeholder="comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
