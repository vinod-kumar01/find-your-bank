import "./index.css";

const BanksList = ({ bankList, isLoading, error }) => {
  return !Array.isArray(bankList) || bankList.length === 0 ? (
    isLoading ? (
      "Loading Data"
    ) : (
      "Data not Found"
    )
  ) : (
    <div className="bank-list">
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>IFSC</th>
            <th>Branch</th>
            <th>Bank ID</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {bankList.map((bank) => (
            <tr key={bank.ifsc}>
              <td>{bank.bank_name}</td>
              <td>{bank.ifsc}</td>
              <td>{bank.branch}</td>
              <td>{bank.bank_id}</td>
              <td>{bank.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BanksList;
