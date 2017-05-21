import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Galery from '../../components/Galery/Galery.jsx';
import './PhotoRating.css';

class PhotoRating extends Component {
  static propTypes = {
    photoLibrary: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      })
    ).isRequired,
    onIncrementRating: PropTypes.func.isRequired,
    onDecrementRating: PropTypes.func.isRequired
  }

  handleChangeRating(type, id) {
    if (type === 'click') {
      this.props.onIncrementRating(id);
    } else if (type === 'contextmenu') {
      this.props.onDecrementRating(id);
    }
  }

  render() {
    return (
      <div id="photo-rating">
        <h1 className="photo-rating__title">PhotoRating React App</h1>
        <Galery
          photoLibrary={this.props.photoLibrary}
          onChangeRating={this.handleChangeRating.bind(this)}>
        </Galery>
      </div>
    );
  }
}

export default connect(
  store => ({
    photoLibrary: store.sort(
      (photo1, photo2) => photo2.rating - photo1.rating)
  }),
  dispatch => ({
    onIncrementRating: (photoId) => {
      dispatch({ type: 'INCREMENT', id: photoId })
    },
    onDecrementRating: (photoId) => {
      dispatch({ type: 'DECREMENT', id: photoId })
    }
  })
)(PhotoRating);
