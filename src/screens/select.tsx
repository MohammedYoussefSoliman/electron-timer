import { FC, useState, useEffect, Dispatch, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useHTTP from "../hooks/useHTTP";
import { useHistory } from "react-router-dom";
import { LogoIcon } from "../assets/SVG";
import { Button } from "@material-ui/core";
import SelectMenu from "../components/selectMenu/selectMenu";
import { RootState } from "../states";
import {
  companyType,
  companiesType,
  projectType,
  taskType,
  SetCompaniesAction,
  SetProjectsAction,
  SetTasksAction,
} from "../states/types/types";
import {
  setCompanies,
  setProjects,
  setProject,
} from "../states/action/actions";
import "./layout.scss";
import { COMPANIES_ENDPOINT, PROJECTS_ENDPOINT, useStyles } from "../helpers";

const SelectScreen: FC = () => {
  const classes = useStyles();
  const [selectedCompany, setSelectedCompany] = useState<
    companyType | undefined
  >(undefined);
  const [selectedProject, setSelectedProject] = useState<
    projectType | undefined
  >(undefined);
  const [selectedTasks, setSelectedTasks] = useState<taskType[] | undefined>(
    undefined
  );
  const [selectedTask, setSelectedTask] = useState<taskType | undefined>(
    undefined
  );
  const {
    companies,
    currentProjects,
    currentProject,
    currentTask,
  } = useSelector((state: RootState) => state.work);

  const dispatchCompanies = useDispatch<Dispatch<SetCompaniesAction>>();
  const dispatchProjects = useDispatch<Dispatch<SetProjectsAction>>();
  const dispatchSelectedProject = useDispatch<Dispatch<SetTasksAction>>();

  function onSelectChangeHandler<T>(arg: T, cb: (arg: T) => void) {
    cb(arg);
  }

  const { call: getCompanies } = useHTTP<any>({
    endPoint: COMPANIES_ENDPOINT,
  });

  const getCompaniesHandler = useCallback(async () => {
    let response = await getCompanies();
    let companiesData: companiesType = [];
    response.data.companies?.map((item: any) => {
      companiesData.push({
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        scale: item.scale,
        address: item.address,
      });
    });
    dispatchCompanies(setCompanies({ companies: companiesData }));
  }, [companies]);

  useEffect(() => {
    getCompaniesHandler();
  }, []);

  const { call: getProjects } = useHTTP<any>({
    endPoint: PROJECTS_ENDPOINT,
    method: "POST",
  });

  const getProjectsHandler = useCallback(
    async (id: number) => {
      let response = await getProjects({ company_id: id });
      let projects: projectType[] = [];
      let tasks: taskType[] = [];
      response.data.map((proj: any) => {
        projects.push({
          id: proj.id,
          name: proj.name,
          working_hours: proj.working_hours,
          tasks: proj.tasks.map((task: any) => {
            tasks.push({
              id: task.id,
              project_id: task.project_id,
              name: task.title,
            });
          }),
        });
      });

      projects.forEach((proj: any) => {
        proj.tasks = tasks.filter((ts) => ts.project_id === proj.id);
      });
      console.log(projects);
      dispatchProjects(setProjects({ currentProjects: projects }));
    },
    [selectedCompany]
  );

  useEffect(() => {
    setSelectedProject(undefined);
    if (selectedCompany && selectedCompany.id) {
      getProjectsHandler(selectedCompany.id);
    }
  }, [selectedCompany]);

  const history = useHistory();
  return (
    <div className="layout">
      <div className="layout--select">
        <div className="select--logo">
          <LogoIcon width={200} />
        </div>
        {companies && (
          <SelectMenu
            header="Select Company"
            value={selectedCompany?.name}
            options={companies}
            onChangeHandler={(item: any) => {
              const comp: companyType = {
                id: item.id,
                name: item.name,
              };
              onSelectChangeHandler<companyType>(comp, (comp) => {
                setSelectedCompany(comp);
                setSelectedTasks(undefined);
                setSelectedTask(undefined);
              });
            }}
          />
        )}
        {currentProjects ? (
          <SelectMenu
            header="Select Project"
            value={selectedProject?.name}
            options={currentProjects}
            onChangeHandler={(item: any) => {
              const proj: projectType = {
                id: item.id,
                name: item.name,
              };
              onSelectChangeHandler<projectType>(proj, (proj) => {
                setSelectedProject(proj);
                let project = currentProjects.find((p) => p.id === proj.id);
                setSelectedTasks(project?.tasks);
                setSelectedTask(undefined);
              });
            }}
          />
        ) : (
          <SelectMenu header="Select Project" value={undefined} options={[]} />
        )}
        {currentProjects && selectedTasks ? (
          <SelectMenu
            header="Select Task"
            value={selectedTask?.name}
            options={selectedTasks}
            onChangeHandler={(item: any) => {
              const task: taskType = {
                id: item.id,
                name: item.name,
              };
              onSelectChangeHandler<taskType>(task, (task) => {
                setSelectedTask(task);
                const currProject = currentProjects?.find(
                  (p) => p.id === selectedProject?.id
                );
                const currTask = currProject?.tasks?.find(
                  (ts) => ts.id === task.id
                );
                if (currProject && currTask) {
                  dispatchSelectedProject(
                    setProject({
                      currentProject: currProject,
                      currentTask: currTask,
                    })
                  );
                }
              });
            }}
          />
        ) : (
          <SelectMenu header="Select Task" value={undefined} options={[]} />
        )}
        <div className="select--submit">
          <Button
            className={classes.btn}
            disabled={!selectedTask}
            onClick={() => {
              history.push("/");
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectScreen;
