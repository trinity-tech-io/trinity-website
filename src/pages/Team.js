import React from 'react';
import ConicGradiSection from '../components/ConicGradiSection';

const Team = () => {
    const TeamMembers = [
        { name: 'Tang Zhilong', designation: 'Founder, Hive SDK Team Leader,\nFeeds Team Leader', photo: 'm-01.png' },
        { name: 'Niu Jingyu', designation: 'Executive Team Leader,\nDID SDK Team Leader', photo: 'm-02.png' },
        { name: 'Benjamin Piette', designation: 'Essentials Wallet Team Leader', photo: 'm-03.png' },
        { name: 'Danial Asralf', designation: 'Pasar Team Leader', photo: 'm-04.png' },
    ]
    return (
        <>
            <ConicGradiSection title="Our Team"/>
            <section className="section pt-4" id="team">
                <div className="container">
                    <div className="row margin-t-50" style={{padding: '0 10%', marginBottom: 100}}>
                        {
                            TeamMembers.map((member, _i)=>(
                                <div className="col-lg-6 col-sm-6" key={_i}>
                                    <div className="team-box text-center hover-effect">
                                        <div className="team-wrapper">
                                            <div className="back-drop"/>
                                            <div className="team-member">
                                                <img alt="" src={`images/team/${member.photo}`} className="img-fluid rounded" />
                                            </div>
                                        </div>
                                        <div className="team-member-detail">
                                            <h3 className="team-name">{member.name}</h3>
                                            <span className="team-designation">{member.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;