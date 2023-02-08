import React, {Component} from 'react';
import Task from "./Task";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            category: 'No category',
            colors: ['#64ebed', '#5cf77d', '#f7f55c', '#fcb932', '#d132fc'],
            duringColor: '#64ebed',
            menu: false

        }
    }

    taskEdit = (index, text) => {
        const temp = [...this.state.tasks]
        temp[index] = text
        this.setState({tasks: temp})
    }

    taskRemove = index => {
        const temp = [...this.state.tasks]
        temp.splice(index, 1)
        this.setState({tasks: temp})
    }

    handlerAddTaskClick = () => {
        const temp = [...this.state.tasks]
        temp.push('New task')
        this.setState({tasks: temp})
    }
    handlerColorChangeMenuClick = () => {
        this.setState({menu: !this.state.menu})
    }

    handlerColorChangeClick(event, color) {
        this.setState({duringColor: color})
        this.setState({menu: !this.state.menu})

    }

    render() {
        return (
            <div className={'task-list'} style={{background: this.state.duringColor}}>
                <input type={'text'} defaultValue={'Group name'} ref={this.newText} id={'group-name'}></input>
                <div className={'addingArea'}>
                    <button className={'btn btn-add'} onClick={this.handlerAddTaskClick}>
                        Add task
                    </button>
                    {/*<button className={'btn-removGroup'} onClick={}>x</button>*/}
                    <div className={'dropdown'}>
                        <button id={'color-menu'} className={'btn color-change'}
                                style={{background: this.state.duringColor}}
                                onClick={this.handlerColorChangeMenuClick}></button>
                        {
                            <div className={'dropdown-content'} style={{background: this.state.duringColor}}>{
                                this.state.menu ? this.state.colors.map((item, index) =>
                                    <button key={index} index={index} className={'btn color-change'}
                                            style={{background: `${item}`}}
                                            onClick={(e) => this.handlerColorChangeClick(e, item)}></button>
                                ) : ''}</div>

                        }

                    </div>
                </div>
                <div className={'tasksArea'}>
                    {this.state.tasks.map((item, index) =>
                        <Task key={index} updateTask={this.taskEdit}
                              removeTask={this.taskRemove} index={index}>{item}</Task>)}
                </div>

            </div>
        );
    }
}


export default TaskList;