import { StateTemplate } from '../../types/stateManagement/handleTemplate'
import { HANDLE_TEMPLATE_ACTIONS } from '../actions/handleTemplateActions'

export const initialTemplateState:StateTemplate = {
  dynamicNavState: false
}
export const handleTemplateReducer = (state:StateTemplate, action:{type:string}):StateTemplate => {
  switch (action.type) {
    case HANDLE_TEMPLATE_ACTIONS.TOGGLE_DYNAMIC_NAV :{
      return state.dynamicNavState ? { dynamicNavState: false } : { dynamicNavState: true }
    }
    default:
      return state
  }
}
