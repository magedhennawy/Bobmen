
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};

/*
const Pages = {
  text: 'Pages',
  link: '/pages',
  icon: 'icon-doc',
  submenu: [
    {
      text: 'Login',
      link: '/login'
    },
    {
      text: 'Register',
      link: '/register'
    },
    {
      text: 'Recover',
      link: '/recover'
    },
    {
      text: 'Lock',
      link: '/lock'
    },
    {
      text: '404',
      link: '/404'
    },
    {
      text: '500',
      link: '/500'
    },
    {
      text: 'Maintenance',
      link: '/maintenance'
    }
  ]
};
*/

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
      link: '/widgets/weather'
    }
  ]
};

export const menu = [
    headingMain,
    Home,
    //Pages,
    Widgets
];
