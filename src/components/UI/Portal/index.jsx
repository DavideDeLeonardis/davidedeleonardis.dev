import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
   return ReactDOM.createPortal(children, document.getElementById('overlays'));
};

export default Portal;
