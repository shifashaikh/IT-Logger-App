import {GET_LOGS,SET_LOADING, LOGS_ERROR ,ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT,UPDATE_LOG, 
    SEARCH_LOGS} from "./types";

// getting logs from server
export const getLogs=()=>async(dispatch)=>{
    try {
        setLoading();
        const res = await fetch("http://localhost:5000/logs");
        const data= await res.json();
        dispatch({
            type:GET_LOGS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:LOGS_ERROR,
            payload:error.res.statusText
        })
    }
}
 
// add logs to server
export const addLogs=(log)=>async(dispatch)=>{
    try {
        setLoading();
        const res = await fetch("http://localhost:5000/logs",{
            method:'POST',
            body:JSON.stringify(log),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data= await res.json();
        dispatch({
            type:ADD_LOG,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:LOGS_ERROR,
            payload:error.res.statusText
        })
    }
}
// Delete log from server
 
export const deleteLog = id => async dispatch => {
    try {
      setLoading();
      await fetch(`http://localhost:5000/logs/${id}`, {
        method: 'DELETE'
      });
      dispatch({
        type:DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };

//Update log on server 

export const updateLog = log => async dispatch => {
    try {
      setLoading();
      const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
        method: 'PUT',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await res.json();
      dispatch({
        type: UPDATE_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  //Search logs

  export const searchLogs = text => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch(`/logs?q=${text}`);
      const data = await res.json();
  
      dispatch({
        type: SEARCH_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  // Set current log
export const setCurrent = log => {
    return {
      type: SET_CURRENT,
      payload: log
    };
  };
  
  // Clear current log
  export const clearCurrent = () => {
    return {
      type: CLEAR_CURRENT
    };
  };

//setloading to true
export const setLoading=()=>{
    return{
        type:SET_LOADING
    }
}



// create action
// export const getLogs=()=>{
//     return async(dispatch)=>{
//         setLoading();
//         const res = await fetch("http://localhost:5000/logs");
//         const data= await res.json();
//         dispatch({
//             type:GET_LOGS,
//             payload:data
//         })
//     }
// }
