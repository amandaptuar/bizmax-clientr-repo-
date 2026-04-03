import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
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
      // 1. Load jQuery first
      await loadScript('/assets/js/plugins/jquery-3.7.1.min.js');
      
      // 2. Load all jQuery plugins in parallel
      await Promise.all([
        loadScript('/assets/js/plugins/isotope.pkg.min.js'),
        loadScript('/assets/js/plugins/jquery.slick.min.js'),
        loadScript('/assets/js/plugins/odometer.js'),
        loadScript('/assets/js/plugins/ripples.min.js'),
        loadScript('/assets/js/plugins/wow.min.js'),
        loadScript('/assets/js/plugins/swiper.min.js'),
        loadScript('/assets/js/plugins/YTPlayer.min.js')
      ]);

      // 3. Load main.js after plugins are ready
      await loadScript('/assets/js/main.js');
    };

    initTemplateScripts();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
