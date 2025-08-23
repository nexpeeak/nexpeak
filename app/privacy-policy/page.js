'use client';
import React from 'react';
import PolicyPage from '@/components/common/PolicyPage';
import { dataPrivacyData } from '@/data/dataPrivacyData';

const DataPrivacy = () => {
  return <PolicyPage policyData={dataPrivacyData} />;
};

export default DataPrivacy;