import Request from "../index";
import { IHomeResult } from './types'
import { IDataType } from '../types'

enum HomeApi {
  getHomeData = '/getHomeData'
}

export function getHome() {
  return Request.get<IDataType<IHomeResult>>({
    url: HomeApi.getHomeData,
  }) 
}