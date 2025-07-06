import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import './ProjectList.css';

const statuses = ['All', 'Completed', 'Ongoing', 'In Progress', 'Planned'];

const statusColors = {
  Completed: 'success',
  Ongoing: 'primary',
  'In Progress': 'warning',
  Planned: 'info',
};

const projectsData = [
  {
    id: 1,
    name: 'Clean Water Initiative',
    description:
      'The Clean Water Initiative is focused on delivering safe and accessible drinking water to marginalized and remote communities in India. Many rural villages still rely on contaminated sources like ponds and rivers, leading to serious health issues such as diarrhea, cholera, and skin infections. Our team installs low-cost, solar-powered water purification units and builds rainwater harvesting systems to ensure year-round availability. In collaboration with local volunteers, we also conduct hygiene awareness drives in schools and households to teach water conservation and sanitation habits. Since its inception, the project has impacted over 15,000 individuals across Bihar, Chhattisgarh, and Odisha. We believe that clean water is not a luxury—it’s a basic human right.',
    images: 'https://images.unsplash.com/photo-1729530201153-06a07d498925?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Ongoing',
  },
  {
    id: 2,
    name: 'Education for All',
    description:
      'This project strives to bridge the education gap in underserved communities where access to quality schooling is a challenge. We’ve built and supported over 20 informal learning centers in tribal belts, refugee camps, and slums. Volunteers teach basic literacy, numeracy, and life skills to children aged 6–14 who are out of school. Additionally, we distribute free learning kits including books, uniforms, and digital tablets. One unique feature is our "Night School on Wheels"—a mobile van equipped with projectors and e-learning content that visits construction sites and brick kilns to educate child laborers. This initiative has empowered over 3,000 children to enroll in mainstream schools, giving them a fighting chance to rewrite their futures.',
    images: 'https://images.unsplash.com/photo-1629273229664-11fabc0becc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEVkdWNhdGlvbiUyMGZvciUyMEFsbHxlbnwwfHwwfHx8MA%3D%3D',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Healthcare Outreach',
    description:
      'Healthcare Outreach is a mobile medical relief project designed for people living far from clinics and hospitals. Partnering with local doctors and pharmacists, we’ve set up periodic health camps that provide free checkups, medicines, and preventive care. We also train ASHA workers and volunteers to identify symptoms early and conduct door-to-door awareness campaigns on nutrition, menstrual hygiene, vaccinations, and maternal health. Special efforts are made to support expecting mothers and children under five through immunization drives and nutrition kits. Over 25 villages in Jharkhand and Madhya Pradesh have been covered so far, and the feedback has been overwhelmingly positive—many said this was the first time a doctor visited their village.',
    images: 'https://plus.unsplash.com/premium_photo-1682310224814-e1e885471494?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Ongoing',
  },
  {
    id: 4,
    name: 'Environmental Conservation',
    description:
      'Environmental Conservation is a youth-driven program that aims to restore natural ecosystems through tree plantation, waste reduction, and eco-literacy. We work with school and college students to plant native trees in degraded forest patches and urban spaces. So far, 12,000+ saplings have been planted and tracked using our “Green Diary” mobile app. We’ve also set up waste segregation units in two towns and trained households in composting and recycling. Through workshops and street plays, the team spreads awareness on plastic pollution, water conservation, and climate justice. We envision a future where every citizen becomes a steward of the planet, starting with simple, everyday actions.',
    images: 'https://plus.unsplash.com/premium_photo-1663039947303-0fad26f737b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RW52aXJvbm1lbnRhbCUyMENvbnNlcnZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    status: 'Planned',
  },
  {
    id: 5,
    name: 'Community Empowerment',
    description:
      'This flagship project empowers communities through financial literacy, legal awareness, and vocational training. We’ve established Self-Help Groups (SHGs) in remote tribal villages and urban slums, where women come together to save, access credit, and start micro-businesses like tailoring, goat farming, and food stalls. Legal camps are organized to help residents obtain Aadhaar, ration cards, and land titles. In urban areas, youth receive training in Tally, beauty services, and mobile repair. We’ve also launched community radio shows in local dialects to amplify success stories and share vital government schemes. The project has created over 250 women entrepreneurs and trained 600+ youth for dignified livelihoods.',
    images: 'https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'In Progress',
  },
  {
    id: 6,
    name: 'Technology for Education',
    description:
      '“Tech4Edu” bridges the digital divide by setting up solar-powered digital labs in rural schools and anganwadis. Each lab includes tablets preloaded with state-syllabus content in regional languages, educational games, and learning apps. We also train teachers to integrate tech into lessons effectively. Special focus is given to girl students, with digital literacy workshops conducted by female mentors. The project promotes self-paced learning and enables continuity even during school closures or floods. In its pilot phase, the project reached 800+ students across 5 districts. Plans are underway to expand to tribal belts in Jharkhand and Assam.',
    images: 'https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.webp?a=1&b=1&s=612x612&w=0&k=20&c=t8D-3uQw-Dkvq5DluqPW1P7vbXyy2mN7XpKE_zcDWiw=',
    status: 'Completed',
  },
  {
    id: 7,
    name: 'Food Security Initiative',
    description:
      'Launched in 2020 during the COVID-19 lockdowns, this project addresses hunger in crisis-affected areas through food kit distribution, community kitchens, and nutrition education. Each kit contains rice, dal, oil, and sanitary pads for a family of five. We also train families in backyard kitchen gardening using recycled water and low-cost seeds. Malnourished children and expecting mothers are given protein supplements and monitored by our health workers. The project has evolved into a longer-term solution through farm-to-fork supply chains that connect farmers directly with consumers and NGOs. Over 10,000+ families have benefited till date.',
    images: 'https://media.istockphoto.com/id/1153182249/photo/the-concept-of-social-inequality-donating-food-to-beggars-to-alleviate-hunger-the-hands-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=gfiEoS-8Au3tLNJApNnqkr0_TpY8se6jhvJ-2Mebp7g=',
    status: 'Ongoing',
  },
  {
    id: 8,
    name: "Women's Empowerment",
    description:
      'This project provides women with the tools to challenge patriarchal norms, achieve economic independence, and build self-confidence. We run community centers where women receive training in digital finance, spoken English, tailoring, embroidery, and micro-enterprise management. Each participant also undergoes leadership and gender rights workshops. In partnership with NGOs like SEWA and local panchayats, we help women form cooperatives, open bank accounts, and access microloans. Domestic violence survivors are given legal support and counseling. Through storytelling and digital literacy, women are reclaiming their voice and inspiring change. Over 900 women have been directly empowered across 3 states.',
    images: 'https://media.istockphoto.com/id/1361508951/photo/international-womens-day-march-8.webp?a=1&b=1&s=612x612&w=0&k=20&c=EtD5m5njWidDWpfZ-8YcXIrOxogzno7m0moikbVmppM=',
    status: 'In Progress',
  },
  {
    id: 9,
    name: 'Renewable Energy for Communities',
    description:
      'This project brings light to villages that still live in darkness after sunset. We install solar microgrids and distribute solar lanterns in off-grid tribal areas. Villagers are trained to operate and maintain the systems, ensuring long-term sustainability. Local youth are also trained in solar panel installation and basic electrical skills. In addition to lighting homes, solar power supports irrigation pumps, mobile charging points, and small businesses like flour mills and tailor shops. By reducing dependence on kerosene and diesel, the project also promotes cleaner air and reduces fire hazards. We’ve electrified 14 villages so far.',
    images: 'https://images.unsplash.com/photo-1677132535700-38c4a5bbafa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJlbmV3YWJsZSUyMEVuZXJneSUyMGZvciUyMENvbW11bml0aWVzfGVufDB8fDB8fHww',
    status: 'Planned',
  },
  {
    id: 10,
    name: 'Youth Skill Development',
    description:
      'This initiative helps underprivileged youth prepare for job markets through 3-month and 6-month vocational programs. Courses include basic computer skills, spoken English, retail sales, digital marketing, and soft skills training. Our trainers also conduct mock interviews, resume building sessions, and personality development classes. We partner with MSMEs and startups for on-the-job training and placement support. Youth who lack confidence or direction receive mentorship from professionals and alumni. Special care is taken to include school dropouts, orphans, and transgender youth. So far, over 1,200 youth have enrolled and 40% have secured jobs or started small businesses.',
    images: 'https://media.istockphoto.com/id/2196150525/photo/skilled-artisan-passionately-teaching-canvas-painting-to-a-pre-teen-girl-in-a-creative-studio.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lvs3PjmjZVUaCBr4f3K9ScqXrL-vEY5-rcB8yVbki9A=',
    status: 'In Progress',
  }
];


