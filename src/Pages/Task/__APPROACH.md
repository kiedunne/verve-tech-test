# Approach to the Task

## Current Implementation:
* RewardsList is populated by Reward components from Campaign X and contain a description and image

* Rewards can be filtered by quantity, points and capPerAmbassador

* The Reward component has a snapshot test


## Future Implementations:
* Use the filterRewards function to loop through all filters and with the selected filter to return rewards based on 2-3 options.
 
* Refactor out Filters into its own pure component that renders all 3 filters.

* Create a test for RewardsList testing returning the correct stubbed Reward components when filters are set to certain values.