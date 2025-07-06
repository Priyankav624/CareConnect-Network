export const getWishlist = () => {
  return JSON.parse(localStorage.getItem('eventWishlist') || '[]');
};

export const toggleWishlist = (eventId) => {
  let list = getWishlist();
  if (list.includes(eventId)) {
    list = list.filter(id => id !== eventId);
  } else {
    list.push(eventId);
  }
  localStorage.setItem('eventWishlist', JSON.stringify(list));
};

export const isInWishlist = (eventId) => {
  return getWishlist().includes(eventId);
};
