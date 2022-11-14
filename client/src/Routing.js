import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountDetails from './components/AccountDetails/AccountDetails';
import CreateAccount from './components/CreateAccount/CreateAccount';
import DisplayAccounts from './components/DisplayAccounts/DisplayAccounts';
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions';
import LoanTransaction from './components/LoanTransaction/LoanTransaction';
import MainSection from './components/MainSection/MainSection';
import TransferMoney from './components/TransferMoney/TransferMoney';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route exact path="/transfer/:id" element={<TransferMoney />} />
          <Route exact path="/create" element={<CreateAccount />} />
          <Route exact path="/accounts" element={<DisplayAccounts />} />
          <Route exact path="/accounts/:id" elements={<AccountDetails />} />
          <Route exact path="/loans/:id" element={<LoanTransaction />} />
          <Route
            exact
            path="/transactions/:id"
            element={<DisplayTransactions />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
