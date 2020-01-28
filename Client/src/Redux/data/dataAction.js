import Axios from 'axios';


export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN,
})

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error },
})

export const fetchDataSuccess = () => async (dispatch, getState) => {

    const res =await Axios.post('/')

}