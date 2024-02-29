import { useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const { userData } = location.state || {};
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            {userData && (
                <div>
                    <h2>User Data:</h2>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default Home;