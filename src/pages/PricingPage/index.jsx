// styles
import './index.scss';

//image
import Basic from '../../assets/images/package/basic.jpg';
import Standard from '../../assets/images/package/standard.jpg';
import Premium from '../../assets/images/package/premium.jpg';

// component
import PackageCard from '../../components/PackageCard';

const PricingPage = () => {
  return (
    <section id="pricing">
      <div className="blackBg"></div>
      <div className="pricingContent container">
        <h3 className="subTitle">Pricing</h3>
        <h2 className="title">
          CHOOSE YOUR PACKAGE <br />
          FOR WORKOUT
        </h2>
        <div className="packageContainer">
          <PackageCard
            level="Basic"
            img={Basic}
            seo="weight lifting"
            name="The Rock"
            price="Rp500.00"
            packageContents={[
              '3 Times A Week',
              'Full Zoom',
              'PDF Module',
              'Meal Preparation',
            ]}
          />
          <PackageCard
            popular
            level="Standar"
            img={Standard}
            seo="girl with workout outfit"
            name="Anna Jane"
            price="Rp1.000.00"
            packageContents={[
              '4 Times A Week',
              'Full Zoom',
              'PDF Module',
              'Meal Preparation',
              'Supplement',
            ]}
          />
          <PackageCard
            level="Premiuim"
            img={Premium}
            seo="guy with a jacket"
            name="John cena"
            price="Rp2.000.00"
            packageContents={[
              '4 Times A Week',
              'Full Zoom',
              'PDF Module',
              'Meal Preparation',
              'Supplement',
              'Gym Equipment',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