const ProjectList = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  const projectsPerPage = 6;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects =
    statusFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.status === statusFilter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const paginatedProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <Container className="my-4">
      <h2 className="text-center fw-bold mb-4">Explore Our Projects</h2>

      {/* Filter Buttons */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {statuses.map((status) => (
          <Button
            key={status}
            size="sm"
            variant={statusFilter === status ? 'dark' : 'outline-dark'}
            onClick={() => {
              setStatusFilter(status);
              setSelectedProject(null);
              setCurrentPage(1);
            }}
          >
            {status}
          </Button>
        ))}
      </div>

      {/* Selected Project Modal */}
      {selectedProject && (
        <>
          <div className="selected-project-backdrop" onClick={() => setSelectedProject(null)}></div>
          <div className="selected-project-popup text-center">
            <h4 className="fw-bold mb-2">{selectedProject.name}</h4>
            <p className="mb-2">
              <Badge bg={statusColors[selectedProject.status] || 'secondary'}>
                {selectedProject.status}
              </Badge>
            </p>
            <img
              src={selectedProject.images}
              alt={selectedProject.name}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: '300px', width: '300px', objectFit: 'cover' }}
              loading="lazy"
            />
            {isMobile ? (
              <>
                <p>
                  {showFullDesc
                    ? selectedProject.description
                    : selectedProject.description.slice(0, 200) + '...'}
                </p>
                <Button
                  style={{ backgroundColor: 'white', color: 'black', border: 'none' }}
                  size="sm"
                  className="p-0"
                  onClick={() => setShowFullDesc(!showFullDesc)}
                >
                  {showFullDesc ? 'Read Less' : 'Read More'}
                </Button>
              </>
            ) : (
              <p>{selectedProject.description}</p>
            )}
            <Button variant="dark" size="sm" onClick={() => setSelectedProject(null)}>
              Close
            </Button>
          </div>
        </>
      )}

      {/* Project Cards */}
      <Row>
        {paginatedProjects.map((project) => (
          <Col key={project.id} xs={12} sm={6} md={4} className="mb-4">
            <Card
              className="h-100 shadow-sm project-card"
              onClick={() => {
                setSelectedProject(project);
                setShowFullDesc(false);
              }}
              style={{ cursor: 'pointer' }}
            >
              <Card.Img
                variant="top"
                src={project.images}
                alt={project.name}
                className="project-image"
                loading="lazy"
              />
              <Card.Body>
                <Card.Title className="fw-bold">{project.name}</Card.Title>
                <Card.Text className="text-muted small">
                  <Badge bg={statusColors[project.status] || 'secondary'}>
                    {project.status}
                  </Badge>
                </Card.Text>
                <Card.Text>
                  {project.description.length > 100
                    ? project.description.slice(0, 100) + '...'
                    : project.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Button
            variant="outline-dark"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="me-2"
          >
            ⬅ Prev
          </Button>
          <span className="align-self-center fw-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline-dark"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="ms-2"
          >
            Next ➡
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ProjectList;