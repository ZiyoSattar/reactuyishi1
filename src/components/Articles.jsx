import Money from '../images/money.png';

export default function Articles () {
  return (
    
    <section className="articles">
      <div className="container">
        <div className="articles__inner">
          <h2 className="articles__heading">Latest Articles</h2>

          <ul className="articles__list">
            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">

              <p className="articles__p"> <span className="articles__p--span">By Claire Robinson</span>
                Receive money in any currency with no fees
              </p>

              <p className="articles__text">The world is getting smaller and we're becoming more mobile. So why should you
                be forced to only
                receive money in a single …</p>
              </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Wilson Hutton</span>
                Treat yourself without worrying about money
              </p>

              <p className="articles__text">Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …</p>
                </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Claire Robinson</span>
                Take your Easybank card wherever you go
              </p>

              <p className="articles__text">We want you to enjoy your travels. This is why we don’t charge any fees on
                purchases while you're abroad. We'll even show you …</p>
                </div>
            </li>

            <li className="articles__item">
              <img className="articles__img" src={Money} alt="money" >

              </img>

              <div className="articles-sub--div">
              <p className="articles__p">
                <span className="articles__p--span">By Claire Robinson</span>
                Our invite-only Beta accounts are now live!
              </p>

              <p className="articles__text">After a lot of hard work by the whole team, we're excited to launch our closed
                beta. It's easy to request an invite through the site ...</p>
                </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}