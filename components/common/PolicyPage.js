'use client';
import React from 'react';
import Layout from '@/components/layout/Layout';

const PolicyPage = ({ policyData }) => {
  const { title, updated, sections } = policyData;

  const renderSectionContent = (section, index) => {
    if (section.text) {
      return (
        <p key={index} className="text-justify text-muted">
          {section.text}
          {section.text2 && (
            <p className="mt-3 text-justify text-muted">{section.text2}</p>
          )}
          {section.text3 && (
            <p className="mt-3 text-justify text-muted">{section.text3}</p>
          )}
          {section.text4 && (
            <p className="mt-3 text-justify text-muted">{section.text4}</p>
          )}
        </p>
      );
    }

    if (section.list) {
      return (
        <>
          {section.listText && (
            <p className="text-justify text-muted">{section.listText}</p>
          )}
          <ul className="list-unstyled list-policy">
            {section.list.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.heading && <strong>{item.heading}</strong>}
                {item.text && (
                  <>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-primary text-decoration-none"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <>{item.text}</>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      );
    }

    if (section.thirdPartyList) {
      return (
        <div className="mt-4 third-party-list">
          {section.thirdPartyList.map((item, itemIndex) => (
            <div
              className="p-3 mb-3 d-flex align-items-start bg-light rounded-3"
              key={itemIndex}
            >
              <div className="text-primary fw-bold me-2">{item.number}.</div>
              <div className="item-content">
                <p className="mb-0 text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (section.contactInfo) {
      return (
        <>
          <p className="text-muted">{section.contactInfo.text}</p>
          <ul className="list-unstyled">
            <li>
              <span className="fw-bold">Email:</span>{' '}
              <a
                href={`mailto:${section.contactInfo.email}`}
                className="text-primary text-decoration-none"
              >
                {section.contactInfo.email}
              </a>
            </li>
            <li>
              <span className="fw-bold">Address:</span>{' '}
              {section.contactInfo.address}
            </li>
            {section.contactInfo.subject && (
              <li>{section.contactInfo.subject}</li>
            )}
          </ul>
        </>
      );
    }

    return null;
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={title}>
      <section className="py-5 bg-light py-lg-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="p-4 bg-white shadow-sm p-md-5 rounded-4">
                <div className="pb-4 mb-5 text-center border-bottom border-3 border-primary">
                  <h1 className="text-black display-5 fw-bold">{title}</h1>
                  <p className="mt-3 mb-0 text-muted fst-italic">
                    Last Updated: {updated}
                  </p>
                </div>

                {sections.map((section, index) => (
                  <div className="mb-5" key={index}>
                    <h2 className="text-black h4 fw-bold position-relative section-title-bs">
                      {section.title}
                    </h2>
                    {renderSectionContent(section, index)}
                    {section.additionalText && (
                      <p className="mt-3 text-justify text-muted">
                        {section.additionalText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .list-policy li {
          margin-bottom: 1rem;
          color: var(--bs-body-color);
          line-height: 1.6;
          position: relative;
        }

        .list-policy li:not(:first-child) {
          list-style: none;
          padding-left: 20px;
        }

        .list-policy li:not(:first-child)::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--bs-primary);
        }

        .section-title-bs::before {
          content: '';
          position: absolute;
          left: -1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 24px;
          background: var(--bs-primary);
          border-radius: 2px;
        }

        .section-title-bs {
          padding-left: 1rem;
        }
      `}</style>
    </Layout>
  );
};

export default PolicyPage;
