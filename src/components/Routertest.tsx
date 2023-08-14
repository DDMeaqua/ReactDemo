import { Link } from "react-router-dom";

export default function Routertest() {
  return (
    <div className="border-2 border-pink-400 p-3 m-3 rounded-lg">
      <h1>Bookkeeper</h1>
      <nav>
        <button className="m-2 p-2 border-2 rounded-lg">
          <Link to="/">Home</Link>
        </button>
        <button className="m-2 p-2 border-2 rounded-lg">
          <Link to="/invoices">Invoices</Link>
        </button>
        <button className="m-2 p-2 border-2 rounded-lg">
          <Link to="/expenses">Expenses</Link>
        </button>
        <button className="m-2 p-2 border-2 rounded-lg">
          <Link to="/shop">Shop Car</Link>
        </button>
      </nav>
    </div>
  );
}