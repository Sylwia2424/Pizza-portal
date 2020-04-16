import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, putToTablesStatus } from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  postTableStatus: (tableId, status ) => dispatch(putToTablesStatus(tableId, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);