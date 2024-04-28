import React, { useState, useEffect } from 'react';
import Organization from './components/Organization';

const App = () => {
  const [orgs, setOrgs] = useState([]);
  const [currentOrg, setCurrentOrg] = useState(null);
  const [currentOrgData, setCurrentOrgData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('orgs.csv');
      const data = await response.text();
      const orgsText = data.split(',');
      setOrgs(orgsText);

      if (orgsText) {
        setCurrentOrg(orgsText[0]);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchOrgData = async () => {
      if (currentOrg) {
        const response = await fetch(`https://api.github.com/orgs/${currentOrg}`);
        const data = await response.json();
        setCurrentOrgData(data);
      }
    };
    fetchOrgData();
  }, [currentOrg]);


  return (
    <div >
      {currentOrgData && (
        <Organization
          orgs={orgs}
          currentOrg={currentOrg}
          currentOrgData={currentOrgData}
          setCurrentOrg={setCurrentOrg}
        />
      )}
    </div>
  );
};

export default App;
