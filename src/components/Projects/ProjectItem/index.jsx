import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../../ui/CardPortal';
import Button from '../../ui/Button';
import { repos } from '../../../assets/config/reposImages';
import { languageColors } from '../../../assets/config/languageColors';
import default_image from '../../../assets/images/default.png';

import classes from '../index.module.scss';

const ProjectItem = ({ repo, isMain }) => {
   const [details, setDetails] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);

   const showDetailsHandler = () => {
      setDetails(true);
      setScaleDown(false);
   };

   const hideDetailsHandler = () => {
      // time for scale down animation to complete
      setTimeout(() => {
         setDetails(false);
      }, 150);
      setScaleDown(true);
   };

   // If GitHub repo's name starts with PHP or other
   const transformedName = () => {
      if (repo.name.startsWith('php')) {
         return `
				${repo.name.charAt(0).toUpperCase()}
				${repo.name.charAt(1).toUpperCase()}
				${repo.name.charAt(2).toUpperCase()}
				${repo.name.slice(3).replace('-', ' ')}
			`;
      } else {
         return (
            repo.name.charAt(0).toUpperCase() +
            repo.name.slice(1).replaceAll('-', ' ')
         );
      }
   };

   // Function for taking repo's image or language
   const getProperties = (array) => {
      for (let index = 0; index < array.length; index++) {
         // eslint-disable-next-line default-case
         switch (array) {
            case repos:
               if (array[index].id === repo.id) return array[index].image;
               break;
            case languageColors:
               if (array[index].language === repo.language)
                  return array[index].color;
               break;
         }
      }
   };

   // Get image
   const image = getProperties(repos);

   // Get language
   // const languageColor = getProperties(languageColors);

   // Project's topics
   const topics = repo.topics.map((topic, index) => (
      <li key={index} className={classes.topic}>
         {topic}
      </li>
   ));

   // All projects' info
   const projectInfo = (
      <div className={classes['info-container']}>
         {!isMain && <h2>{transformedName()}</h2>}

         <p>{repo.description}</p>

         <ul className={classes['topic-container']}>{topics}</ul>

         <div className={classes['project-bottom']}>
            <div className={classes['project-links']}>
               {repo.homepage !== '' &&
                  repo.id !== 521026706 /* Id repo portfolio V-1.0 */ && (
                     <a href={repo.homepage} target="_blank" rel="noreferrer">
                        <Button>
                           See Demo
                           <FontAwesomeIcon
                              className={classes.icon}
                              icon="fa-solid fa-arrow-up-right-from-square"
                           />
                        </Button>
                     </a>
                  )}

               <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <Button>
                     See on GitHub
                     <FontAwesomeIcon
                        className={classes.icon}
                        icon="fa-brands fa-github"
                     />
                  </Button>
               </a>
            </div>

            {!isMain && (
               <button onClick={hideDetailsHandler}>
                  <FontAwesomeIcon
                     className={classes['info-close']}
                     icon="fa-solid fa-xmark"
                  />
               </button>
            )}
         </div>
      </div>
   );

   // Background position other projects' details
   const getPosition = () => {
      if (repo.id === 521026706 /* Id repo portfolio V-1.0 */)
         return 'center center';
      return 'top center';
   };

   // Other project's details
   const detailsElement = (
      <CardPortal
         backdropIsShown={details}
         onClose={hideDetailsHandler}
         scaleDown={scaleDown}
      >
         <div className={classes['details-container']}>
            <div
               className={classes['img-container']}
               style={{
                  backgroundImage: `url('${image || default_image}')`,
                  backgroundPosition: getPosition(),
               }}
            ></div>
            {projectInfo}
         </div>
      </CardPortal>
   );

   return (
      <>
         <li
            className={
               isMain ? classes['main-project'] : classes['other-project']
            }
         >
            <div className={classes['card-content']}>
               {isMain && repo.fork && (
                  <span className={classes.featured}>Featured</span>
               )}

               <h2
                  className={
                     !isMain && transformedName().length >= 18
                        ? classes['decrease-font']
                        : null
                  }
               >
                  {transformedName()}
               </h2>

               {isMain && (
                  <>
                     <div className={classes.language}>
                        <span>Main language:</span>
                        <span className={classes.lang}>
                           {repo.language}
                           {/* {!isMain && (
                           <span
                              className={classes['color-language']}
                              style={{
                                 backgroundColor: languageColor || `#000000`,
                              }}
                           ></span>
                        )} */}
                        </span>
                     </div>
                     {projectInfo}
                  </>
               )}

               {!isMain && (
                  <>
                     <br />
                     <Button
                        className={classes['learn-more']}
                        onClick={showDetailsHandler}
                     >
                        Learn More
                     </Button>
                  </>
               )}
            </div>

            <div
               className={`
						${classes['img-container']}
						${isMain && 'gray-image'}`}
               style={
                  repo.id === 521026706 /* Id repo portfolio V-1.0 */
                     ? { border: '1px solid #646464' }
                     : null
               }
            >
               <img
                  src={image || default_image}
                  alt={`${transformedName()} project from Davide De Leonardis`}
               />
            </div>
         </li>

         {/* Details portal */}
         {details && detailsElement}
      </>
   );
};

export default ProjectItem;
