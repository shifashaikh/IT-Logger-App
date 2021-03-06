import React,{useState,useEffect} from 'react'
import axios from "axios";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getLogs} from '../../actions/logActions';

const Logs = ({log:{logs,loading},getLogs}) => {
   useEffect(() => {getLogs()}, []);

    if(loading || logs===null){
        return<Preloader/>
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                 <h4 className="center">System Logs</h4>
            </li>
        {
            logs.map((log=> <LogItem log={log} key={log.id} />))
        }
        </ul>
    )
}
Logs.propType={
    log:PropTypes.object.isRequired,
    getLogs:PropTypes.func.isRequired
}
//getting logs from reducer
const mapStateToProps=state=>({
    log:state.log,

})
export default connect(mapStateToProps,{getLogs})(Logs)
