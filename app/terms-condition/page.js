'use client';
import React from 'react';
import PolicyPage from '@/components/common/PolicyPage';
import { termsAndConditionsData } from '@/data/termsAndConditionsData';

const TermsAndConditions = () => {
  return <PolicyPage policyData={termsAndConditionsData} />;
};

export default TermsAndConditions;
