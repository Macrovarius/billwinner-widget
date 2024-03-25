import './App.css'
import {CategoryWidget} from "./components/CategoryWidget/index.jsx";
import {useEffect} from "react";

const type = 'category'

function App({containerId}) {
    console.log(containerId, 'containerId')
    const fetchData = () => {
        fetch('https://api.publicapis.org/entries')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Do whatever you want with the data here
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
            });
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (type === 'category') {
        return <CategoryWidget />
    }

    return <div>Empty</div>
}

export default App
