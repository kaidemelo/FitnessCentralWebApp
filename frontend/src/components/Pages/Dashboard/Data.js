import Axios from 'axios';

// const getUserDetails = () => {
//   Axios.get('http://localhost:3001/dashboard').then((response) => {
//   if (response.data.loggedIn == true) {
//     setUsername(response.data.user[0].username);
//   }
//   //"SELECT * FROM fitnesscentral.users WHERE username = ?;"
// });
// }

//Data file for how it works page, holds data objects.

export const dashboardObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Welcome Back',
    description:
      'Here is a short explanation of the technologies we used, we can group everything behind the front-end as back-end technologies.',
    buttonEnabled: false,
    buttonLabel: '',
    buttonLink: '',
    imgStart: 'start',
    img: 'images/img-54.svg',
    alt: 'Code Image'
  };