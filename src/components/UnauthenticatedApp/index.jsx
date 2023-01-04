import { useAuth } from '../../hooks/useAuth';

function UnauthenticatedApp() {
    const { login } = useAuth();

    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-stone-700">Chat</h1>
                    <p className="pt-2 pb-16 text-stone-700">Sign in to join a chat room!</p>
                    <div>
                        <button onClick={login}
                            className="btn-primary">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { UnauthenticatedApp };
