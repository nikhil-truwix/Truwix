import React from 'react';

const Team = () => {
    const card = [
        {
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
            founder: "Nishant",
            designation: "CEO"
        },
        {
            img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
            founder: "Jatin",
            designation: "CTO"
        },
        {
            img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
            founder: "Tanishka",
            designation: "Content Writer"
        },
        {
            img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
            founder: "Shalley",
            designation: "Content Strategy Director"
        }
    ];

    return (
        <div className='w-full h-auto bg-[#010916] md:py-12  py-4  md:px-20'>

            {/* Section Heading */}
            <h2 className="text-3xl md:text-[62px] font-bold text-white text-center leading-snug">
                Meet Our Best Team
            </h2>

            {/* Team Grid */}
            <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {card.map((member, index) => (
                    <div key={index} className="bg-[#060b21] mb:p-6  p-3 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">

                        {/* Image Container */}
                        <div className="w-full h-[350px] rounded-xl overflow-hidden">
                            <img src={member.img} alt={member.founder} className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Text Content */}
                        <div className='mt-4 text-center'>
                            <h3 className="text-2xl md:text-[32px] text-white font-semibold">{member.founder}</h3>
                            <p className="text-gray-400 text-sm md:text-base">{member.designation}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Team;
