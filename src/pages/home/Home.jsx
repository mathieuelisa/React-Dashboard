import React from 'react';
import { createUseStyles } from 'react-jss';
import Charts from '../../components/Charts';
import Features from '../../components/Features';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Tables from '../../components/Tables';
import Widget from '../../components/Widget';

const useStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
  },
  container: {
    flex: 5,
  },
  widgetsContainer: {
    display: 'flex',
    padding: 20,
  },
  secondWidgetContainer: {
    display: 'flex',
    padding: 20,
  },
  listContainer: {
    display: 'flex',
    flex: 3,
    justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    marginRight: 35,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    borderRadius: 5,
    flexDirection: 'column',
  },
  listTitle: {
    color: '#bcbaba',
  },
});

// type WidgetObject =
//   | {
//       name: string,
//       type: 'widget1',
//     }
//   | {
//       name: string,
//       type: 'widget2',
//       getListUrl: string,
//     };

const widgets = ['users', 'balances', 'orders', 'earnings'];
// const widgets2 = [
//   { name: 'users', type: 'widget1' },
//   { name: 'balances', type: 'widget1' },
//   { name: 'orders', type: 'widget1' },
//   { name: 'earnings', type: 'widget1' },
//   { name: 'test', type: 'widget2' },
//   { name: 'deuxieme test', type: 'widget2' },
// ];

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.widgetsContainer}>
          {widgets.map((e, i) => (
            <Widget key={i} type={e} />
          ))}
          {/* {widgets2.map((e, i) =>
            e.type === 'widget1' ? (
              <Widget key={i} type={e.name} />
            ) : (
              <span key={i}>{e.name}</span>
            )
          )} */}
        </div>

        <div className={classes.secondWidgetContainer}>
          <Charts />
          <Features />
        </div>
        <div className={classes.listContainer}>
          <div className={classes.listTitle}>
            <h4>Latest transactions</h4>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
