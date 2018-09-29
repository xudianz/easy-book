// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

import imgURL1 from '../../../statics/recommend/1.png'
import imgURL2 from '../../../statics/recommend/2.png'
import imgURL3 from '../../../statics/recommend/3.png'
import imgURL4 from '../../../statics/recommend/4.png'
import imgURL5 from '../../../statics/recommend/5.png'

const defaultState = fromJS({
  topicList: [],
  articalList: [],
  recommendList: [
    {
      id: 1,
      imgUrl: imgURL1
    },
    {
      id: 2,
      imgUrl: imgURL2
    },
    {
      id: 3,
      imgUrl: imgURL3
    },
    {
      id: 4,
      imgUrl: imgURL4
    },
    {
      id: 5,
      imgUrl: imgURL5
    }
  ],
  aricalPage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articalList: fromJS(action.articalList)
  })
}

const addArticalList = (state, action) => {
  return state.merge({
    articalList: state.get('articalList').concat(action.list),
    aricalPage: action.nextPage
  })
} 

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA :
      return changeHomeData(state, action)
    case actionTypes.ADD_ARTICAL_LIST :
      return addArticalList(state, action)
    case actionTypes.TOGGLE_SCROLL_TOP :
      return state.set('showScroll', action.show)
    default: 
      return state
  }
}