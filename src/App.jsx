import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
    const { user } = useAuth();

    return (
        <div >
            <h1>chat</h1>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>

    );
}

export default App;
