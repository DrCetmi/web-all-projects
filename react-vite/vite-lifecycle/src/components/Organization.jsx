import { useState, useEffect } from "react";
import "./Organization.css";
import Repo from "./Repo";
function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    let isCancelled = false;
    // const fetchrepo = setTimeout(() => {
    //   fetch("https://api.github.com/orgs/" + currentOrg + "/repos")
    //     .then((response) => response.json())
    //     .then((result) => setRepos(result));
    // }, 500);
    const fetchrepo = async () => {
      try {
        const resp = await fetch(
          `https://api.github.com/orgs/${currentOrg}/repos`
        );
        const data = await resp.json();
        if (!isCancelled) {
          setRepos(data);
        }
        console.log(data);
      } catch (err) {
        if (!isCancelled) {
          console.error(err);
        }
      }
    };
    const right = setTimeout(fetchrepo, 2000);
    return () => {
      isCancelled = true;
      setRepos([]);
      clearTimeout(right);
    };
  }, [currentOrg]);
  // diese function erweitert immer die stelle von orgs damit er aus orgs.csv den nächsten namen nimmt somit wird die kompllete currentOrData immer wieder verändert und er fetcht immer neue daten raus und fügt sie hinzu.
  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
  }
  // hier setz ich nur die daten aus currOrgData ein.
  return (
    <div className="org">
      <button onClick={handleNext}>Next</button>
      <h2>{currentOrgData.name}</h2>
      <img src={currentOrgData.avatar_url} alt="" />
      <p>{currentOrgData.description}</p>
      <p>
        {currentOrgData.location} {currentOrgData.followers} followers
      </p>
      <div>
        <h3>Repos</h3>
        <ul>
          {repos?.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Organization;