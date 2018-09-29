import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render () {
    const { loginStatus, login } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={(input) => this.account = input}/>
            <Input placeholder="密码" type="password" innerRef={(input) => this.password = input}/>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    login (accountEle, passwordEle) {
      dispatch(actionCreators.login(accountEle.value, passwordEle.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
