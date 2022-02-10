import {HANDLE_TEMPLATE_ACTIONS} from "../actions/handleTemplateActions";
export const initialTemplateState={
    dynamicNavState:false
}
export const handleTemplateReducer=(state,action)=>{
    switch (action.type) {
        case HANDLE_TEMPLATE_ACTIONS.TOGGLE_DYNAMIC_NAV :{
            return state.dynamicNavState?{dynamicNavState:false}:{dynamicNavState:true}
        }
        default:
            break;
    }
}