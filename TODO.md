# Roadmap
The current environment booker is a Google Docs spreadsheet which is easily broken and is becoming
difficult to read with all the information that needs to be displayed.

We want to have a website similar to the desk booking website that will allow us to book the 
environments more easily.

## Current spreadsheet layout

| Environment   | Used for Test Harness | SM    | FE      | Claimed By | Reserved At | Reserved Until | Reserved Until (PST) | Reserved until (GMT) | Reserved For   | Available | Is Shareable? | Notes                                                |
|---------------|-----------------------|-------|---------|------------|-------------|----------------|----------------------|----------------------|----------------|----------|---------------|------------------------------------------------------|
| Maci 13 (VAN) | No                    | Maci1 | Yes x 2 | Person 1   | 9/10/2024   | 9/10/2024      | 10:00:00 PM          | 6:00:00 PM           | London Pods    | False    | Yes           | Let me know if you want to deploy a different branch |
| Maci 13 (LON) | No                    | Maci1 | Yes x 2 | Person 2   | 7/10/2024   | 8/10/2024      | 10:00:00 AM          | 6:00:00 AM           | Vancouver Pods | True     | No            |                                                      |

Each environment has 2 rows - 1 for Vancouver and 1 for the London pods.  
### Field description and Usage
**Used for Test Harness** means the user must first check the test harness job has finished before the can use it.  
**SM** gives the config manager that controls the environment
**FE** gives the number of FE urls that the environment has available
**Reserved At** and **Reserved Until** are the days the person wants to book the environment for.  Should be the same day.  
**Reserved Until (tmz)** gives the time in each timezone when the environment will become available for the other team.  This is partially hard-coded and largely ignored.
**Reserved For** show which line each office should use when booking 
**Available** quick indicator whether an environment is available for which office
**Is Shareable** and **Notes** are used if the work being done does not require exclusive access to the environment.  This is new.  

## Next Steps

- Add booking form
  - Get booking information
    - environment (drop down), 
    - name, 
    - office (drop down), 
    - Booking date (default to today), 
    - is shareable (check box), 
    - and notes 
  - Display information text, e.g. if test harness state should be checked or not
- Add environments info view
  - Environment available state by office
  - Details of environment (FE, SM, Test Harness)
  - Who has booked
  - When it will become available by office
  - Whether it is shareable
  - Notes