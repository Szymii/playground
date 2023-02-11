import logs from "./logs.json";

export type goal = {
  goal: string;
  subGoal: string[];
};

type log = {
  version: string;
  changes: goal[];
};

export const useLogsQuery = () => {
  return logs as log[];
};
