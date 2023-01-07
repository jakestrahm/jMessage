import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendMessage } from '../../services/firebase';

function MessageInput({ roomId }) {
    const { user } = useAuth();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage(roomId, user, value);
        setValue('');
    };

    return (
        <div className=" p-3 pb-4">
            <form onSubmit={handleSubmit} className="input input-bordered w-full outline-none">
                <input
                    type="text"
                    placeholder="jMessage"
                    value={value}
                    onChange={handleChange}
                    required
                    minLength={1}
                />
                <button type="submit" disabled={value < 1}>
                </button>
            </form>
        </div>
    );
}
export { MessageInput };
