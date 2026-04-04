import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      avatar: '/assets/img/avatar_1.png',
      name: 'Darlene Robertson',
      designation: 'Web design',
      rating: 4.5,
      text: "I've been using Limitless for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone"
    },
    {
      id: 2,
      avatar: '/assets/img/avatar_2.png',
      name: 'Carol McCarthy',
      designation: 'Product manager',
      rating: 5,
      text: "I've been using Limitless for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone"
    },
    {
      id: 3,
      avatar: '/assets/img/avatar_3.png',
      name: 'Peter Johnson',
      designation: 'Web developer',
      rating: 4,
      text: "I've been using Limitless for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone"
    },
    {
      id: 4,
      avatar: '/assets/img/avatar_4.png',
      name: 'Max Lawrence',
      designation: 'Digital marketing',
      rating: 5,
      text: "I've been using Limitless for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone"
    },
    {
      id: 5,
      avatar: '/assets/img/avatar_1.png',
      name: 'Ralph Edwards',
      designation: 'Client Interaction',
      rating: 4.5,
      text: "Limitless has transformed how we handle our financial strategy. Their team is insightful, responsive, and truly dedicated to our success. A fantastic partner for any growing business."
    },
    {
      id: 6,
      avatar: '/assets/img/avatar_2.png',
      name: 'Bindo Jamal',
      designation: 'Marketing Executive',
      rating: 5,
      text: "The results we've seen since joining the program have been outstanding. The expertise provided is practical and immediately applicable. Highly recommended for strategic growth."
    }
  ];

  return (
    <>
      <section
        className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
        style={{ backgroundImage: "url('/assets/img/page_header_1.jpeg')" }}
      >
        <div className="container position-relative z-index-1">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb text-white cs_fs_18 cs_mb_10">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Testimonials</li>
                </ol>
              </nav>
              <h1 className="cs_fs_60 cs_fs_lg_46 text-white m-0 cs_lh_base">
                What Our Clients <br />
                <span className="text-accent">Are Saying</span>
              </h1>
              <p className="text-white cs_fs_18 cs_mt_20 mb-0" style={{ opacity: 0.8 }}>
                Real stories from real clients who have transformed their<br className="d-none d-lg-block" /> businesses with Limitless.
              </p>
            </div>
            <div className="col-lg-5 d-none d-lg-flex justify-content-end align-items-end" style={{ paddingTop: '40px' }}>
              <img
                src="/assets/img/testimonial_thumb_1.png"
                alt="Happy Clients"
                style={{ maxHeight: '320px', objectFit: 'contain', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
              />
            </div>
          </div>
        </div>
        <div className="position-absolute end-0 bottom-0">
          <svg width="660" height="497" viewBox="0 0 660 497" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M240 0H660L430 497H0L240 0Z" fill="url(#paint0_linear_testimonial)"/>
            <defs>
              <linearGradient id="paint0_linear_testimonial" x1="330" y1="78.2497" x2="375.052" y2="780.743" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" offset="none"/>
                <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35"/>
                <stop offset="1" stopColor="#222121" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="cs_pt_133 cs_pt_lg_73 cs_pb_133 cs_pb_lg_75">
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center cs_mb_60 cs_mb_lg_40">
            <div className="cs_section_heading_in">
              <h3 className="cs_fs_20 cs_fs_lg_18 text-accent fw-normal cs_lh_base cs_mb_10">Our Success Stories</h3>
              <h2 className="cs_fs_48 cs_fs_lg_36 cs_mb_20">What They’re Saying?</h2>
              <p className="mb-0">Hear from our clients who have achieved remarkable growth and success with Limitless.</p>
            </div>
          </div>

          <div className="row cs_row_gap_24">
            {testimonialData.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="cs_testimonial cs_style_1 cs_pt_20 h-100">
                  <div className="cs_testimonial_in bg-white shadow-sm cs_pl_30 cs_pr_30 cs_pb_27 cs_pt_30 cs_rounded_10 h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="cs_testimonial_img cs_mb_15">
                        <img src={item.avatar} alt="Avatar" className="cs_height_75 cs_width_75 rounded-circle" />
                      </div>
                      <div className="cs_rating text-accent cs_mb_15">
                        {/* Rating stars would be here, logic below is simplified for UI */}
                        <div className="d-flex cs_column_gap_5">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className={`fa-solid fa-star${i + 0.5 > item.rating ? '-half-stroke' : i >= item.rating ? ' cs_color_gray' : ''}`}></i>
                          ))}
                        </div>
                      </div>
                      <p className="cs_mb_14">{item.text}</p>
                    </div>
                    <div>
                      <h3 className="cs_fs_18 cs_mb_2 cs_lh_base">{item.name}</h3>
                      <p className="m-0 cs_fs_14 cs_lh_base">{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
