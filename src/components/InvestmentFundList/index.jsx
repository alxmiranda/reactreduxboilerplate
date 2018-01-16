import React from 'react';
import { PropTypes } from 'prop-types';

const InvestmentFundList = ({ loading, investmentFunds }) => (
  <div>
    <h1>Fundos de investimento</h1>
    {loading && <h2>Carregando...</h2>}
    {!loading && !investmentFunds.length && <p>Nenhum fundo encontrado.</p>}
    {!loading && !!investmentFunds.length &&
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Manager</th>
          </tr>
        </thead>
        <tbody>
          {investmentFunds.map(fund => (
            <tr key={fund.id}>
              <td>{fund.code}</td>
              <td>{fund.name}</td>
              <td>{fund.fundManager}</td>
            </tr>))}
        </tbody>
      </table>}
  </div>
);

InvestmentFundList.defaultProps = {
  loading: false,
  investmentFunds: [],
};

InvestmentFundList.propTypes = {
  loading: PropTypes.bool,
  investmentFunds: PropTypes.arrayOf(PropTypes.object),
};

export default InvestmentFundList;
