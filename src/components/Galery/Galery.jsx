import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from '../../components/Photo/Photo.jsx';
import './Galery.css';

class PhotoGalery extends Component {
    static propTypes = {
        photoLibrary: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired
            })
        ).isRequired,
        onChangeRating: PropTypes.func.isRequired
    }

    render() {
        return (
            <div id="photo-galery">
                {this.props.photoLibrary.map((item, index) =>
                    <Photo
                        src={item.src}
                        alt={item.alt}
                        rating={item.rating}
                        key={item.id}
                        photoId={item.id}
                        index={index}
                        onChangeRating={this.props.onChangeRating}>
                    </Photo>
                )}
            </div>
        );
    }
}

export default PhotoGalery;
