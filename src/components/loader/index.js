import { Loading } from 'notiflix/build/notiflix-loading-aio';

// Show loader function
export const showLoader = () => {
Loading.arrows();
};

// Hide loader function
export const hideLoader = () => {
  Loading.remove();
};

// Loader component (if needed)
const Loader = () => {
  return null; 
};

export default Loader; 
