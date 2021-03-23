import {
  WorkState,
  set_companies,
  set_projects,
  set_task,
  WorkActionTypes,
} from "../types/types";

const initialState: WorkState = {
  companies: undefined,
  currentProjects: undefined,
  currentProject: undefined,
  currentTask: undefined,
};

export default (state = initialState, action: WorkActionTypes): WorkState => {
  switch (action.type) {
    case set_companies:
      return {
        ...state,
        ...action.payload,
      };
    case set_projects:
      return {
        ...state,
        ...action.payload,
      };
    case set_task:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
