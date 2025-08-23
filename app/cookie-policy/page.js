'use client';
import React from 'react';
import PolicyPage from '@/components/common/PolicyPage';
import { cookiePolicyData } from '@/data/cookiePolicyData';

const CookiePolicy = () => {
  return <PolicyPage policyData={cookiePolicyData} />;
};

export default CookiePolicy;
