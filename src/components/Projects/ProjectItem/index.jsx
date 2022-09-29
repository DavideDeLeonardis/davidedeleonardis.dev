import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../../ui/CardPortal';
import Button from '../../ui/Button';
import SeeDemoGitHubButtons from '../../ui/SeeDemoGitHubButtons';
import default_image from '../../../assets/images/default.png';

import classes from '../index.module.scss';

const ProjectItem = ({ project, isMain }) => {
   const [details, setDetails] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const { t } = useTranslation();

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

   const setIsLoadedHandler = () => setIsLoaded(true);

   // Display topics and languages
   const displayMaps = (array, className) => {
      return project[array].map((element, key) => (
         <li
            key={key}
            className={`${className} ${
               project[array].length > 1 && classes.slash
            }`}
         >
            {array === 'languages' ? (
               <>{element.toUpperCase()}&nbsp;&nbsp;</>
            ) : (
               element
            )}
         </li>
      ));
   };

   // All projects' info
   const projectInfo = (
      <div className={classes['info-container']}>
         {!isMain && <h2>{project.name}</h2>}

         <p>
            <Trans
               components={{
                  technicals: <span className={classes['d-technicals']} />,
                  blue: <span className="blue" />,
               }}
            >
               {project.description}
            </Trans>
         </p>

         <ul className={classes['topic-container']}>
            {displayMaps('topics', classes.topic)}
         </ul>

         <div className={classes['project-bottom']}>
            {isMain || project.hasDetails ? (
               // Show details main projects button
               <div className={classes['project-links']}>
                  <Link to={`/projects/${project.name}`} state={project}>
                     <Button>
                        {t('projects.show_details')}
                        <FontAwesomeIcon
                           className={classes.icon}
                           icon="fa-solid fa-arrow-up-right-from-square"
                        />
                     </Button>
                  </Link>
               </div>
            ) : (
               <div className={classes['project-links']}>
                  {/* Buttons see demo and see gitHub */}
                  <SeeDemoGitHubButtons
                     project={project}
                     className={classes.icon}
                  />
               </div>
            )}

            {!isMain && (
               // Close details other project button
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
      if (
         project.id === 521026706 /* portfolio */ ||
         project.id === 34117123 /* custom-select */
      )
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
                  backgroundImage: `url('${project.image || default_image}')`,
                  backgroundPosition: getPosition(),
               }}
            ></div>
            {projectInfo}
         </div>
      </CardPortal>
   );

   const languages = (
      <ul className={classes.lang}>{displayMaps('languages')}</ul>
   );

   // Animation fade on scroll
   const callback = (items) => {
      items.forEach((item) => {
         if (item.isIntersecting) item.target.classList.add(classes['in-page']);
         // else item.target.classList.remove(classes['in-page']);
      });
   };

   let observer = new IntersectionObserver(callback, { threshold: 0.25 });

   document
      .querySelectorAll('.watch')
      .forEach((element) => observer.observe(element));
   // / Animation fade on scroll

   return (
      <>
         <li
            className={
               isMain
                  ? `${classes['main-project']} watch`
                  : classes['other-project']
            }
         >
            <div className={classes['card-content']}>
               {isMain && project.isFeatured && (
                  <span className={classes.featured}>Featured</span>
               )}

               <h2
                  className={
                     !isMain && project.name.length >= 18
                        ? classes['decrease-font']
                        : null
                  }
               >
                  {project.name}
               </h2>

               {isMain ? (
                  <>
                     <div className={classes.language}>
                        <span>
                           {project.languages.length <= 1
                              ? t('main_projects.main_ls')
                              : t('main_projects.main_lp')}
                        </span>
                        {languages}
                     </div>
                     {projectInfo}
                  </>
               ) : (
                  <>
                     {languages}
                     <Button
                        className={classes['learn-more']}
                        onClick={showDetailsHandler}
                     >
                        {t('other_projects.learn_more')}
                     </Button>
                  </>
               )}
            </div>

            <div
               className={`
						${classes['img-container']}
						${isMain && 'gray-image'}
					`}
               style={
                  project.id === 521026706 /* Id project portfolio V-1.0 */
                     ? { border: '1px solid #646464' }
                     : null
               }
            >
               <img
                  src={
                     isLoaded ? project.image || default_image : default_image
                  }
                  alt={`${project.name} project from Davide De Leonardis`}
                  onLoad={setIsLoadedHandler}
               />
            </div>
         </li>

         {/* Details portal */}
         {details && detailsElement}
      </>
   );
};

export default ProjectItem;
