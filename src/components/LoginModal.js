import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { requestFacebookAuth, requestFacebookAuthSucceeded} from '../redux/authReducer'
import { CenterContainer } from './customStyledComponents'

const Centered = CenterContainer.extend`
  width: inherit;
`

const ModalBody = styled.div.attrs({
  className: 'uk-modal-dialog uk-modal-body uk-margin-auto-vertical'
})`
  background-color: rgba(255, 255, 255, 0.7) !important;
  border-radius: 4px;
`

type Props = {
  modalId: string
}
class LoginModal extends React.PureComponent {
  componentWillReceiveProps = ({feedbackResponseRdx}) => {

  }

  render = () => {
    const {modalId, uiRdx, requestFacebookAuth, requestFacebookAuthSucceeded}: Props = this.props
    return (
      <div>
        <div id={modalId} data-uk-modal className='uk-flex-top'>
          <ModalBody>
            <form>
              <Centered>
                <FacebookLogin
                  data-uk-close
                  appId={process.env.REACT_APP_FB_APP_ID}
                  fields='name,email,picture'
                  scope="public_profile,user_friends"
                  icon={<i className='uk-icon icon-facebook-square' style={{color: 'white', marginRight: 5}}/>}
                  onClick={requestFacebookAuth}
                  onFailure={() => {console.log('facebook login failed')}}
                  callback={(data) => {
                    requestFacebookAuthSucceeded(data)
                  }}/>
              </Centered>
            </form>
          </ModalBody>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({feedbackResponseRdx}) {
  return {feedbackResponseRdx}
}

function mapDispatchToProps (dispatch) {
  return {
    requestFacebookAuth: () => dispatch(requestFacebookAuth()),
    requestFacebookAuthSucceeded: (authData) => dispatch(requestFacebookAuthSucceeded(authData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)