import React, { useEffect } from 'react';
import {Button} from 'antd';
import { useSelector,shallowEqual, useDispatch } from 'react-redux';
import {
  getHomeAction
} from './store/actionCreators'

function Home() {
  //组件和redux关联
  const { types } = useSelector((state: any) => ({
    types:state.getIn(["homeData","types"])
  }),shallowEqual)
  const dispatch = useDispatch()

  //发送网络请求
  useEffect(()=>{
    dispatch(getHomeAction());
  },[dispatch])
  

  return (
    <div>
      <Button type='primary' title='Home'>
        Home
      </Button>
      <div>
        {types}
      </div>
    </div>
  )
}

export default Home;
