import EventsIcon from './icons/events';
import GuidesIcon from './icons/guides';
import MessagesIcon from './icons/messages';
import PicturesIcon from './icons/pictures';
import StatisticsIcon from './icons/statistics';
import AdministrationIcon from './icons/administration';

const data = [
  {
    section: 'Administration',
    icon: <AdministrationIcon />,
    content: [
      {
        title: 'Taxes',
        link: '/administration/taxes',
      },
      {
        title: 'Travel',
        link: '/administration/travel',
      },
      {
        title: 'Insurance',
        link: '/administration/insurance',
      },
    ],
  },
  {
    section: 'Messages',
    icon: <MessagesIcon />,
    content: [
      {
        title: 'Unbox',
        link: '/messages/unbox',
      },
      {
        title: 'Unread',
        link: '/messages/unread',
      },
      {
        title: 'Archived',
        link: '/messages/archived',
      },
    ],
  },
  {
    section: 'Pictures',
    icon: <PicturesIcon />,
    content: [
      {
        title: 'Vacations',
        link: '/pictures/vacations',
      },
      {
        title: 'Anniversary',
        link: '/pictures/anniversary',
      },
      {
        title: 'University',
        link: '/pictures/university',
      },
    ],
  },
  {
    section: 'Statistics',
    icon: <StatisticsIcon />,
    content: [
      {
        title: 'Finances',
        link: '/statistics/finances',
      },
      {
        title: 'Call Stats',
        link: '/statistics/call-stats',
      },
      {
        title: 'Trip Logs',
        link: '/statistics/trip-logs',
      },
    ],
  },
  {
    section: 'Events',
    icon: <EventsIcon />,
    content: [
      {
        title: 'Weddings',
        link: '/events/weddings',
      },
      {
        title: 'Networking',
        link: '/events/networking',
      },
    ],
  },
  {
    section: 'Guides',
    icon: <GuidesIcon />,
    content: [
      {
        title: 'Documentation',
        link: '/guides/documentation',
      },
    ],
  },
];

export default data;
