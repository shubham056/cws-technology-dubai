import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import Team from '../../components/Common/Team';
import { getTeamMembers, getContactUsInfo } from '../../utils/strapi';

const TeamMember = ({teamMembers, contactUsInfo}) => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Team Member" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team Member"
            /> 
 
            {teamMembers && <Team teamMembers={teamMembers} allTeamMembers={true}/>}

            <div className="pb-100">
                <CTA />
            </div>

			{contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
		</>
    )
}

export default TeamMember;

export async function getStaticProps({ params }) {
    const teamMembers = await getTeamMembers(false); 
    const contactUsInfo = await getContactUsInfo();

    return {
        props: {
            teamMembers,
            contactUsInfo
        },
        revalidate: 5, // In seconds
    };
}