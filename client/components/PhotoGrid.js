import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} i={index} post={post} {...this.props} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
