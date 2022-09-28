import "../components/Digital.css";
import Phones from "../images/phones.png";

export default function Digital() {
  return (
    <section className="digital">
      <div className="container">
        <div className="digital__intro">
          <div className="digital__text">
            <h1 className="digital__heading">
              Next generation digital banking
            </h1>

            <p className="digital__textt">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>

            <a href="#sdfs" className="digital__invite">
              Request Invite
            </a>
          </div>

          <img
            className="digital__phones"
            src={Phones}
            alt="phones"
            width="728"
            height="899"
          ></img>

          <img className="digital__phones-2" src={Phones} alt="phones"></img>
        </div>
      </div>
    </section>
  );
}
