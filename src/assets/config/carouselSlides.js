import { repos } from "./repos";

/* Add images in carousel:
		INSERT REPO NAME IN favourites 
		ADD images[i] AT THE END IN export slides
*/

const favourites = [
   { name: "deliveboo" },
   { name: "laravel-boolpress" },
   { name: "react-amazon" },
   { name: "vue-netflix" },
];

const findImageOfFavourites = () => {
   let images = [];

   favourites.forEach((favourite) => {
      for (let index = 0; index < repos.length; index++) {
         const repo = repos[index];
         if (favourite.name === repo.name) {
            images.push({
               name: repo.name,
               image: repo.image
            });
         }
      }
   });

   return images;
};

const images = findImageOfFavourites().map((repo, index) => (
   <div className="carousel-img-container">
      <a key={index} href="/">
         <img
            src={repo.image}
            alt={`${
               repo.name.charAt(0).toUpperCase() + repo.name.slice(1)
            } from Davide De Leonardis`}
         />
      </a>
   </div>
));

export const slides = [images[0], images[1], images[2], images[3]];
