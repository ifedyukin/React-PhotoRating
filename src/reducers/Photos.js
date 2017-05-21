import photos from '../configs/Photos.js';

function _generateDefaultState(photos) {
  return photos.map((photo, index) => ({
    id: index + 1, src: photo, alt: `Photo${index + 1}`, rating: 0
  }));
}

export default (state = _generateDefaultState(photos), action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(photo =>
        photo.id === action.id ? { ...photo, rating: photo.rating + 1 } : photo);
    case 'DECREMENT':
      return state.map(photo =>
        photo.id === action.id ? { ...photo, rating: photo.rating - 1 } : photo);
    default:
      return state
  }
}
