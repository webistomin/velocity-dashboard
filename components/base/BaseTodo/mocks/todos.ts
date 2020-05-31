import { nanoid } from 'nanoid';

export const todos = [
  {
    id: nanoid(),
    title: 'Meet George',
    description: 'Office #5 in 05:00PM',
    dueDate: new Date('05-29-2020'),
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Call peter for TPS reports',
    description: '',
    dueDate: new Date('06-29-2020'),
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Reply to customers',
    description: '',
    dueDate: new Date('06-01-2020'),
    isDone: false,
  },
  {
    id: nanoid(),
    title: "Review Anna's new article",
    description: '',
    dueDate: new Date('05-30-2020'),
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Meet Pete',
    description: 'Office #1 in 06:00PM',
    dueDate: new Date(),
    isDone: false,
  },
  {
    id: nanoid(),
    title: 'Call mom',
    description: '',
    dueDate: new Date(),
    isDone: false,
  },
];
