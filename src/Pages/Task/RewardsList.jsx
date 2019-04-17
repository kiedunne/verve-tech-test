import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Reward from '../Task/Reward.jsx';
import './RewardsList.scss'

class RewardsList extends Component {

    render () {
        console.log(this.props)
        const {allRewards} = this.props

        if ( allRewards.length === 0) {
            return <h1>Loading Rewards!</h1>
        }

        return (
            <div className= "RewardsList">
                { 
                    allRewards.filter(reward => {
                        return reward.campaign_id === '001'
                    })
                    .map(reward => {
                        return <Reward reward={reward} key={reward.id}/>
                    })
                }
            </div>
            
        )
    }
}

export default RewardsList;
