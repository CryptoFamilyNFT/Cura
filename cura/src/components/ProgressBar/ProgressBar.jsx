import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;

    return (
        <div className="w-full bg-purple-200/60 rounded-full h-2.5">
            <div
                className="bg-gradient-to-t from-[#23687D] to-purple-700 h-2.5 rounded-full"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;