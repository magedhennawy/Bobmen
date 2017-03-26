
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};

const Widgets = {
  text: 'Widgets',
  link: '/widgets',
  icon: 'icon-grid',
  submenu: [
    {
      text: 'Text Editor',
      link: '/widgets/codeeditor'
    },
    {
      text: 'Calendar',
      link: '/widgets/calendar'
    }
  ]
};

export const menu = [
    headingMain,
    Home,
    Widgets
];
