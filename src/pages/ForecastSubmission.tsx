import React, { useState } from 'react';

const ForecastSubmission = () => {
  const [formData, setFormData] = useState({
    organization: '',
    confidenceScore: '',
    assumptions: '',
    risks: '',
    upsideDrivers: '',
    downsideDrivers: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Forecast</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2">Organization</label>
          <input type="text" name="organization" value={formData.organization} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confidence Score</label>
          <input type="number" name="confidenceScore" value={formData.confidenceScore} onChange={handleChange} className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Assumptions</label>
          <textarea name="assumptions" value={formData.assumptions} onChange={handleChange} className="w-full p-2 border" required></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Risks</label>
          <textarea name="risks" value={formData.risks} onChange={handleChange} className="w-full p-2 border" required></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Upside Drivers</label>
          <textarea name="upsideDrivers" value={formData.upsideDrivers} onChange={handleChange} className="w-full p-2 border" required></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Downside Drivers</label>
          <textarea name="downsideDrivers" value={formData.downsideDrivers} onChange={handleChange} className="w-full p-2 border" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ForecastSubmission;