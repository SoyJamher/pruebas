import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PLD',
    group: true,
  },
  {
    title: 'PLD',
    icon: 'layout-outline',
    children: [
      {
        title: 'Listado',
        link: '/afirme/layout/stepper',
      },
    ],
  },
]