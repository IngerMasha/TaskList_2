import React from 'react';
import TaskGroup from "./TaskGroup";
import Task from "./Task";
import TaskList from "./TaskList";
import Navigation from "./Navigation";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskLists: [],
            page:'Home'
        }
    }
    taskRemove = index => {
        const temp = [...this.state.taskLists]
        temp.splice(index, 1)
        this.setState({taskLists: temp})
    }
    handlerAddTaskListClick = () => {
        const temp = [...this.state.taskLists]
        temp.push('New group')
        this.setState({taskLists: temp})
    }


    render() {
        return (
            <div>
                <div>
                    <Navigation/>
                </div>
                <button className={'btn-groupAdd'} onClick={this.handlerAddTaskListClick}>New Group</button>

                <div className={'App'}>
                    {this.state.taskLists.map((item, index) =>
                        <TaskList key={index} removeGroup={this.taskRemove}></TaskList>)}
                </div>

            </div>
        );
    }

};

export default Main;