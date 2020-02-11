import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Switch } from 'react-router-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage.js';
import Login from './components/views/Login/Login.js';
import Tables from './components/views/Tables/Tables.js';
import Kitchen from './components/views/Kitchen/Kitchen.js';
import Waiter from './components/views/Waiter/WaiterContainer.js';
import Booking from './components/views/Booking/Booking';
import BookingId from './components/views/BookingId/BookingId';
import Order from './components/views/Order/Order';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewBooking from './components/views/NewBooking/NewBooking';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#284C6F' }, 
    //secondary: { main: '#11cb5f'}, 
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
                <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />      
                <Route exact path={`${process.env.PUBLIC_URL}/booking`} component={Booking} />
                <Route exact path={`${process.env.PUBLIC_URL}/booking/new`} component={NewBooking} />
                <Route exact path={`${process.env.PUBLIC_URL}/booking/:id`} component={BookingId} />
                <div className="App">
                  <header className="App-header">
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                Learn React
                    </a>
                  </header>
                </div>
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
  
}

export default App;
