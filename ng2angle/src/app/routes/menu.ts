
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

  ]
};

export const menu = [
    headingMain,
    Home,
    Widgets
];
