import React, { Component } from "react";
import PropTypes from "prop-types";
import Reward from "../Task/Reward.jsx";
import "./RewardsList.scss";

class RewardsList extends Component {
  state = {
    loading: true,
    rewards: [],
    filteredRewards: [],
    quantity: null,
    points: null,
    capPerAmbassador: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.allRewards !== this.props.allRewards) {
      this.setState({
        loading: false,
        rewards: this.props.allRewards,
        filteredRewards: this.props.allRewards
      });
    }
  }

  filterRewards(filter) {
    if (!filter.value) {
      return this.setState({
        filteredRewards: this.state.rewards
      });
    }
    const filteredRewards = this.state.rewards.filter(reward => {
      console.log(filter.value)
      return reward[filter.type] == filter.value;
    });
    console.log(filteredRewards)
    this.setState({
      filteredRewards
    });
  }

  handleFilterChange = event => {
    const type = event.target.name;
    const value = event.target.value;
    console.log(value);
    console.log(type);
    const filter = {
      type,
      value
    };
    this.filterRewards(filter);
  };

  quantitiesOptions(rewards) {
    let rewardQuantities = rewards.map(reward => {
      return reward.quantity
    })
    let uniq = [...new Set(rewardQuantities)]
    return uniq
  }

  pointsOptions(rewards) {
    let rewardPoints = rewards.map(reward => {
      return reward.points
    })
    let uniq = [...new Set(rewardPoints)]
    return uniq
  }

  ambassadorOptions(rewards) {
    let rewardAmbasadors = rewards.map(reward => {
      return reward.capPerAmbassador
    })
    let uniq = [...new Set(rewardAmbasadors)]
    return uniq

  }



  render() {
    const { loading, filteredRewards, rewards } = this.state;

    if (loading) {
      return <h1>Loading Rewards!</h1>;
    }

    return (
      <div>
        <label>Quantity</label>
        <select name="quantity" onChange={this.handleFilterChange}>
          {this.quantitiesOptions(rewards).map(quantity => {
            return <option value={quantity}>{quantity} </option>
          })
          }
        </select>

        <label>Points</label>
        <select name="points" onChange={this.handleFilterChange}>
          <option value="">all</option>
          {this.pointsOptions(rewards).map(points => {
            return <option value={points}>{points} </option>
          })
          }
        </select>

        <label>Cap per ambassador</label>
        <select name="capPerAmbassador" onChange={this.handleFilterChange}>
          <option value="">all</option>
          {this.ambassadorOptions(rewards).map(cap => {
            return <option value={cap}>{cap} </option>
          })
          }
        </select>

        <div className="RewardsList">
          {filteredRewards
            .filter(reward => {
              return reward.campaign_id === "001";
            })
            .map(reward => {
              return <Reward reward={reward} key={reward.id} />;
            })}
        </div>
      </div>
    );
  }
}

export default RewardsList;
