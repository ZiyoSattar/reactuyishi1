import Banking from '../images/banking.png';
import Budget from '../images/budget.png';
import Onboard from '../images/onboard.png';
import ApiPng from '../images/api.png';

export default function Hero () {
  return (
    <section className="hero">
    <div className="container">
      <div className="hero__intro">

        <div className="hero__text-div">
          <h2 className="hero__heading">Why choose Easybank?</h2>

          <p className="hero__text">We leverage Open Banking to turn your bank account into your financial hub. Control
            your finances like never before.</p>

        </div>


        <ul className="hero__list">
          <li className="hero__item">
            <img className="hero__item-img" src={Banking} alt="banking" width="72" height="72">

            </img>
            <p className="hero__item-p">Online Banking</p>

            <p className="hero__item-text">Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.</p>
          </li>

          <li className="hero__item">
            <img className="hero__item-img" src={Budget} alt="budgeting" width="72" height="72">

            </img>
            <p className="hero__item-p">Simple Budgeting</p>

            <p className="hero__item-text">See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.</p>
          </li>

          <li className="hero__item">
            <img className="hero__item-img" src={Onboard} alt="onboard" width="72" height="72">

            </img>
            <p className="hero__item-p">Fast Onboarding</p>

            <p className="hero__item-text">We don't do branches. Open your account in minutes online and start taking
              control of your finances right away.</p>
          </li>

          <li className="hero__item">
            <img className="hero__item-img" src={ApiPng} alt="api" width="72" height="72">

            </img>
            <p className="hero__item-p">Open API</p>

            <p className="hero__item-text">Manage your savings, investments, pension, and much more from one account.
              Tracking your money has never been easier.</p>
          </li>
        </ul>

      </div>
    </div>
  </section>
  )
}