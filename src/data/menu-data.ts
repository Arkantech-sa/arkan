import { IMenu } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
    dropdown: false,
  },
  {
    id: 2,
    link: "/about-us",
    title: "About us",
    mega_menu: false,
  },
  {
    id: 3,
    link: "/services",
    title: "Services",
    dropdown: false,
  },
  {
    id: 4,
    link: "/projects",
    title: "Projects",
    dropdown: false,
  },
  {
    id: 5,
    link: "/contact-us",
    title: "Contact",
  },
];

export default menu_data;
