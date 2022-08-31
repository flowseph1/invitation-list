import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification, notificationMessage } from '../slices/notificationSlice';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function TarjetaAdvertencia() {
    // User state form redux.
    const notificationStateMessage = useSelector(notificationMessage);

    // Dispatch object.
    const dispatch = useDispatch();

    const [parentRef] = useAutoAnimate();

    // Effects
    useEffect(() => {
        const timeToCloseNotification = setTimeout(() => {
            dispatch(addNotification(''));
        }, 5000);

        return () => clearTimeout(timeToCloseNotification);
    }, [notificationStateMessage, dispatch]);

    return (
        <div ref={parentRef}>
            {notificationStateMessage !== '' && (
                <div className="p-3 bg-red-500 text-white">{notificationStateMessage}</div>
            )}
        </div>
    );
}

export default TarjetaAdvertencia;
