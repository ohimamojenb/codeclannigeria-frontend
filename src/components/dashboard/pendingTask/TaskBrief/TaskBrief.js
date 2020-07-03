import React from 'react';
import DashboardLayout from '../../../common/DashboardLayout';
import TaskBriefStyled from './TaskBriefStyled';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';

function TaskBrief(props) {
  const { id } = props.match.params;
  return (
    <TaskBriefStyled>
      <Link
        to="/dashboard/pending-task"
        className="btn btn-outline-primary btn-sm mb-3 "
      >
        <i class="fas fa-arrow-left"></i> Back to Tasks
      </Link>
      <h2>Task 1: Article preview component</h2>
      <Tag color="#1f59bb">Frontend</Tag>
      <Tag color="#1f59bb">Stage 1</Tag>
      <div className="task-details mt-3">
        <h4>Task Brief</h4>
        <p>
          Your challenge is to build out this article preview component and get
          it looking as close to the design as possible.
        </p>

        <p>
          You can use any tools you like to help you complete the challenge. So
          if you've got something you'd like to practice, feel free to give it a
          go.
        </p>
        <p>
          The only JavaScript you'll need for this challenge is to initiate the
          share options when someone clicks the share icon.
        </p>

        <p>Your users should be able to:</p>

        <ul>
          <li>
            View the optimal layout for the component depending on their
            device's screen size
          </li>

          <li>
            See the social media share links when they click the share icon
          </li>
        </ul>

        <p>
          Download the starter code and go through the README.md file. This will
          provide further details about the project. The style-guide.md file is
          where you'll find colors, fonts, etc.
        </p>

        <p>
          Want some support on the challenge? Join our Slack community and ask
          questions in the help channel.
        </p>

        <p>
          For this Task, ensure you check out{' '}
          <Link to="/dashboard/course/frontend/1">Html Fundamental course</Link>{' '}
        </p>
      </div>
      <div className="cta_container">
        {/* <button className="btn btn-outline-secondary">
          Download starter files
        </button> */}
        <Link
          to={`/dashboard/pending-task/submit/${id}`}
          className="btn btn-outline-primary mr-0"
        >
          Submit Task
        </Link>
      </div>
    </TaskBriefStyled>
  );
}

export default DashboardLayout(TaskBrief);