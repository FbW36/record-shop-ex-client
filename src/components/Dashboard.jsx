import { useEffect } from 'react';
import { fetchRecords } from '../helpers/apiCalls';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
import Record from './Record';
import { Redirect } from 'react-router';

const Dashboard = () => {
  const { records, setRecords, userStatus } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      let res = await fetchRecords();
      setRecords(res.data);
    };

    getData();
  }, [setRecords]);

  if (!userStatus) return <Redirect to='/login' />;

  const recordsList = records.map((record) => (
    <Record key={record._id} data={record}></Record>
  ));

  return (
    <div className='dashboard'>
      <section>
        <h3>Dashboard</h3>
        <p>Here you can find all our records</p>
        <div className='records-container'>{recordsList}</div>
      </section>
    </div>
  );
};

export default Dashboard;
