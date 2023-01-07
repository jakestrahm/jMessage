import { AuthenticatedApp } from './components/AuthenticatedApp';
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
    const { user } = useAuth();

    // <div className="min-h-screen bg-slate-50">
    return (
        <div>
            {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </div>

    );
}

export default App;
