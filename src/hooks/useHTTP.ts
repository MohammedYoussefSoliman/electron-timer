import { useCallback, useState } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import {useHistory} from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from 'reducers';
import {apiUrl} from '../helpers/apiService';

type IJSONParsable = string | number | boolean | object;

type IApiConfig = {
    endPoint: string
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
    params?: {
      [key: string]: IJSONParsable | Array<IJSONParsable>;
    }
    callStatus?: boolean
  }

type IProps = <T>(config: IApiConfig) => {
    isLoading: boolean
    data: T | undefined
    error: boolean
    call: (data?: any) => Promise<{data: T, status: number}>
}

const useHTTP:IProps = ({endPoint, method="GET", callStatus = true}) => {
  // const { token } = useSelector((store: RootState) => store.user);
  const [isLoading, setIsLoading] = useState<boolean>(callStatus);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<boolean>(false);
  const history = useHistory();

  const call = useCallback(
    async (callData:any) => {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          // Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        // params,
        responseType: 'json',
      };

      try {
        setIsLoading(true);
        let response: AxiosResponse;
        switch(method) {
          case 'POST':
            response = await apiUrl.post(endPoint, callData, requestConfig)
            break;
          case 'DELETE':
            response = await apiUrl.delete(endPoint, requestConfig)
            break;
          case 'PUT':
            response = await apiUrl.put(endPoint, callData, requestConfig);
            break;
          case 'GET':
            default:
              response = await apiUrl.get(endPoint, requestConfig);
              break;
        }
        setData(response.data);
        setError(false);
        return response;
      }
      catch(e) {
        if(e.response.status===401) {
          history.push('/login')
        }
        setError(true);
        return e.response;
      }
      finally
      {
        setIsLoading(false);
      }
    }, [endPoint]);
    
    return {
      isLoading,
      data,
      error,
      call,
    };
}

export default useHTTP;