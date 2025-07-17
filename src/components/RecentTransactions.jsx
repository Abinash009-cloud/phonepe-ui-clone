const transactions = [
  { name: 'Amazon', amount: '-₹999', date: '15 July' },
  { name: 'Flipkart', amount: '-₹749', date: '14 July' },
];

export default function RecentTransactions() {
  return (
    <div className="recent-transactions">
      <h3 className="rh3">Recent Transactions</h3>
      <ul>
        {transactions.map((tx, i) => (
          <li key={i} className="li">
            <div>
              <p className="tp">{tx.name}</p>
              <p className="tpp">{tx.date}</p>
            </div>
            <p className="amount">{tx.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
