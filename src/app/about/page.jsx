export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      position: "Chief Genetic Engineer",
      department: "Neo Genetics Division",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Leading expert in CRISPR technology and cancer genetics with 15+ years of research experience.",
      specialties: [
        "DNA Modification",
        "Cancer Research",
        "Regenerative Medicine",
      ],
    },
    {
      id: 2,
      name: "Dr. Marcus Rodriguez",
      position: "Director of Energy Systems",
      department: "Arc Reactor Division",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Nuclear physicist specializing in clean energy solutions and advanced reactor design.",
      specialties: ["Nuclear Physics", "Clean Energy", "Reactor Engineering"],
    },
    {
      id: 3,
      name: "Colonel James Mitchell",
      position: "Head of Defense Systems",
      department: "Military Technology Division",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Former military strategist with expertise in advanced weaponry and defense technologies.",
      specialties: [
        "Strategic Defense",
        "Weapons Systems",
        "Military Operations",
      ],
    },
    {
      id: 4,
      name: "Dr. Emily Watson",
      position: "AI Research Director",
      department: "Artificial Intelligence Division",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Pioneer in neural networks and machine consciousness, developing next-gen AI systems.",
      specialties: ["Neural Networks", "Machine Learning", "AI Ethics"],
    },
    {
      id: 5,
      name: "Dr. Alexander Kumar",
      position: "Chief Technology Officer",
      department: "Advanced Technologies Division",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Visionary technologist leading breakthrough innovations in human enhancement and space technology.",
      specialties: [
        "Space Technology",
        "Human Augmentation",
        "Innovation Strategy",
      ],
    },
    {
      id: 6,
      name: "Dr. Lisa Park",
      position: "Head of Research & Development",
      department: "Cross-Divisional R&D",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description:
        "Coordinating research across all divisions to ensure seamless integration of technologies.",
      specialties: [
        "Research Coordination",
        "Technology Integration",
        "Project Management",
      ],
    },
  ];
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our company, mission, and the team behind our
            success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Nexus Corp has grown from a small startup to a
              leading provider of business solutions. We started with a simple
              mission: to help businesses succeed in the digital age.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've helped hundreds of companies streamline
              their operations, improve their online presence, and achieve their
              goals. Our commitment to excellence and innovation drives
              everything we do.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve clients across various industries,
              providing tailored solutions that deliver real results and lasting
              value.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Modern Office Building"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to solve
                complex problems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in honest communication and ethical business
                practices in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in our work and continuous
                improvement in our services.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience and
            a passion for helping businesses succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {member.department}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
