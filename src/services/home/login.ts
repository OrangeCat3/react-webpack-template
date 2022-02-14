import myRequest from "../index";

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'


export function Login(accout: IAccount) {
  return myRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: accout
  })
}

