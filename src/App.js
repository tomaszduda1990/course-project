import './App.css';
import Layout from './components/Layout/Layout'
import FormContainer from "./containers/FormContainer/FormContainer";
import EventListContainer from "./containers/EventListContainer/EventListContainer";
function App() {
    return (
        <div className="App">
            <Layout>
                <EventListContainer />
                <FormContainer />
            </Layout>
        </div>
    );
}

export default App;
