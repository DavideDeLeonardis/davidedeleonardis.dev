import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './_arrow-up-portal.scss';

const ArrowUp = () => {
   return (
      <a href="#page-top" className="arrow-up-scroll">
         <FontAwesomeIcon icon="angle-up" />
         <FontAwesomeIcon icon="angle-up" />
      </a>
   );
};

export default ArrowUp;
