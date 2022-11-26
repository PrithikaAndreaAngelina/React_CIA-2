import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Red',
    path: '/overview',
    icon: <AiIcons.AiFillCaretUp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Green',
        path: '/overview/users',
        icon: <AiIcons.AiFillCaretUp />,
      },
      {
        title: 'Blue',
        path: '/overview/revenue',
        icon: <AiIcons.AiFillCaretUp />,
      }
    ]
  },
  {
    title: 'Yellow',
    path: '/reports',
    icon: <AiIcons.AiFillCaretUp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Orange',
        path: '/reports/reports1',
        icon: <AiIcons.AiFillCaretUp />,
        cName: 'sub-nav'
      },
      {
        title: 'Lime',
        path: '/reports/reports2',
        icon: <AiIcons.AiFillCaretUp />,
        cName: 'sub-nav'
      },
      {
        title: 'Gold',
        path: '/reports/reports3',
        icon: <AiIcons.AiFillCaretUp />,
      }
    ]
  },
  {
    title: 'White',
    path: '/products',
    icon: <AiIcons.AiFillCaretUp />,
  },
  {
    title: 'Black',
    path: '/team',
    icon: <AiIcons.AiFillCaretUp />,
  },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Message 1',
  //       path: '/messages/message1',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Message 2',
  //       path: '/messages/message2',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];
