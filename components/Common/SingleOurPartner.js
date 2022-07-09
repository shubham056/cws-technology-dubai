import React from 'react';
import assetsURL from '../../utils/assetsURL';
import Image from 'next/image';

const SingleOurPartner = ({ ourClient }) => {

    return (
        <>
            <div className="single-partner">
                <img
               
                    src={`${assetsURL}${ourClient.logo}`}
                    alt={"clients-logo"} />
            </div>


            {/* Partner Style */}
            <style jsx>{`
                .single-partner {
                    text-align: center;
                }
                .single-partner img {
                    width: auto !important;
                    display: inline-block !important;
                }
            `}</style>
        </>
    )
}

export default SingleOurPartner;