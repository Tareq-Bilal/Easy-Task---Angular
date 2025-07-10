import { ITask } from './task.model';

export const DUMMY_TASKS: ITask[] = [
  {
    id: 't1',
    userId: 'u1', // Assign to a dummy user ID (e.g., Alice)
    title: 'Complete Angular Project Setup',
    summary:
      'Set up the basic Angular project structure, including routing and component creation.',
    duDate: new Date('2025-07-15T09:00:00'), // Example Date
  },
  {
    id: 't2',
    userId: 'u2', // Assign to another dummy user ID (e.g., Bob)
    title: 'Review Code for Authentication Module',
    summary:
      'Perform a thorough code review for the authentication and authorization module.',
    duDate: new Date('2025-07-18T14:30:00'),
  },
  {
    id: 't3',
    userId: 'u1', // Assign to Alice again
    title: 'Write Unit Tests for User Service',
    summary:
      'Develop comprehensive unit tests for all methods in the user service.',
    duDate: new Date('2025-07-20T11:00:00'),
  },
  {
    id: 't4',
    userId: 'u3', // Assign to a third dummy user (e.g., Charlie)
    title: 'Design Database Schema for New Feature',
    summary:
      'Create an ER diagram and SQL scripts for the new task management feature.',
    duDate: new Date('2025-07-22T17:00:00'),
  },
  {
    id: 't5',
    userId: 'u2', // Assign to Bob again
    title: 'Prepare Presentation for Stakeholders',
    summary:
      'Create slides and talking points for the weekly project update meeting.',
    duDate: new Date('2025-07-16T10:00:00'),
  },
  {
    id: 't6',
    userId: 'u4', // Assign to a fourth dummy user (e.g., Diana)
    title: 'Research New UI Component Library',
    summary:
      'Explore alternative UI component libraries for future project enhancements.',
    duDate: new Date('2025-07-25T09:00:00'),
  },

  {
    id: 't7',
    userId: 'u6',
    title: 'Plan Team Building Event',
    summary:
      'Organize a virtual team building event for the end of the quarter.',
    duDate: new Date('2025-08-01T10:00:00'),
  },
  {
    id: 't8',
    userId: 'u6',
    title: 'Update Project Documentation',
    summary:
      'Revise and update the project documentation based on recent changes.',
    duDate: new Date('2025-07-28T16:00:00'),
  },
  {
    id: 't9',
    userId: 'u6',
    title: 'Schedule One-on-One Meetings',
    summary:
      'Book individual catch-up meetings with all team members for next week.',
    duDate: new Date('2025-07-26T12:00:00'),
  },
];
