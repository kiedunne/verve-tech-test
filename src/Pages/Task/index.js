import { compose } from 'react-apollo';

import TaskQuery from './Task.query.jsx';
import RewardsList from './RewardsList.jsx';

export default compose(
    TaskQuery,
)(RewardsList);
