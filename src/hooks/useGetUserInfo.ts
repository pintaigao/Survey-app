import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { UserStateType } from '../store/userReducer'

function useGetUserInfo() {
  // useSelector 从 Redux store 中获取用户信息
  const { username, nickname } = useSelector<StateType>(state => state.user) as UserStateType
  return { username, nickname }
}

export default useGetUserInfo
