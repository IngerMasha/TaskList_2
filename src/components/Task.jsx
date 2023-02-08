import React, {Component} from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handlerRemoveClick = this.handlerRemoveClick.bind(this)
        this.newText = React.createRef()
        this.state = {isEdit: false}
    }

    handlerEditClick = () => {
        this.setState({isEdit: true})
    }

    handlerRemoveClick = function () {
        this.props.removeTask(this.props.index)
    }

    handlerSaveClick = () => {
        const value = this.newText.current.value
        this.props.updateTask(this.props.index, value)
        this.setState({isEdit: false})
    }

    renderNorm = () => {
        return (
            <div className='task'>
                <div className={'task-text-saved'}>{this.props.children}</div>
                <button className={'btn'} onClick={this.handlerEditClick}>Edit</button>
                <button className={'btn'} onClick={this.handlerRemoveClick}>Remove</button>
            </div>
        );
    }

    renderEdit = () => {
        return (
            <div className={'task'} style={{display:'flex', flexDirection:'column'}}>
                <textarea defaultValue={this.props.children} ref={this.newText}></textarea>
                {/*<input type={'text'} defaultValue={this.props.children} ref={this.newText}></input>*/}
                <button className={'btn success'} onClick={this.handlerSaveClick}>Save</button>
            </div>
        )
    }

    render() {
        if (this.state.isEdit)
            return this.renderEdit()
        else
            return this.renderNorm()
    }
}

export default Task;