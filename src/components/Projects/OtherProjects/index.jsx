import { useState } from 'react';

import ProjectsList from '../ProjectsList';
import SelectLanguage from './SelectLanguage';
import useFetch from '../../../hooks/useFetch';
import useDimensions from '../../../hooks/useDimensions';
import * as ignoredRepos from '../../../assets/config/ignoredRepos';

import classes from '../../../assets/scss/partials/_projects.module.scss';

const OtherProjects = () => {
   const [repos, setRepos] = useState([]);
   const [filteredReposByLanguage, setFilteredReposByLanguage] = useState([]);
   const [reposAreSliced, setReposAreSliced] = useState(true);
   const { width: screenWidth } = useDimensions();

   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );

   // Filter for not showing main projects, readme
   const filteredRepos = () => {
      return repos.filter(
         (repo) =>
            repo.owner.login === process.env.REACT_APP_GITHUB_NAME &&
            repo.name !== process.env.REACT_APP_GITHUB_NAME && // README
            repo.name !== ignoredRepos.PROJECT_1 &&
            repo.name !== ignoredRepos.PROJECT_2 &&
            repo.name !== ignoredRepos.PROJECT_3
      );
   };

   // Set select tag options
   let options = [];
   const setOptionsHandler = () => {
      repos.forEach((repo) => {
         if (
            !options.includes(repo.language) &&
            repo.language !== 'HTML' &&
            repo.language !== null // README
         )
            options.push(repo.language);
      });

      return options;
   };
   setOptionsHandler();

   // Set repos to show when value in select changes
   const setValueHandler = (e) => {
      if (e.target.value === 'All') {
         setFilteredReposByLanguage(filteredRepos());
      } else {
         setFilteredReposByLanguage(
            filteredRepos().filter((repo) => {
               return repo.language === e.target.value;
            })
         );
      }
   };

   const showAllReposHandler = () => setReposAreSliced(false);

   // Repos to pass to <ProjectsList />
   const getRepos = () => {
      let otherReposShown = 4;
      if (screenWidth < 992) otherReposShown = 3;
      if (screenWidth < 769) otherReposShown = 2;

      if (filteredReposByLanguage.length === 0) {
         if (!reposAreSliced) return filteredRepos();

         return filteredRepos().slice(0, otherReposShown);
      }

      if (!reposAreSliced) return filteredReposByLanguage;

      return filteredReposByLanguage.slice(0, otherReposShown);
   };

   const showMoreButton = reposAreSliced && (
      <button
         onClick={showAllReposHandler}
         style={{ backgroundColor: '#ffffff' }}
      >
         SHOW MORE
      </button>
   );

   return (
      <div className={classes['projects-container']}>
         <h2>Other Projects</h2>

         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <ProjectsList
            repos={getRepos()}
            isLoading={isLoading}
            error={error}
            isMain={false}
         />

         {showMoreButton}
      </div>
   );
};

export default OtherProjects;
