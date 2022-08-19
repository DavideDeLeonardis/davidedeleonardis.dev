import { Fragment } from 'react';

import { repos } from '../../assets/config/repos';
import * as ignoredRepos from '../../assets/config/ignoredRepos';
import { languageColors } from '../../assets/config/languageColors';
import default_image from '../../assets/images/default.png';

import classes from '../../assets/scss/partials/_projects.module.scss';

const ProjectItem = ({ repo, isMain }) => {
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
            repo.name.slice(1).replace('-', ' ')
         );
      }
   };

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

   const image = getProperties(repos);

   const languageColor = getProperties(languageColors);

   const topics = repo.topics.map((topic, index) => (
      <li key={index}>{topic}</li>
   ));

   return (
      <li className={isMain ? classes['main-p'] : classes['other-p']}>
         - {transformedName()}
         <br />
         <img
            className={classes['repo-img']}
            src={image || default_image}
            alt={`${transformedName()} project from Davide De Leonardis`}
         />
         <br /> {repo.description}
         <br /> {repo.language}
         {/* <br /> {repo.created_at} */}
         <br />
         <span
            className={classes['color-language']}
            style={{ backgroundColor: languageColor || `#000000` }}
         ></span>
         <br />
         <ul>{topics}</ul>
         <br />
         {repo.homepage !== '' &&
            repo.name !== ignoredRepos.PERSONAL_WEBSITE_NAME && (
               <Fragment>
                  <a href={repo.homepage} target="_blank" rel="noreferrer">
                     See Demo
                  </a>
                  <br />
               </Fragment>
            )}
         <a href={repo.html_url} target="_blank" rel="noreferrer">
            See on GitHub
         </a>
      </li>
   );
};

export default ProjectItem;
