import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadInvestmentFunds } from './actions';
import InvestmentFundList from '../../components/InvestmentFundList';

class InvestmentFundListPage extends Component {
  componentWillMount = () => {
    this.props.loadInvestmentFundsDispatch();
  }

  render() {
    const { investmentFunds, loadingInvestmentFunds } = this.props;

    return (
      <InvestmentFundList loading={loadingInvestmentFunds} investmentFunds={investmentFunds} />
    );
  }
}

InvestmentFundListPage.defaultProps = {
  investmentFunds: [],
  loadingInvestmentFunds: false,
};

InvestmentFundListPage.propTypes = {
  loadInvestmentFundsDispatch: PropTypes.func.isRequired,
  investmentFunds: PropTypes.arrayOf(PropTypes.object),
  loadingInvestmentFunds: PropTypes.bool,
};

const mapStateToProps = state => ({
  investmentFunds: state.investmentFundListPageReducer.investmentFunds,
  loadingInvestmentFunds: state.investmentFundListPageReducer.loading,
});

export function mapDispatchToProps(dispatch) {
  return {
    loadInvestmentFundsDispatch: () => dispatch(loadInvestmentFunds()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentFundListPage);
