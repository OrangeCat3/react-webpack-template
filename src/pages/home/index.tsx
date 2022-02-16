import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector,shallowEqual, useDispatch } from 'react-redux';
import {
  getHomeAction
} from './store/actionCreators';

function Home() {
  //组件和redux关联
  const { types } = useSelector((state: any) => ({
    types:state.getIn(["homeData","types"])
  }),shallowEqual)
  const dispatch = useDispatch();
  const { t } = useTranslation();

  //发送网络请求
  useEffect(()=>{
    // dispatch(getHomeAction());
  },[dispatch])


  return (
    <div>
      <Button type='primary' title='Home'>
        Home
      </Button>
      <div>
        {t('home.hello')}
      </div>
    </div>
  )
}

export default Home;
