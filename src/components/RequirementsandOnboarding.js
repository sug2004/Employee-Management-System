import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './New.css';
const RecruitmentsandOnboarding = () => {
  const [candidates, setCandidates] = useState([]);
  const [onboardingInfo, setOnboardingInfo] = useState([]);

  const addCandidate = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  const updateOnboardingInfo = (info) => {
    setOnboardingInfo([...onboardingInfo, info]);
  };

  return (
    <div className="container-fluid">
      <h2 className="my-4 text-center">Recruitment and Onboarding</h2>
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center">Recruitment</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const candidate = {
              name: e.target.name.value,
              position: e.target.position.value,
              status: 'Pending'
            };
            addCandidate(candidate);
            e.target.reset();
          }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Position</label>
              <input type="text" className="form-control" name="position" required />
            </div>
            <button type="submit" className="btn btn-primary">Add Candidate</button>
          </form>
          <ul className="list-group mt-4">
            {candidates.map((candidate, index) => (
              <li key={index} className="list-group-item">
                {candidate.name} - {candidate.position} - {candidate.status}
              </li>
            ))}
          </ul>

          <h2 className="mt-4 text-center">Onboarding</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            const info = {
              name: e.target.name.value,
              location: e.target.location.value,
              college: e.target.college.value,
              Domain: e.target.Domain.value,
              Skills: e.target.Skills.value,
              contact: e.target.contact.value
              
            };
            updateOnboardingInfo(info);
            e.target.reset();
          }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input type="text" className="form-control" name="location" required />
            </div>
            <div className="mb-3">
              <label className="form-label">college name</label>
              <input type="text" className="form-control" name="college" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Domain</label>
              <input type="text" className="form-control" name="Domain" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Skills</label>
              <input type="text" className="form-control" name="Skills" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact Information</label>
              <input type="text" className="form-control" name="contact" required />
            </div>
            
            <button type="submit" className="btn btn-primary">Add Onboarding Info</button>
          </form>
          <ul className="list-group mt-4">
            {onboardingInfo.map((info, index) => (
              <li key={index} className="list-group-item">
                {info.name} - {info.location} - {info.college} - {info.Domain} - {info.Skills} -{info.contact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentsandOnboarding;