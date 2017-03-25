
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
        text: 'To do list',
        link: '/widgets/todolist'
      },
      {
        text: 'Weather',
        link: '/widgets/weather'
      },
    {
      text: 'Twitter',
      link: '/widgets/twitter'
    },
    {
      text: 'Google',
      link: '/widgets/google'
    }
  ]
};

export const menu = [
    headingMain,
    Home,
    Widgets
];
