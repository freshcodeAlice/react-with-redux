import React from 'react';
import { connect } from 'react-redux';
import {
  updateTaskAction,
  deleteTaskAction
} from '../../actions/actionCreators';

const TaskList = props => {
  const { tasks } = props;

  return (
    <section>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => {
          const { id } = task;
          return (
            <li key={id}>
              <h2> {id} </h2>
              <div> {task.body} </div>
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={({ target: { checked } }) => {
                  props.updateTaskAction({
                    id: id,
                    values: { isDone: checked }
                  });
                }}
              />
              <button onClick={() => props.deleteTaskAction(id)}>
                Delete task
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  updateTaskAction,
  deleteTaskAction
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
