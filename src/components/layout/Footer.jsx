import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main className="bg-bg-4 bar">
      <section className=" container py-5 mt-12">
        <Link className="fs-3" to="/">
          Hikayori
        </Link>

        <div>
          <Link className="nav-link active" aria-current="page" to="/guide">
            日和指南
          </Link>

          <Link className="nav-link" to="/pds">
            款式選集
          </Link>

          <Link className="nav-link" to="/order">
            開始訂製
          </Link>
        </div>
      </section>
      <div className="d-flex justify-content-center bg-liner pt-5">
        <small>&copy; 2026 ～ ∞ - Hikayori,, All Rights Reserved</small>
      </div>
    </main>
  );
}

export default Navbar;
