import React from 'react';
import { teamData } from '@/data/TeamData';
import TeamMemberCard from '@/components/TeamMemberCard';


const TeamPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
