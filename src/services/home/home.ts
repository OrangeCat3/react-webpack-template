import myRequest from "../index";

enum HomeApi {
  getHomeData =  '/getHomeData'
}


import { IHomeResult } from './types'
import { IDataType } from '../types'

export function getHome() {
  return myRequest.get<IDataType<IHomeResult>>({
    url: HomeApi.getHomeData
  }) 
}