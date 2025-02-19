import Banner from "../component/Banner";
import Catagories from "../component/Catagories";
import Featureproducts from "../component/Featureproducts";


const Home = () => {
    return (
        <div>
            <div>
              <Banner/>
              <Catagories/>
              <Featureproducts/>
            </div>
        </div>
    );
};

export default Home;