import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAll } from "./taskSlice";

const DTasks = (props) => {

    useEffect(() => {
        props.fetchAllDTasks()
    }, [])

    return (
        <div>
            <p className="text-3xl">DTasks</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dTaskList: state.dTask.list
    }
}

const mapActionToProps = {
    fetchAllDTasks: fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(DTasks)