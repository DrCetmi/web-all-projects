# Organization repos viewer

This complex exercise is about practicing React component lifecycles.

You will finish an app that first fetches a list of GitHub organizations names from a text file. It then cycles through the names, fetching the organization data from the GitHub API. If an organization is viewed for over 15 seconds, it fetches a list of public repositories for that organization.

All the CSS is already complete and included in this repository.

**Live demo** (remember to wait 15+ seconds for repo list) https://digitalcareerinstitute.github.io/SPA-Component-Lifecycle/

## Tasks

### Task 1

- In `App.jsx`
    - Create a state variable; `orgs`

    - When App is first rendered, `fetch` the included `orgs.csv`
        - Convert the response into an array of strings
        - Save the resulting array into `orgs`

    - Create another state variable; `currentOrg`
        - Once the `orgs` state variable array has data
            - Take the first item and store it into `currentOrg`

    - Create another state variable; `currentOrgData`
        - Once the `currentOrg` state variable has a value
        - Start to fetch the organization data from GitHub
            - For example, `GET https://api.github.com/orgs/microsoft`

    - Once the `currentOrgData` state variable has a value
        - Render it using the included `Organization` component
            - Pass the following as props `Organization`:
                - `orgs`, `currentOrg`, `currentOrgData`, `setCurrentOrg`

### Task 2

- In `Organization.jsx`
    - Read the code
    - Don't delete any of the old code when working

    - Create a state variable; repos

    - As soon the component it's rendered, start a 15 second timer
    - After 15 seconds, `fetch` the repos of that organization
        - For example, `GET https://api.github.com/orgs/microsoft/repos`
        - Save the resulting array into the state variable `repos`

    - Once the `repos` state variable has a value
        - Use `Array.prototype.map()`
        - Use the included `Repo` component (already complete)

- Test the application and check
    - Only show the repositories of the currently open organization
    - Never show any repositories during the 15 second waiting time
    - No errors or warnings in the developer tools `console`
    - Only one request to fetch organization details
    - Only one request to fetch organization repo list
