import { connect } from 'react-redux'
import forgetPsdComponentWrapper from './forget-component.js'
import { getMsgCode, resetPsdAction, isShowGame } from '../../reducers/user'

const mapDispatchToProps = (dispatch, props) => {
    return {

        resetPsd(data,callback) {
            resetPsdAction(data,()=>{
                callback ? callback() : null;
                isShowGame()
            })
        },

        goToBack() {
            window.register = "login"
            props.history.replace('/')
        },

        getCode(data) {
            getMsgCode(data)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.UserReducer
    }
}


const ForgetPassword = connect(
    mapStateToProps,
    mapDispatchToProps
)(forgetPsdComponentWrapper)

export default ForgetPassword;