import {
  faAddressBook,
  faCalendarXmark,
  IconDefinition,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faHome,
  faPencil,
  faSchool,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { MenuTypes } from "../MenuType";

export const TeacherMainMenu: MenuTypes[] = [
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

export const TeacherSchoolMenu: MenuTypes[] = [
  {
    index: 0,
    name: "Create Class",
    to: "/class/create",
    icon: faCirclePlus,
  },
  {
    index: 1,
    name: "Update Class",
    to: "/class/update",
    icon: faPencil,
  },
  {
    index: 2,
    name: "Add Students to class",
    to: "/class/students/add",
    icon: faAddressBook,
  },
  {
    index: 3,
    name: "Remove Students from class",
    to: "/class/students/remove",
    icon: faCalendarXmark,
  },
];
