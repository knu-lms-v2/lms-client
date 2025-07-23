import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { API_URL } from '../globals';

export interface Task {
  type: string;
  course_name: string;
  week: string;
  remaining_days: string;
}

interface TaskContextType {
  tasks: Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

