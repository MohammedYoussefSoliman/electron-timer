export interface UserState {
  token: string | undefined;
  id: number | undefined;
  first_name: string | undefined;
  middle_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
  role: string[] | undefined;
  avatar: string | undefined;
}

export type companiesType = companyType[];

export type companyType = {
  id: number | undefined;
  name: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  scale?: number | undefined;
  address?: string | undefined;
};

export type projectsType = projectType[];

export type projectType = {
  id: string;
  name: string;
  working_hours?: number;
  tasks?: taskType[];
};

export type taskType = {
  id: string | number;
  project_id?: string | number;
  name: string;
  description?: string;
  start_at?: string;
  end_at?: string;
};

export interface WorkState {
  companies: companiesType | undefined;
  currentProjects: projectsType | undefined;
  currentProject: projectType | undefined;
  currentTask: taskType | undefined;
}

export interface ProjectsState {
  projects: projectsType | undefined;
  project: projectType | undefined;
  task: taskType | undefined;
}

export type SetUserAction = {
  type: typeof set_user;
  payload: {
    id: number | undefined;
    first_name: string | undefined;
    middle_name: string | undefined;
    last_name: string | undefined;
    email: string | undefined;
    role: string[] | undefined;
    avatar: string | undefined;
  };
};

export type SetLoginsAction = {
  type: typeof set_login;
  payload: {
    token: string | undefined;
  };
};

export type SetCompaniesAction = {
  type: typeof set_companies;
  payload: {
    companies: companiesType | undefined;
  };
};

export type SetProjectsAction = {
  type: typeof set_projects;
  payload: {
    currentProjects: projectsType;
  };
};

export type SetTasksAction = {
  type: typeof set_task;
  payload: {
    currentProject: projectType;
    currentTask: taskType;
  };
};

export type UserActionTypes = SetUserAction | SetLoginsAction;
export type WorkActionTypes =
  | SetCompaniesAction
  | SetProjectsAction
  | SetTasksAction;

export const set_login = "set_login";
export const set_user = "set_user";
export const set_companies = "set_companies";
export const set_projects = "set_projects";
export const set_task = "set_task";
