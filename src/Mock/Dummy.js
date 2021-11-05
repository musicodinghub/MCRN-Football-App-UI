/**
 * Define and export the dummy data.
 */

 export const Teams = [
  {
    id: '001',
    name: 'Real Madrid',
    logo: require('Assets/images/Team1.png'),
  },
  {
    id: '002',
    name: 'Arsenal',
    logo: require('Assets/images/Team2.png'),
  },
  {
    id: '003',
    name: 'FC Barcelona',
    logo: require('Assets/images/Team3.png'),
  },
  {
    id: '004',
    name: 'Juventus',
    logo: require('Assets/images/Team4.png'),
  },
  {
    id: '005',
    name: 'Manchester United',
    logo: require('Assets/images/Team5.png'),
  },
];

export const Matches = [
  {
    id: '001',
    name: 'Strawberry Field',
    team1: Teams[0],
    team2: Teams[2],
  },
  {
    id: '002',
    name: 'Autumn Field',
    team1: Teams[3],
    team2: Teams[1],
  },
  {
    id: '003',
    name: 'Spring Field',
    team1: Teams[4],
    team2: Teams[0],
  },
  {
    id: '004',
    name: 'more 1 ...',
    team1: Teams[1],
    team2: Teams[2],
  },
  {
    id: '005',
    name: 'more 2 ...',
    team1: Teams[3],
    team2: Teams[0],
  },
];

export const Authors = [
  {
    id: '001',
    name: 'Brian Imanuel',
    avatar: require('Assets/images/Avatar1.png'),
  },
  {
    id: '002',
    name: 'Daniel Feliciano',
    avatar: require('Assets/images/Team5.png'),
  }
];

export const News = [
  {
    id: '001',
    thumbnail: require('Assets/images/News1.png'),
    title: 'Ronaldo pushing for Man City move',
    type: 'LIVE Transfer Talk',
    author: Authors[0],
    views: '125,908',
    likes: '1403',
    comments: '976',
    date: '2020-05-15',
    detail: `Cristiano Ronaldo has left Juventus' training session early on Wednesday morning after sustaining a blow to the arm.
After reportedly asking not to start for last Saturday's 2-2 draw at Udinese, could this mean he is ruled out for Saturday's home match against Empoli? 
Juventus are due to hold a news conference at 13:00 BST: today to unveil new signing Kaio Jorge, so we may get an update of Ronaldo later.`,
  },
  {
    id: '002',
    thumbnail: require('Assets/images/News3.png'),
    title: `"CR7 is back!" - Delighted Manchester United fans react as Cristiano Ronaldo reclaims famous number 7`,
    type: '',
    author: Authors[1],
    views: '1223',
    likes: '111',
    comments: '666',
    date: '2021-09-02',
    detail: `Cristiano Ronaldo will wear the number 7 shirt once again for Manchester United, the club have confirmed.
Ronaldo shocked the world by returning to Old Trafford for a second spell with the club on Transfer Deadline Day, signing a two-year contract with the option of a third, 12 years after initially leaving for Real Madrid in a then-world record £80m deal.
`
  },
];

const dummyData = { Teams, Matches, News, Authors };

export default dummyData;
