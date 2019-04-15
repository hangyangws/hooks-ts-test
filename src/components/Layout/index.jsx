import React from 'react';

import Provider from 'Store/provider';
import Header from 'Components/Header';
import Aside from 'Components/Aside';
import Footer from 'Components/Footer';
import Loading from 'Components/Loading';

import './index.scss';

const Layout = (props) => (
  <Provider>
    <Header />
    <main className="layout">
      <Aside />
      <div className="layout-main">
        {props.children}
      </div>
    </main>
    <Footer />
    <Loading />
  </Provider>
);

export default Layout;
