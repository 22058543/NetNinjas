import React from 'react';

const ModalNotification = ({ notification, onClose }) => {
    if (!notification) return null;

    const { message, type, onConfirm } = notification;

    const isError = type === 'error';

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        else onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
            <div className={`bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all ${isError ? 'border-t-4 border-red-500' : 'border-t-4 border-yellow-500'}`}>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {isError ? 'Action Failed' : 'Confirm Action'}
                </h3>
                <p className="text-gray-600 mb-6">{message}</p>
                <div className="flex justify-end space-x-3">
                    {!isError && (
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        onClick={handleConfirm}
                        className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition duration-150 ${isError ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-500 hover:bg-indigo-600'}`}
                    >
                        {isError ? 'Dismiss' : 'Confirm'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalNotification;