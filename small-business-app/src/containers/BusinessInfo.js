import { connect } from 'react-redux'
import BusinessInfo from '../components/BusinessInfo'
// import { addBusiness, removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses
  }
}

export default connect(mapStateToProps)(BusinessInfo)