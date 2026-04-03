import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';

const loadScript = (src) =>
  new Promise((resolve) => {
    // Check if script already exists to prevent duplicate loading on route changes
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = resolve;
    document.body.appendChild(s);
});

const Layout = () => {
  useEffect(() => {
    const initTemplateScripts = async () => {
      await loadScript('/assets/js/plugins/jquery-3.7.1.min.js');
      await loadScript('/assets/js/plugins/isotope.pkg.min.js');
      await loadScript('/assets/js/plugins/jquery.slick.min.js');
      await loadScript('/assets/js/plugins/odometer.js');
      await loadScript('/assets/js/plugins/ripples.min.js');
      await loadScript('/assets/js/plugins/wow.min.js');
      await loadScript('/assets/js/plugins/swiper.min.js');
      await loadScript('/assets/js/plugins/YTPlayer.min.js');
      await loadScript('/assets/js/main.js');
    };

    initTemplateScripts();
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
