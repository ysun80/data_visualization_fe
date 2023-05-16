import store from '../../store'
import { loadDemands } from '../../actionCreators'

const initialData = {
  demands: {},
  isLoadingCompleted: false,
}

export const ADD_DEMANDS = 'add demands'

const demandReducer = (state = initialData, action) => {
  if (action.type === ADD_DEMANDS) {
    return {
      ...state,
      demands: action.demands,
      isLoadingCompleted: true,
    }
  }
  return state
}

export const fetchDemand = () => {
  fetch(
    `/api/demand`
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('invalid fetch')
      }
    })
    .then((data) => store.dispatch(loadDemands(data))
    )
    .catch((err) => console.log(err))
}

export default demandReducer
