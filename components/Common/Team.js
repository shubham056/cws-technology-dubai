import React from 'react';
import Link from 'next/link';
import SingleTeamMember from './SingleTeamMember';

const Team = ({ teamMembers, allTeamMembers }) => {

    const jsxTeamMembers = teamMembers.data.map((team) => {
        return <SingleTeamMember teamMembers={team} />
    });

    return (
        <>
            <div className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet With Our Consultants</h2>
                        <p>We are a part of a small but perfectly-formed team, enhanced by an extended family of specialists.</p>
                    </div>

                    <div className="row">

                        {/* {jsxTeamMembers} */}
                        <h3 style={{textAlign:'center'}}>Coming soon...</h3>

                    </div>
                    {allTeamMembers
                        ?
                        null
                        :
                        <div className="cases-view-all-btn" style={{ textAlign: 'center' }}>
                            <Link href="/team-member">
                                <a className="default-btn">
                                    View All Members
                                    <i className="ri-arrow-right-line"></i>
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    }

                </div>


            </div>


        </>
    )
}

export default Team;