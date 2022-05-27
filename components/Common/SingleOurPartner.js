import React from 'react';
import BASE_URL from '../../utils/assetsURL';

const SingleOurPartner = ({ ourClient }) => {

    return (
        <>
            <div className="single-partner">
                <img
                    src={
                        (ourClient.logo.data.attributes.formats != null)
                            ?
                            ourClient.logo.data.attributes.formats.thumbnail.url
                            :
                            ourClient.logo.data.attributes.url
                    }
                    alt={
                        (ourClient.logo.data.attributes.formats != null)
                            ?
                            ourClient.logo.data.attributes.formats.thumbnail.name
                            :
                            ourClient.logo.data.attributes.name
                    } />
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