
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

const SocialMedia = {
  text: 'Social Media',
  link: '/socialmedia',
  icon: 'icon-user-follow',
  submenu: [
    {
      text: 'twitter',
      link: '/socialmedia/twitter',
      icon: 'icon-social-twitter'
    },
    {
      text: 'google',
      link: '/socialmedia/google',
      icon: 'fa-google'
    },
    {
      text: 'facebook',
      link: '/socialmedia/facebook',
      icon: 'icon-social-facebook'
    }
  ]
};

export const menu = [
    headingMain,
    Home,
    Widgets,
    SocialMedia
];
