import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class List extends PureComponent{
  render () {
    const { list, page, getMoreList } = this.props
    return (
      <div>
        {list.map((item, index) => (
          <Link to={`/detail/${item.get('id')}`} key={index}>
            <ListItem>
              <img className="pic" src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>  
              </ListInfo>  
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={() =>getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articalList']),
    page: state.getIn(['home', 'aricalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList (page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)