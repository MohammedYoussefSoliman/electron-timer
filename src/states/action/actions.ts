import {
  set_login,
  set_user,
  set_companies,
  set_projects,
  set_task,
  SetUserAction,
  SetLoginsAction,
  SetCompaniesAction,
  SetProjectsAction,
  SetTasksAction,
} from "../types/types";

export const setLogin = (
  payload: SetLoginsAction["payload"]
): SetLoginsAction => ({
  type: set_login,
  payload,
});

export const setUser = (payload: SetUserAction["payload"]): SetUserAction => ({
  type: set_user,
  payload,
});

export const setCompanies = (
  payload: SetCompaniesAction["payload"]
): SetCompaniesAction => ({
  type: set_companies,
  payload,
});

export const setProjects = (
  payload: SetProjectsAction["payload"]
): SetProjectsAction => ({
  type: set_projects,
  payload,
});

export const setProject = (
  payload: SetTasksAction["payload"]
): SetTasksAction => ({
  type: set_task,
  payload,
});
