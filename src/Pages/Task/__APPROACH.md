# Approach to the Task

## Current Implementation:
* RewardsList is populated by Reward components from Campaign X and contain a description and image

* Rewards can be filtered by quantity, points and capPerAmbassador

* Rewards cannot be filtered by 2+ options

* The Reward component has a snapshot test


## Future Implementations:
* Use the filterRewards function to loop through all filters and with the selected filter to return rewards based on 2-3 options.
 
* Refactor out Filters into its own component.

* Refactor quantitiesOptions, pointsOptions and ambassadorOptions into a single method for returning unique options.

* Create a test for RewardsList testing returning the correct stubbed Reward components when filters are set to certain values.