import React, { useState } from 'react';

const Workflow = () => {
  const [stage, setStage] = useState('Demand Review');

  const stages = ['Demand Review', 'Supply Review', 'Finance Review', 'Executive Decision'];

  const nextStage = () => {
    const currentIndex = stages.indexOf(stage);
    const nextIndex = (currentIndex + 1) % stages.length;
    setStage(stages[nextIndex]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Weekly Workflow Orchestration</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold">Current Stage: {stage}</h2>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={nextStage}>
          Next Stage
        </button>
      </div>
    </div>
  );
};

export default Workflow;