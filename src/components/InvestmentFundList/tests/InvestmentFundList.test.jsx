import React from 'react';
import { render } from 'enzyme';
import expect from 'expect';
import InvestmentFundList from '../';

const investmentFunds = [
  {
    code: '6029',
    cnpj: '12865128000105',
    name: 'CAPITÂNIA EQUITIES INSTITUCIONAL FUNDO DE INVESTIMENTO EM COTAS DE FUNDOS DE INVESTIMENTO EM AÇÕES',
    id: '0b8dd692-94d2-4f34-bea4-0073eca1718a',
    fundManagerId: 'c2f66b68-5f78-4a06-b3c3-f9007e0529c7',
    fundManager: 'Capitania Investimentos',
    properties: {
      investmentFundId: '0b8dd692-94d2-4f34-bea4-0073eca1718a', id: 'e2d5916e-846a-4d98-4f2e-08d50048c8fe', active: true, privateCredit: false, accountOrder: false, xpPlatform: true, qualifiedInvestor: false,
    },
    productId: 1,
    productName: 'Fundos de investimento',
    brands: [{ id: 3, name: 'Xp Investimentos' }],
  }, {
    code: '6935',
    cnpj: '16498956000103',
    name: 'Modal Equity Value FIA',
    id: '74df40e8-34c7-478f-bf21-0094e2059de9',
    fundManagerId: '97f449f2-4926-4284-b2ae-f6e5c1862527',
    fundManager: 'Modal Asset',
    properties: {
      investmentFundId: '74df40e8-34c7-478f-bf21-0094e2059de9', id: '068c4ff4-8297-4076-4f8a-08d50048c8fe', active: true, privateCredit: false, accountOrder: false, xpPlatform: true, qualifiedInvestor: false,
    },
    productId: 1,
    productName: 'Fundos de investimento',
    brands: [{ id: 3, name: 'Xp Investimentos' }],
  }, {
    code: '770000',
    cnpj: '17685620000104',
    name: 'Brasil Plural Prev FIC FIM',
    id: '37292c9f-9787-4b4f-8629-00f117709f73',
    fundManagerId: '86bffbaa-2f6b-4e65-b714-eb3b115f0820',
    fundManager: 'Brasil Plural',
    properties: {
      investmentFundId: '37292c9f-9787-4b4f-8629-00f117709f73', id: '3fbee6e7-fcba-423d-505e-08d50048c8fe', active: true, privateCredit: false, accountOrder: true, xpPlatform: true, qualifiedInvestor: false,
    },
    productId: 3,
    productName: 'Fundo de previdência',
    brands: [{ id: 3, name: 'Xp Investimentos' }],
  },
];

describe('InvestmentFundList', () => {
  it('Renders as the snapshot if no prop is provided', () => {
    const rendered = render(<InvestmentFundList />);
    expect(rendered).toMatchSnapshot();
  });

  it('Renders as the snapshot if it is loading', () => {
    const rendered = render(<InvestmentFundList loading />);
    expect(rendered).toMatchSnapshot();
  });

  it('Renders as the snapshot if it has investmentFunds', () => {
    const rendered = render(<InvestmentFundList investmentFunds={investmentFunds} />);
    expect(rendered).toMatchSnapshot();
  });

  it('Renders as the snapshot if it has investmentFunds and also is loading', () => {
    const rendered = render(<InvestmentFundList loading investmentFunds={investmentFunds} />);
    expect(rendered).toMatchSnapshot();
  });
});
