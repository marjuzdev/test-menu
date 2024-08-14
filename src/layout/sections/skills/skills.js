
import skillsService from '@/common/services/skills/skills.service';
// animations
import Animations from '@animations';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Swiper from 'swiper';
import { Pagination, Navigation, Virtual } from 'swiper/modules';

const run = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // createCardServices();  


      // /**
      //  * get json icons skills locally 
      //  * ------------------------------------
      //  *   const technologies = skillsService.getIconsLocal();
      //  */

      // /**
      //  * get json icons skill firebase
      //  * -----------------------------------------
      //  * const technologies = await skillsService.getJsonIconsSkillsPorfolio();
      //  */

      //   const technologies = await skillsService.getJsonIconsSkillsPorfolio();

      //   console.log('technologies', technologies);


      //   const html = technologies.map( (technologie, index) => {

      // // const textProjectName  = document.createTextNode(`${technologie.name}`);

      //   //     /**
      //   //      *  get imgs local path absolute icons, and build sucefully !!!
      //   //      * -------------------------------------------------------
      //   //      *  const pathImg = getIconsLocal(technologie.nameFile);
      //   //      */

      //   //     /**
      //   //      *  get imgs path firebase cloud storage 
      //   //      * -------------------------------------------------------
      //   //      *   const pathImg = technologie.path;
      //   //      */

      //     //     const img = document.createElement('img');
      //     //     const pathImg = technologie.path;
      //     //     img.setAttribute("src", pathImg);

      //       return `
      //         <li class="item animate-card-5" title="${technologie.name}" style="opacity: 0;">
      //           <img src="${technologie.path}" alt="${technologie.name}">
      //         </li>
      //       `;
      //   }).join('')

      //   const logoContainer = document.querySelector('#skills .logos-container_ > #cardContainer');
      //   logoContainer.insertAdjacentHTML('beforeend', html);
      //   resolve();

    } catch (error) {
      console.log('error', error);
    }
  })

}


/**
 *  Thanks to this function, the files are copied to the dist to deploy
 * @param nameFile 
 * @returns String - path absolute
 */

// const getIconsLocal= ( nameFile) => {
//     const pathImg = new URL(`/src/assets/icons/skills/small/${nameFile}`, import.meta.url).href;
//     return pathImg;
// }





export default {
  run
}
