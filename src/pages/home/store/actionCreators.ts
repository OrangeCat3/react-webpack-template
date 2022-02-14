import {
  Login
} from '@services/home/login';
import {
  getHome
} from '@services/home/home'
import cache from '@utils/cache'
import { IAccount, IHomeResult, ILoginResult } from '@services/home/types'
import { IDataType } from '@services/types';
import { Dispatch } from 'redux';



//登录
const saveAccout = (res: IDataType<ILoginResult>) => ({
  type: 'saveAccout',
  accout: {
    id: res.data.id,
    name: res.data.name
  }
})

export const getLoginAction = (account: IAccount) => {
  return (dispatch: Dispatch) => {
    Login(account).then((res) => {
      cache.setCache('token', res.data.token);
      dispatch(saveAccout(res));
    })
  }
}

//获取home信息
const saveHome = (homeData: IDataType<IHomeResult>) => ({
  type: 'saveHome',
  homeData
})

export const getHomeAction = () => {
  return (dispatch: Dispatch) => {
    getHome().then(res => {
      dispatch(saveHome(res));
    })
  }
}