import React, { Component } from "react";
import PropTypes from "prop-types";
import Reward from "../Task/Reward.jsx";
import "./RewardsList.scss";

class RewardsList extends Component {
  state = {
    loading: true,
    rewards: [],
    filteredRewards: [],
  };

  componentDidMount() {
    let filters = {
      quantity: { value: "", options: [] },
      points: { value: "", options: [] },
      capPerAmbassador: { value: "", options: [] }
    };
    this.setState({
      filters
    })
  }
  getUniqueOptions(options) {
    const unique = [...new Set(options)]
    return unique
  }

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
    const { filters } = this.state

    if (!filter.value) {
      return this.setState({
        filteredRewards: this.state.rewards
      });
    }
    selectedFilters.push(filter.value)

    const filteredRewards = this.state.rewards.filter(reward => {
      return reward[filter.type] == filter.value;
    });
    this.setState({
      filteredRewards
    });
  }

  handleFilterChange = event => {
    const type = event.target.name;
    const value = event.target.value;
    const filter = {
      type,
      value
    };
    this.filterRewards(filter);
  };

  render() {
    const { loading, filteredRewards, rewards } = this.state;
    const quantities = rewards.map(reward => {
      return reward.quantity
    })
    const points = rewards.map(reward => {
      return reward.points
    })
    const capPerAmbassador = rewards.map(reward => {
      return reward.capPerAmbassador
    })

    if (loading) {
      return <h1>Loading Rewards!</h1>;
    }

    return (
      <div>
        <div className="filterBar">
          <label>Quantity</label>
          <select name="quantity" onChange={this.handleFilterChange}>
            <option value="">all</option>
            {this.getUniqueOptions(quantities).map(quantity => {
              return <option value={quantity}>{quantity} </option>
            })
            }
          </select>

          <label>Points</label>
          <select name="points" onChange={this.handleFilterChange}>
            <option value="">all</option>
            {this.getUniqueOptions(points).map(points => {
              return <option value={points}>{points} </option>
            })
            }
          </select>

          <label>Cap per ambassador</label>
          <select name="capPerAmbassador" onChange={this.handleFilterChange}>
            <option value="">all</option>
            {this.getUniqueOptions(capPerAmbassador).map(cap => {
              return <option value={cap}>{cap} </option>
            })
            }
          </select>
        </div>
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
