import React, { useState, useEffect } from 'react';
import './DisplayTransactions.css';
import { useParams } from 'react-router-dom';

import useBasicDetails from '../../hooks/useBasicDetails';

const DisplayTransactions = () => {
  const { id } = useParams();

  const [transactionHistory, setTransactionHistory] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const [web3, account, contract] = useBasicDetails();

  const [selectedOption, setSelectedOption] = useState('all-transactions');

  const handleChange = (event) => setSelectedOption(event.target.value);
  console.log(selectedOption);

  useEffect(() => {
    const getContractDetails = async () => {
      let transactionNumber = await contract.methods.transacNum().call();

      const newTransactions = [];
      for (let i = 1; i <= transactionNumber; i++) {
        await contract.methods
          .transactions(i)
          .call()
          .then((res) => {
            // eslint-disable-next-line
            if (res.accountSerialNumber == id) {
              newTransactions.push(res);
              if (i === transactionNumber)
                console.log('past transaction: ', res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setTransactionHistory(newTransactions);

      setLoading(false);
    };
    if (
      typeof contract !== 'undefined' &&
      typeof account !== 'undefined' &&
      typeof web3 !== 'undefined'
    ) {
      getContractDetails();
    }
    // eslint-disable-next-line
  }, [web3, account, contract, selectedOption]);

  const numTransactions = transactionHistory.length;
  const startingTransaction = Math.max(
    0,
    selectedOption === 'all-transactions'
      ? 0
      : selectedOption === 'past-transaction'
      ? numTransactions - 1
      : selectedOption === 'last-month-transactions'
      ? numTransactions - 2
      : selectedOption === 'last-2-month-transactions'
      ? numTransactions - 4
      : 0
  );
  console.log(selectedOption, startingTransaction, numTransactions);

  const relevantTransactions = [];
  for (let i = startingTransaction; i < numTransactions; i++)
    relevantTransactions.push(transactionHistory[i]);
  console.log(relevantTransactions);

  if (!web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }

  return (
    <div className="account-transaction-wrapper">
      <div className="account-transactions">
        <h1> TRANSACTION HISTORY</h1>
        <div className="account-transaction-bars">
          <div className="Selection">
            <select
              value={selectedOption}
              defaultValue={'all-transactions'}
              onChange={handleChange}
            >
              <option value="all-transactions">All Transactions</option>
              <option value="past-transaction">Past Transaction</option>
              {/* FIXME: for this just show last 2 transactions as of now since we can't show last 30 transactions due to insufficient time and data*/}
              <option value="last-month-transactions">
                Last Month Transaction
              </option>
              {/* FIXME: for this just show last 4 transactions as of now since we can't show last 30 transactions due to insufficient time and data*/}
              <option value="last-2-month-transactions">
                Last 2 Month Trasactions
              </option>
            </select>
          </div>
          <div className="transaction-bar-header">
            <div className="col-1">
              <h1> AMT.</h1>
            </div>
            <div className="col-2">
              <h1>TYPE</h1>
            </div>
            <div className="col-3">
              <h1>BALANCE</h1>
            </div>
            <div className="col-4">
              <h1>TIME</h1>
            </div>
          </div>
          {
            // !loading?
            relevantTransactions.map((transaction) => {
              var time = new Date(
                transaction.createdAt * 1000
              ).toLocaleString();

              return (
                <div className="transaction-bar">
                  <div className="col-1">
                    <h1>{transaction.amountTransacted}</h1>
                  </div>
                  <div className="col-2">
                    <h1>{transaction.transacType}</h1>
                  </div>
                  <div className="col-3">
                    <h1>{transaction.currentBalance}</h1>
                  </div>
                  <div className="col-4">
                    <h1>{time}</h1>
                  </div>
                </div>
              );
            })
            // :null
          }
        </div>
      </div>

      <div className="display-transaction-image">
        <img src="/assets/6.svg" alt="" />
      </div>
    </div>
  );
};

export default DisplayTransactions;
