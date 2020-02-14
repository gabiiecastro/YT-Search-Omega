import React from 'react';
import VideoList from './VideoList';
import VideoFilter from './VideoFilter';
import SearchVideoButton from './SearchVideoButton';

const DashboardPage = () => (
  <div>
    <SearchVideoButton />
    <VideoFilter />
    <VideoList />
  </div>
);

export default DashboardPage;
