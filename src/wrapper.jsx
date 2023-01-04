import React, { useEffect } from 'react';

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="content">
                {children}
            </div>
            <footer>Copyright!</footer>
        </div>
    );
};

export default Wrapper;