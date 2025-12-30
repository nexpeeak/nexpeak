'use client';

import React from 'react';
import PolicyPage from '@/components/common/PolicyPage';
import Layout from '@/components/layout/Layout';

const cookiePolicyData = {
  title: 'Nexpeak Cookies Policy',
  updated: '12th April, 2025',
  sections: [
    {
      title: 'Introduction',
      text: `Nexpeak Legal Partners ("Nexpeak," "we," "us," or "our") operates the website www.nexpeak.life. This policy explains how we use cookies and similar technologies to enhance your online experience. We are committed to protecting your privacy and being transparent about our practices. This policy details the types of cookies we use, what they do, and how you can manage your cookie preferences.`,
    },
    {
      title: 'What Are Cookies?',
      text: `A cookie is a small text file that a website saves on your computer or mobile device. These files help us recognize you, remember your preferences, and improve your navigation of the site. They are widely used to make websites work more efficiently and to provide a more personalized experience.`,
    },
    {
      title: 'How and Why We Use Cookies',
      text: `We use cookies for a variety of reasons, as detailed below. While it is possible to disable cookies through your browser settings, doing so may impact the functionality and features of our website. For the best experience, we recommend that you keep cookies enabled.`,
    },
    {
      title: 'Your Consent and How to Disable Cookies',
      text: `Some cookies are strictly necessary for our website to function and do not require your consent. However, for all other cookies—including performance, functionality, targeting, and social media cookies—we will ask for your consent before placing them on your device. You can withdraw your consent at any time by clearing your browser’s cookies.`,
    },
    {
      title: 'Types of Cookies We Use',
      text: `Our site uses several types of cookies to provide you with a seamless and secure experience.`,
      list: [
        {
          heading: '**Account-Related Cookies:**',
          text: `When you create an account with us, we use cookies for the signup and login process. These cookies help us manage your account and remember your preferences, so you don't have to log in every time you visit a new page.`,
        },
        {
          heading: '**Session and Login-Related Cookies:**',
          text: `These cookies remember your login status and activities, ensuring a smooth, secure session. They are automatically removed when you log out.`,
        },
        {
          heading: '**Forms and Input Cookies:**',
          text: `When you fill out forms on our site, such as contact or comment forms, cookies may be used to remember your details for future use, making it easier for you to interact with us.`,
        },
        {
          heading: '**Site Preference Cookies:**',
          text: `These cookies remember your site settings and preferences (like language or region) to provide a more personalized experience on future visits.`,
        },
      ],
    },
    {
      title: 'Third-Party Cookies',
      text: `In addition to our own cookies, we may use trusted third-party services that also set cookies. These are essential for some of our site's features and services.`,
      thirdPartyList: [
        {
          number: 1,
          text: `**Analytics Cookies:** We use services like **Google Analytics** to understand how you use our site. These cookies track things like the pages you visit and the time you spend on the site, helping us to improve our content and the overall user experience.`,
        },
        {
          number: 2,
          text: `**Performance and Testing Cookies:** We occasionally test new features or make minor adjustments to how the site is delivered. Cookies are used to ensure you receive a consistent experience while helping us determine which improvements are most valuable to our users.`,
        },
        {
          number: 3,
          text: `**Social Media Cookies:** This site includes social media buttons and plugins that allow you to connect with your networks. These platforms (e.g., Facebook, LinkedIn, YouTube, Twitter) may set their own cookies to track your activity and provide relevant content.`,
        },
      ],
    },
    {
      title: 'More Information',
      text: `We hope this policy has clarified our use of cookies. For a better experience, we recommend keeping cookies enabled. If you have any questions or need further information, please feel free to contact us:`,
      list: [
        {
          text: `Email: nexpeaklawfirm@gmail.com`,
          link: 'mailto:nexpeaklawfirm@gmail.com',
        },
        {
          text: `Phone: +91 8799762249`,
          link: 'tel:+918799762249',
        },
      ],
    },
  ],
};

const CookiePolicy = () => {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cookie Policy">
      <PolicyPage policyData={cookiePolicyData} />
    </Layout>
  );
};

export default CookiePolicy;