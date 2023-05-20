import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';

const TabSub = () => {
  const [toys, setToy] = useState([]);
  const [activeTab, setActiveTab] = useState("car");

  useEffect(() => {
    fetch(`https://toy-chamber-server.vercel.app/toys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToy(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
        <div className='mt-5'>
          <hr />
          <h1 className='font-bold text-2xl text-center mb-2'>Sub Category</h1>
             <Tabs>
    <TabList>
      <Tab onClick={() => handleTabClick("car")} >Car</Tab>
      <Tab onClick={() => handleTabClick("house")}>House</Tab>
      <Tab onClick={() => handleTabClick("cycle")}>Cycle</Tab>
    </TabList>

    <TabPanel>
      <h2>{activeTab}</h2>
      {
        toys.map(toy => <TabCard toy={toy} key={toy._id}></TabCard>)
      }
    </TabPanel>
    <TabPanel>
    <h2>{activeTab}</h2>
      {
        toys.map(toy => <TabCard toy={toy} key={toy._id}></TabCard>)
      }
    </TabPanel>
    <TabPanel>
    <h2>{activeTab}</h2>
      {
        toys.map(toy => <TabCard toy={toy} key={toy._id}></TabCard>)
      }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabSub;