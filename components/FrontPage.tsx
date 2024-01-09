import React, { useState } from 'react';
import PageTemplate from './PageTemplate';

const FrontPage = () => {
    const [loading, setLoading] = useState(true);

    const content = (
        <div>
            <a href='/working-page'>Page 1</a>
            <a href='/working-page2'>Page 2</a>
        </div>
    );

    return (
        <>
            <PageTemplate title={'Test application'} content={content} 
                   loading={loading} setLoading={setLoading} showLogoutLink={false}/>
        </>
    );
};

export default FrontPage;