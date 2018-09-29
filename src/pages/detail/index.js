import React, { Component } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom' // 访问历史对象的属性和最近的匹配
import { 
  DetailWrapper,
  Header,
  Content,
} from './style'

class Detail extends Component{

  componentDidMount () {
    let id = this.props.match.params.id
    this.props.getDetail(id)
  }

  render () {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => ({
  getDetail (id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))