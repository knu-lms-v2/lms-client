import { createContext, useContext, useState, useEffect } from 'react';
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
  loading: boolean;
  error: string | null;
  refreshTasks: () => Promise<void>;
}

// Context 생성
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider 컴포넌트 생성
export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 서버에서 작업 목록 가져오기
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const userName = localStorage.getItem("userName");
      
      if (!userName) {
        setError("사용자 이름을 찾을 수 없습니다. 다시 로그인해주세요.");
        setLoading(false);
        return;
      }
      
      const response = await fetch(
        `${API_URL}/api/upcoming-list/upcoming-events/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_name: userName }),
        }
      );
      
      if (!response.ok) {
        throw new Error(`서버 오류 (${response.status}): ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data && data.lecture_data) {
        setTasks(data.lecture_data);
      } else {
        console.warn("데이터 형식이 예상과 다릅니다:", data);
        setTasks([]);
      }
    } catch (err) {
      console.error("작업 목록을 가져오는 중 오류 발생:", err);
      setError(err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다");
      
      // 개발 중에는 더미 데이터 사용 (실 환경에서는 제거)
      setTasks([
        {
          type: "assignment",
          course_name: "웹프로그래밍",
          week: "3",
          remaining_days: "3",
        },
        {
          type: "exam",
          course_name: "데이터베이스",
          week: "4",
          remaining_days: "8",
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchTasks();
  }, []);

  // 제공할 값
  const value = {
    tasks,
    loading,
    error,
    refreshTasks: fetchTasks
  };

  // Provider 반환
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

// 커스텀 훅 - 컴포넌트에서 쉽게 Context에 접근할 수 있게 함
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};