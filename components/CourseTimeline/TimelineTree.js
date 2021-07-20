import React from 'react';

const TimelineTree = ({ weeklyTopicTasks }) => {
  return (
    <>
      {weeklyTopicTasks.map((weekTask, i, allWeekTasks) => {
        const previousWeekTask = allWeekTasks[i - 1];
        const lastTaskOfPreviousWeek = previousWeekTask
          ? previousWeekTask.tasks[previousWeekTask.tasks.length - 1]
          : null;

        // console.log(lastTaskOfPreviousWeek);
        return (
          <>
            <div className="w-full text-center my-2 font-bold font-lato text-green-600 text-2xl">
              Week {i + 1}
            </div>

            {/* <h3>Remaining Time: {weekTask.remainingTime} minutes</h3> */}
            <div className="grid md:grid-cols-timeline-tree">
              {i % 2 === 1 ? (
                <>
                  <div></div>
                  <div className="md:flex md:justify-center hidden text-center">
                    <div className=" border-green-600 border-l-2 h-full rounded-full border-solid"></div>
                  </div>
                </>
              ) : null}
              <div
                className={`justify-self-center w-full rounded p-6 box-border shadow bg-royal-blue-500`}
              >
                {weekTask.tasks.map((task, i, arr) => {
                  const isFirstTask = i === 0;
                  const isLastTask = i + 1 === arr.length;
                  return (
                    <li className="text-white text-lg list-none grid grid-cols-timeline-item grid-gap-0 align-center ">
                      <div className="grid grid-rows-timeline-list-bullet">
                        {isFirstTask ? (
                          <div></div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="w-0.5 h-full bg-white"></div>
                          </div>
                        )}
                        <div className="flex items-center justify-center">
                          <div className="w-2 h-2 flex rounded-full self-center place-self-center border-2 border-solid border-white bg-royal-blue-500"></div>
                        </div>
                        {isLastTask ? (
                          <div></div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="w-0.5 h-full bg-white"></div>
                          </div>
                        )}
                      </div>

                      <p className="px-2 inline-block">
                        {task.name}
                        {isFirstTask
                          ? task._id === lastTaskOfPreviousWeek?._id
                            ? '(Contd.)'
                            : ''
                          : ''}
                      </p>
                    </li>
                  );
                })}
              </div>
              {i % 2 === 0 ? (
                <>
                  <div className="md:flex md:justify-center hidden text-center">
                    <div className=" border-green-600 border-l-2 h-full rounded-full border-solid"></div>
                  </div>{' '}
                  <div></div>
                </>
              ) : null}
            </div>
          </>
        );
      })}
    </>
  );
};

export default TimelineTree;
