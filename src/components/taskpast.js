// class Task extends React.Component
// {
//     constructor(props) {
//         super(props);
//         this.handlerRemoveClick = this.handlerRemoveClick.bind(this)
//         this.newText = React.createRef()
//         this.state = {isEdit: false}
//     }
//
//     handlerEditClick = () => {this.setState({isEdit: true})}
//
//     handlerRemoveClick = function ()
//     {
//         this.props.removeTask(this.props.index)
//     }
//
//     handlerSaveClick = () =>
//     {
//         const value = this.newText.current.value
//         this.props.updateTask(this.props.index, value)
//         this.setState({isEdit: false})
//     }
//
//     renderNorm = () =>
//     {
//         return (
//             <div className='box'>
//                 {/*<div>{this.props.task}</div>*/}
//                 <div>{this.props.children}</div>
//                 <button className={'btn light'} onClick={this.handlerEditClick}>Edit</button>
//                 <button className={'btn red'} onClick={this.handlerRemoveClick}>Remove</button>
//             </div>
//         );
//     }
//
//     renderEdit = () =>
//     {
//         return (
//             <div className={'box'}>
//                 <textarea defaultValue={this.props.children} ref={this.newText}></textarea>
//                 <button className={'btn success'} onClick={this.handlerSaveClick}>Save</button>
//             </div>
//         )
//     }
//
//     render() {
//         if(this.state.isEdit)
//             return this.renderEdit()
//         else
//             return this.renderNorm()
//     }
// }
//
// class TaskList extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {tasks: []}
//     }
//
//     taskEdit = (index, text) =>//сделала
//     {
//         const temp = [...this.state.tasks]
//         temp[index] = text
//         this.setState({tasks: temp})
//     }
//
//     taskRemove = index =>//сделала
//     {
//         const temp = [...this.state.tasks]
//         temp.splice(index, 1)
//         this.setState({tasks: temp})
//     }
//
//     handlerAddTaskClick = () =>
//     {
//         const temp = [...this.state.tasks]
//         temp.push('New task')
//         this.setState({tasks: temp})
//     }
//
//     render() {
//         return (
//             <div className={'field'}>
//                 <button className={'btn new'} onClick={this.handlerAddTaskClick}>Add task
//                 </button>
//                 {this.state.tasks.map((item, index) =>
//                     <Task key={index} updateTask={this.taskEdit}
//                           removeTask={this.taskRemove} index={index}>{item}</Task>)}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<TaskList/>, document.getElementById('root')
//
// // ReactDOM.render(
// //     <div className={'field'}>
// //         <Task task={'Task1'}/>
// //         <Task task={'Task2'}/>
// //         <Task task={'Task3'}/>
// //     </div>, document.getElementById('root')
// )