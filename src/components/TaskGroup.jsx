import React, {Component} from 'react';
import TaskList from "./TaskList";

class TaskGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={'taskGroup'}>
                <button onClick={this.handlerAddGroupClick}>New Group</button>
                {this.state.tasks.map((item, index) =>
                    <TaskGroup></TaskGroup>)}              </div>
        );
    }
}

export default TaskGroup;