import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articalList: result.articalList
})

const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICAL_LIST,
  list: fromJS(list), /* List不能深层次转换 */
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action) // 派发同步action
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page + 1)
      dispatch(action) // 派发同步action
    })
  }
}

export const toggleTopShow = (flag) => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show: flag
})