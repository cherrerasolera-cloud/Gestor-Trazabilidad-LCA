import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { WasteLog } from './views/WasteLog';
import { Logistics } from './views/Logistics';
import { Certificates } from './views/Certificates';
import { Directory } from './views/Directory';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'waste':
        return <WasteLog />;
      case 'logistics':
        return <Logistics />;
      case 'certificates':
        return <Certificates />;
      case 'directory':
        return <Directory />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeView={currentView} onChangeView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;