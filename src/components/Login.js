import React from 'react'
import styled from 'styled-components'
import _fp from 'lodash/fp'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { createFeedbackResponse } from '../redux/feedbackResponseReducer'
import { setSplashScreenProgressAction } from '../redux/uiReducer'
import { ThemeBackground, CenterContainer } from './customStyledComponents'
import TethyrLogo from './TethyrLogo'

const ProgressBar = styled.progress.attrs({
  id: 'js-progressbar', className: 'uk-progress'
})`
  position: absolute;
  top: 69%;
  height: 2% !important;
  margin: 0 !important;
  width: ${({width}) => width}% !important;
`

const ProgressBarLeft = ProgressBar.extend`
  left: 0;
`

const ProgressBarRight = ProgressBar.extend`
  right: 0;
`

class Login extends React.PureComponent {
  constructor (props) {
    super(props)

    const uid = _fp.get('match.params.uid')(this.props)
    if (uid) {
      this.props.createFeedbackResponse(uid)
      this.props.setSplashScreenProgress(0)
    }
  }
  render = () => {
    const { uiRdx } = this.props
    return (
      <ThemeBackground>
        <CenterContainer>
          <TethyrLogo style={{color: 'white'}}/>
          <ProgressBarLeft value={uiRdx.splashScreenProgress || 0} max={89} width={78}/>
          <ProgressBarRight value={((uiRdx.splashScreenProgress || 0)- 89)} max={11} width={11}/>
        </CenterContainer>
      </ThemeBackground>
    )
  }
}

function mapStateToProps({uiRdx}) {
  return {
    uiRdx
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createFeedbackResponse: (feedbackRequestUid) => dispatch(createFeedbackResponse(feedbackRequestUid)),
    setSplashScreenProgress: (progress) => dispatch(setSplashScreenProgressAction(progress))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))