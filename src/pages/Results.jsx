import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, category: 'website', size: 'cs_size_1', img: '/assets/img/project_1.jpeg', title: 'Marketing Webdesign' },
  { id: 2, category: 'marketing', size: 'cs_size_2', img: '/assets/img/project_2.jpeg', title: 'Brand Strategy Campaign' },
  { id: 3, category: 'graphics', size: 'cs_size_1', img: '/assets/img/project_3.jpeg', title: 'Creative Graphics Design' },
  { id: 4, category: 'digital', size: 'cs_size_1', img: '/assets/img/project_4.jpeg', title: 'Digital Growth Solution' },
  { id: 5, category: 'website', size: 'cs_size_2', img: '/assets/img/project_5.jpeg', title: 'Corporate Web Platform' },
  { id: 6, category: 'graphics', size: 'cs_size_2', img: '/assets/img/project_6.jpeg', title: 'Visual Identity System' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Graphics', value: 'graphics' },
  { label: 'Website', value: 'website' },
  { label: 'Digital', value: 'digital' },
  { label: 'Marketing', value: 'marketing' },
];

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
              <li className="breadcrumb-item active">Results</li>
            </ol>
          </nav>
          <h1 className="cs_fs_48 cs_fs_lg_36 text-white m-0">Our Results</h1>
        </div>
        <div className="position-absolute end-0 bottom-0">
          <svg width="660" height="497" viewBox="0 0 660 497" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240 0H660L430 497H0L240 0Z" fill="url(#paint0_linear_results)" />
            <defs>
              <linearGradient id="paint0_linear_results" x1="330" y1="78.2497" x2="375.052" y2="780.743" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" offset="none" />
                <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35" />
                <stop offset="1" stopColor="#222121" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="cs_pt_130 cs_pt_lg_75 cs_pb_140 cs_pb_lg_80">
        <div className="container">

          {/* Filter Tabs */}
          <ul className="cs_isotop_filter cs_style_1 d-flex justify-content-center flex-wrap m-0 cs_pl_0 cs_pb_30">
            {filters.map(f => (
              <li key={f.value} className={activeFilter === f.value ? 'active' : ''}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveFilter(f.value); }}
                >
                  {f.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Grid */}
          <div className="cs_isotop cs_style_1 cs_isotop_col_3 cs_has_gutter_24">
            <div className="cs_grid_sizer"></div>
            {filtered.map(project => (
              <div key={project.id} className={`cs_isotop_item ${project.category}`}>
                <div className={`cs_portfolio cs_style_1 ${project.size} position-relative overflow-hidden`}>
                  <Link
                    to={`/results/${project.id}`}
                    className="cs_portfolio_overlay cs_transition_4 position-absolute h-100 w-100 start-0 top-0 cs_zindex_1 d-block"
                  ></Link>
                  <div
                    className="cs_portfolio_thumb d-block h-100 w-100 background-filled cs_transition_6"
                    style={{ backgroundImage: `url('${project.img}')` }}
                  ></div>
                  <h3 className="cs_portfolio_title m-0 cs_fs_26 text-white cs_pl_50 cs_pb_45 cs_mr_50 position-relative cs_zindex_4 position-absolute start-0 bottom-0 w-100 cs_transition_4">
                    <Link to={`/results/${project.id}`}>{project.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Results;
