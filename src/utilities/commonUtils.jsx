import Home from "../PortifolioContainer/Home/Home";
import AboutMe from "../PortifolioContainer/AboutMe/AboutMe";   
import Comments from "../PortifolioContainer/Comments/comments";
import Resume from "../PortifolioContainer/Resume/Resume"

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Sobre mim",
    component: AboutMe,
  },
  {
    screen_name: "Resumo",
    component: Resume,
  },
  {
    screen_name: "Comentarios",
    component: Comments
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};