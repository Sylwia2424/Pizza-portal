import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import DateAndTimePickers from './../../layout/DatePicker/DatePicker';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

const demoTables = [
  {id: '1', time: '12:00'},
  {id: '2', time: '12:30'},
  {id: '3', time: '13:00'},
  {id: '4', time: '13:30'},
];

const Tables = (props) => {
  const {location} = props;
  return(
    <div className={styles.component}>
      <h2>Tables</h2>
      <div>
        <Button component={Link} to={`/tables/booking/${location.key}`}>Booking</Button>
        <Button component={Link} to={`/tables/event/${location.key}`}>event</Button>
      </div>
      <DateAndTimePickers />
      <Toolbar />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                Table number
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {demoTables.map(row => (
              <TableRow key={row.id} >
                <TableCell scope="row" colSpan={5}>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.order && (
                    <Button to={`${process.env.PUBLIC_URL}/tables/${row.tables}`}>
                      {row.order}
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};
    

Tables.propTypes={
  location: PropTypes.object,
};

export default Tables;