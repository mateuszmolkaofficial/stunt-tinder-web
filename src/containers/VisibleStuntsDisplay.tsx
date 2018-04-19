import { connect } from 'react-redux';
import StuntsDisplay from '../components/StuntsDisplay/StuntsDisplay';
​
const VisibleStuntsDisplay = connect((state: any) => state)(StuntsDisplay)
​
export default VisibleStuntsDisplay