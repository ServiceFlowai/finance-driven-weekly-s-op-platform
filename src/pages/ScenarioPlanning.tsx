import React from 'react';

function ScenarioPlanning() {
  const scenarios = [
    { id: 1, name: 'Scenario A', description: 'Constrained supply with high demand' },
    { id: 2, name: 'Scenario B', description: 'Balanced supply and demand' },
    { id: 3, name: 'Scenario C', description: 'Excess supply with low demand' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Scenario Planning Support</h1>
      <ul className="list-disc pl-5">
        {scenarios.map((scenario) => (
          <li key={scenario.id} className="mb-2">
            <strong>{scenario.name}:</strong> {scenario.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScenarioPlanning;