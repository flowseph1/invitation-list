import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../slices/notificationSlice';
import { addUser, userValue } from '../slices/userSlice';
import { validateInfo } from './../utils/validateInfo';

function Formulario() {
    // Redux
    const dispatch = useDispatch();
    // User state/
    const userState = useSelector(userValue);

    // Inputs refs.
    const nameInputRef = useRef(null);
    const nicknameInputRef = useRef(null);

    const handleClick = () => {
        // Validating if name or nickname are empty and also validates if are already includes on state.
        // If they don't pass the validation, it return an error message.
        const validation = validateInfo(nameInputRef.current.value, nicknameInputRef.current.value, userState);

        if (validation) {
            // Adding the error message to notification state.
            dispatch(addNotification(validation));
            return;
        }

        // Adding user to state.
        dispatch(addUser({ name: nameInputRef.current.value, nickname: nicknameInputRef.current.value }));
    };

    // Prevent form to reload page.
    const handleSubmit = e => {
        e.preventDefault();
    };

    // Logs.
    console.log();

    return (
        <div className="flex flex-col p-4">
            <h1 className="text-2xl font-bold mb-3 text-gray-400">Add Guest</h1>
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                <div className="rounded-lg flex border bg-white text-sm w-fit">
                    <input
                        type="text"
                        className="w-full outline-none h-full py-2 px-3 bg-transparent "
                        placeholder="Nombre"
                        ref={nameInputRef}
                    />
                </div>
                <div className="rounded-lg flex border bg-white text-sm w-fit">
                    <input
                        type="text"
                        className="w-full outline-none h-full py-2 px-3 bg-transparent "
                        placeholder="Nickname"
                        ref={nicknameInputRef}
                    />
                </div>
                <div className="flex">
                    <button
                        type="submit"
                        onClick={() => handleClick()}
                        className="text-sm p-2 bg-indigo-200 rounded-md mt-3 hover:bg-indigo-300 transition text-indigo-800 font-bold"
                    >
                        Add Guest
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Formulario;
