import React from 'react';
import { useSelector } from 'react-redux';
import { deleteUser, userValue } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Lista() {
    const userArray = useSelector(userValue);

    const dispatch = useDispatch();

    const [parent] = useAutoAnimate();

    return (
        <div className="flex flex-col  h-fit rounded-md text-sm p-4">
            <h1 className="text-2xl font-bold mb-3 text-gray-400">Invitation List</h1>
            <div className="rounded-md p-2 border-dotted border-4 text-gray-700">
                <table className="table-auto w-full">
                    <thead className="text-left">
                        <tr>
                            <th></th>
                            <th className="text-xs text-gray-400 font-normal">name</th>
                            <th className="text-xs text-gray-400 font-normal">nickname</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody ref={parent}>
                        {userArray?.value?.map((user, index) => (
                            <tr key={user.name + index}>
                                <td className="p-2 text-xs">{index + 1}</td>
                                <td className="p-2 font-semibold">{user.name}</td>
                                <td className="p-2 font-semibold">{user.nickname}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => dispatch(deleteUser(user.name))}
                                        className="bg-red-200 hover:bg-red-300 text-red-800 transition py-1 px-2 rounded-md text-xs font-bold cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Lista;
