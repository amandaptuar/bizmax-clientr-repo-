import React from 'react';
import { Link, useParams } from 'react-router-dom';

const projectsData = {
  1: {
    title: 'Marketing Webdesign',
    date: '23 May, 2023',
    img: '/assets/img/project_details_img.jpeg',
    category: 'Website',
    services: 'Digital, Marketing',
    client: 'Kristin Watson',
    location: '7529 E. Pecan St.',
    description: `There are many variations of passages of Lorem Ipsum available, but majority have
      suffered alteration in some form, by injected humour, or randomised words which don't look even
      slightly believable. If you are going to use a passage of Lorem Ipsum. There are many variations
      of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by
      injected humour, or randomised words which don't look even slightly believable. If you are going
      to use a passage of Lorem Ipsum.`,
    highlight: `There are many variations of passages of Lorem Ipsum available, but majority have suffered
      alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    details: `If you are going to use a passage of Lorem Ipsum. Suspendisse ultricies vestibulum vehicula.
      Proin laoreet porttitor lacus. Duis auctor vel ex eu elementum. Mauris non dignissim purus,
      ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
      Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
      interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae
      et nunc. Sed vitae leo vitae nisl pellentesque semper.`,
    challenges: [
      'Nemo enim ipsam voluptatem quia voluptas mus et iusto odio',
      'Vivamus vel eros vitae est aliquet pellentesque',
      'If you are going to use a passage of Lorem Ipsum',
    ],
    conclusion: `Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis
      purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi.
      Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est
      aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.`,
  },
  2: {
    title: 'Brand Strategy Campaign',
    date: '10 June, 2023',
    img: '/assets/img/project_2.jpeg',
    category: 'Marketing',
    services: 'Branding, Strategy',
    client: 'Alex Johnson',
    location: '100 Main Street',
    description: `We developed a full-scale brand strategy campaign to reposition the client in the market.
      This involved extensive market research, competitor analysis, and audience segmentation to create
      a cohesive identity that resonates with the target demographic.`,
    highlight: `The campaign resulted in a 45% increase in brand awareness and a significant uptick in
      qualified leads within the first quarter after launch.`,
    details: `The strategy included defining the brand voice, visual identity, messaging framework, and
      a 12-month content calendar. Our team worked closely with the client's leadership to ensure alignment
      across all channels — digital, social, and print.`,
    challenges: [
      'Aligning all internal stakeholders on a unified brand voice',
      'Adapting messaging for multiple audience segments simultaneously',
      'Maintaining brand consistency across diverse channels',
    ],
    conclusion: `The result was a streamlined, powerful brand presence that differentiated the client from
      key competitors and opened new market opportunities. The client saw measurable ROI within 6 months.`,
  },
  3: {
    title: 'Creative Graphics Design',
    date: '5 July, 2023',
    img: '/assets/img/project_3.jpeg',
    category: 'Graphics',
    services: 'Graphics Design, Visual Identity',
    client: 'Sarah Lee',
    location: '250 Commerce Blvd',
    description: `A complete visual identity overhaul for a growing enterprise. We crafted a modern,
      scalable design system including logo, color palette, typography, and iconography that could be
      applied across digital and print media seamlessly.`,
    highlight: `The new visual identity brought a fresh, professional look that resonated strongly with
      both existing clients and new prospects, winning the client multiple industry awards.`,
    details: `Our design team conducted in-depth workshops with the client to understand their values,
      vision, and target audience. The resulting design language was clean, bold, and purposeful —
      reflecting the company's ambition and expertise.`,
    challenges: [
      'Balancing modernity with the client\'s established heritage',
      'Creating a system flexible enough for digital and print applications',
      'Delivering cohesive designs within a compressed timeline',
    ],
    conclusion: `The visual identity system was delivered on time and has since been applied across the
      client's entire marketing ecosystem, resulting in a unified and recognizable brand presence.`,
  },
  4: {
    title: 'Digital Growth Solution',
    date: '18 August, 2023',
    img: '/assets/img/project_4.jpeg',
    category: 'Digital',
    services: 'SEO, PPC, Content Marketing',
    client: 'Michael Brown',
    location: '900 Tech Park Ave',
    description: `A comprehensive digital growth strategy designed to increase organic traffic,
      improve search rankings, and generate high-quality leads. We combined SEO, paid media,
      and content marketing into a unified growth engine.`,
    highlight: `Within 3 months, organic website traffic increased by 120% and cost-per-lead
      dropped by 35%, resulting in a dramatically improved marketing ROI.`,
    details: `The project kicked off with a thorough technical SEO audit and content gap analysis.
      We then developed a keyword strategy, executed on-page optimizations, and launched targeted
      PPC campaigns on Google and LinkedIn to drive immediate results alongside long-term organic growth.`,
    challenges: [
      'Recovering from a prior Google algorithm penalty',
      'Competing in a highly saturated digital landscape',
      'Attributing conversions across multiple touchpoints accurately',
    ],
    conclusion: `The integrated approach delivered sustainable growth, reducing dependency on paid
      channels over time while building a robust organic traffic foundation that continues to grow.`,
  },
  5: {
    title: 'Corporate Web Platform',
    date: '2 September, 2023',
    img: '/assets/img/project_5.jpeg',
    category: 'Website',
    services: 'Web Design, Development',
    client: 'Emily Davis',
    location: '450 Silicon Way',
    description: `A full-scale corporate web platform built from the ground up — from UX research
      and wireframing to design, development, and deployment. The platform serves thousands of
      users daily and integrates with multiple enterprise systems.`,
    highlight: `The platform launched on schedule and immediately improved user engagement metrics,
      with session duration increasing by 60% and bounce rate dropping by 40%.`,
    details: `We led the end-to-end process: discovery workshops, UI/UX design in Figma, frontend
      development in React, backend API integration, and a streamlined CMS for the client's
      marketing team to manage content independently.`,
    challenges: [
      'Integrating with legacy enterprise systems through APIs',
      'Designing accessible, inclusive experiences for a diverse user base',
      'Ensuring performance and scalability under high traffic loads',
    ],
    conclusion: `The corporate platform became the central digital hub for the organization,
      dramatically improving internal efficiency and external brand perception simultaneously.`,
  },
  6: {
    title: 'Visual Identity System',
    date: '15 October, 2023',
    img: '/assets/img/project_6.jpeg',
    category: 'Graphics',
    services: 'Branding, Design System',
    client: 'James Turner',
    location: '728 Creative Lane',
    description: `Built a comprehensive design system and visual identity for a rapidly scaling
      startup. The system included component libraries, brand guidelines, and motion design
      principles to ensure consistency as the team and product grew.`,
    highlight: `The design system reduced design-to-development handoff time by 50% and enabled
      the product team to ship features 30% faster with fewer visual inconsistencies.`,
    details: `Starting with a brand audit, we identified inconsistencies and gaps in the existing
      visual language. We then systematically rebuilt each element — typography, spacing, color,
      components — into a living design system documented in Figma and Storybook.`,
    challenges: [
      'Gaining buy-in from engineering to adopt the design system',
      'Balancing flexibility with strict consistency rules',
      'Retroactively applying the system to existing product screens',
    ],
    conclusion: `The design system became a foundational asset for the company, enabling rapid,
      consistent scaling of their product design without sacrificing quality or brand integrity.`,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id] || projectsData[1];

  return (
    <>
      {/* Page Header */}
      <section
        className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
        style={{ backgroundImage: "url('/assets/img/page_header_1.jpeg')" }}
      >
        <div className="container position-relative z-index-1">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-white cs_fs_18 cs_mb_5">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/results">Results</Link></li>
              <li className="breadcrumb-item active">Project Details</li>
            </ol>
          </nav>
          <h1 className="cs_fs_48 cs_fs_lg_36 text-white m-0">Project Details</h1>
        </div>
        <div className="position-absolute end-0 bottom-0">
          <svg width="660" height="497" viewBox="0 0 660 497" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240 0H660L430 497H0L240 0Z" fill="url(#paint0_linear_proj_details)" />
            <defs>
              <linearGradient id="paint0_linear_proj_details" x1="330" y1="78.2497" x2="375.052" y2="780.743" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" offset="none" />
                <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35" />
                <stop offset="1" stopColor="#222121" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="cs_pt_130 cs_pt_lg_80 cs_pb_93 cs_pb_lg_80">
        <div className="container">
          <div>
            {/* Header Row: Title + Date */}
            <div className="cs_project_details-head d-flex align-items-center justify-content-between flex-wrap cs_mb_40 cs_row_gap_15 cs_column_gap_15">
              <h2 className="m-0 cs_fs_48 cs_fs_lg_36">{project.title}</h2>
              <div className="cs_published_date d-inline-flex cs_rounded_5 bg-accent text-white cs_pt_5 cs_pb_5 cs_pl_15 cs_pr_15 cs_pt_lg_3 cs_pb_lg_3">
                {project.date}
              </div>
            </div>

            {/* Hero Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-100 cs_mb_60 cs_mb_lg_40"
              style={{ objectFit: 'cover', maxHeight: '500px' }}
            />

            {/* Content + Sidebar */}
            <div className="row">
              {/* Main Content */}
              <div className="col-lg-8">
                <div className="cs_project_details cs_pb_40">
                  <p className="m-0">{project.description}</p>
                  <br />
                  <h3 className="text-accent cs_fs_20 cs_lh_base m-0">{project.highlight}</h3>
                  <br />
                  <p className="cs_mb_35">{project.details}</p>
                  <h4 className="cs_fs_18 cs_mb_12">Project Challenges:</h4>
                  <ul className="cs_mb_30 cs_list cs_style_1">
                    {project.challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  <p className="m-0">{project.conclusion}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <ul className="cs_project_details-info bg-white cs_rounded_20 m-0 cs_pl_50 cs_pt_50 cs_pr_50 cs_pb_50 cs_pl_lg_40 cs_pt_lg_40 cs_pr_lg_40 cs_pb_lg_40">
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Category:</h3>
                    <p className="m-0">{project.category}</p>
                  </li>
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Services:</h3>
                    <p className="m-0">{project.services}</p>
                  </li>
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Client:</h3>
                    <p className="m-0">{project.client}</p>
                  </li>
                  <li>
                    <h3 className="cs_fs_18 cs_mb_10">Location:</h3>
                    <p className="m-0">{project.location}</p>
                  </li>
                  <li>
                    <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5">
                      <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 rounded-circle">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </div>
                  </li>
                </ul>

                {/* Back to Results */}
                <div className="cs_mt_30">
                  <Link
                    to="/results"
                    className="cs_btn cs_style_1 cs_fs_16 cs_medium d-inline-flex align-items-center cs_column_gap_10"
                  >
                    <span>← Back to Results</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
