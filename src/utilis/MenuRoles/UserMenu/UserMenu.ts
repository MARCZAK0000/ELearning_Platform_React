import {
  faHome,
  faSchool,
  faBook,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { MenuTypes } from "../MenuType";

export const UserMainMenu: MenuTypes[] = [
  {
    index: 1,
    name: "Home",
    to: "/student",
    icon: faHome,
  },
  {
    index: 2,
    name: "School",
    to: "/student/school",
    icon: faSchool,
  },
  {
    index: 3,
    name: "Directory",
    to: "/student/directory",
    icon: faBook,
  },
  {
    index: 4,
    name: "Settings",
    to: "/student/settings",
    icon: faScrewdriverWrench,
  },
];
