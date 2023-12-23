import React from 'react';
import SvgRing from './SvgRing';
import BreadCrumb from './BreadCrumb';
import BreadCrumbParent from './BreadCrumbParent';

const Section = ({ children, id, svg, sub, title, slug, parentTitle }) => {
  return (
    <>
      <section id={id}>
        <div className='main-content'>
          {sub && (parentTitle ? <BreadCrumbParent title={title} slug={slug} parentTitle={parentTitle} /> : <BreadCrumb title={title} />)}
          {children}
        </div>
        {svg && <SvgRing />}
      </section>
    </>
  );
};

export default Section;
