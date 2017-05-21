import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './Photo.css';

class Photo extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        photoId: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        onChangeRating: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.setState({ nodeInfo: ReactDOM.findDOMNode(this).getBoundingClientRect() });
    }

    handleChangeRating(event) {
        event.preventDefault();
        this.props.onChangeRating(event.type, this.props.photoId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState) {
            let domNode = ReactDOM.findDOMNode(this);
            let newNodeInfo = domNode.getBoundingClientRect();
            let oldNodeInfo = prevState.nodeInfo;

            if (prevProps.index !== this.props.index) {
                domNode.style.transform = `translate(${oldNodeInfo.left - newNodeInfo.left}px, 
                    ${oldNodeInfo.top - newNodeInfo.top}px)`;
                domNode.style.transition = '';
                domNode.style.pointerEvents = 'none';

                this.setState({ nodeInfo: newNodeInfo });

                setTimeout(() => {
                    domNode.style.transform = '';
                    domNode.style.transition = 'all 1000ms';
                });

                setTimeout(() => {
                    domNode.style.pointerEvents = 'auto';
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div onClick={this.handleChangeRating} onContextMenu={this.handleChangeRating}
                className="photo-galery__card">
                <div className="card__rating">{this.props.rating}</div>
                <img src={this.props.src} alt={this.props.alt} className="card__photo" />
            </div>
        );
    }
}

export default Photo;
