import FeatureIcons from "../../components/common/featureIcons";
import PageTitle from "../../components/common/pageTitle";
import AboutContent from "../../components/about/aboutContent";
import LatestNews from "../../components/about/latestNews";
import CustomerFeedback from "../../components/about/customerFeedback";

const About = () => {
  return (
    <div>
      <PageTitle title={"about"} />
      <AboutContent />
      <CustomerFeedback />
      <div className="w-full bg-[#f8f8f8]">
        <FeatureIcons />
      </div>
      <LatestNews />
    </div>
  );
};
export default About;
