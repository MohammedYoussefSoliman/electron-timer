import Axios from "axios";

export const apiUrl = Axios.create({ baseURL: "http://35.177.178.243/api" });
// export const apiUrl = Axios.create({ baseURL: 'http://localhost:8000/api' });

export const COMPANIES_ENDPOINT = "tracking/employee/companies";
export const PROJECTS_ENDPOINT = "tracking/employee/projects/tasks";
