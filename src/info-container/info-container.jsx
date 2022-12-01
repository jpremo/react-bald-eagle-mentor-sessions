import React, { useEffect } from 'react';

const InfoContainer = ({ className = '', id, children, containerRef }) => {
    return (
        <div className={`container ${className}`} id={id} ref={containerRef}>
            <h1>I am a container</h1>
            {children}
            <h1>I am a copy!</h1>
            <div className='alternate-children'>
                {children}
            </div>
        </div>
    );
};

export default InfoContainer;