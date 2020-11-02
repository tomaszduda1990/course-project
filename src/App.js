import './App.css';
import Layout from './components/Layout/Layout'
import FormContainer from "./containers/FormContainer/FormContainer";
import EventListContainer from "./containers/EventListContainer/EventListContainer";
import HeroImage from './components/HeroImage/HeroImage';
function App() {
    return (
        <div className="App">
            <Layout>
                <HeroImage />
                <EventListContainer />
                <FormContainer />
            </Layout>
        </div>
    );
}

export default App;
