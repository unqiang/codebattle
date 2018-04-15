import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';
import i18n from '../../i18n';

const Task = ({ task }) =>
  (_.isEmpty(task) ? null : (
    <div className="card">
      <div className="card-header font-weight-bold">
        {`Task: ${task.name}`}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-muted">
          {`${i18n.t('Level')}: ${task.level}`}
        </h6>
        <ReactMarkdown
          className="card-text"
          source={task.description}
        />
      </div>
    </div>
  ));

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
