import firebaseService from '@common/services/firebase.service';
import { skills }  from '@layout/constants/skills/skills.constant';

const getJsonIconsSkillsPorfolio = async () => {

    const url = "/firebase-storage/v0/b/porftolio-32df5.appspot.com/o/skills.json?alt=media&token=fb2133c2-bbbc-4337-85a6-50c58c05ddea";
    try {
      const response = await fetch(url);
      if (response.ok) {       
        // Aquí puedes trabajar con los datos del archivo JSON
        const skillsData = await response.json();
        return skillsData;
 
      } else {
        console.error("Error al obtener los datos:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Se produjo un error:", error);
    }
}

const getPathIconsSkillsPorfolio = async () => {
    await firebaseService.getAllFilesInDirectory('skills/icons/small');
}

const getIconsLocal = () => {
    return skills;
}

export default {
    getPathIconsSkillsPorfolio,
    getJsonIconsSkillsPorfolio,
    getIconsLocal
}
