import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Table.css';
import matchSorter from 'match-sorter';

export default class TableComponent extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: 'Tanner Linsley',
        address: 'Ave Cesaria',
        city: 'Rome',
      }, {
        id: 2,
        name: 'Marcus Aurelius',
        address: 'Senat',
        city: 'Rome',
      }, {
        id: 3,
        name: 'Agent Smith',
        address: 'CIA',
        city: 'Los-Angeles',
      }, {
        id: 4,
        name: 'Typical Lumberjack',
        address: 'Bearland',
        city: 'Toronto',
      },
    ];

    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
        Filter: ({ filter, onChange }) =>
          <input type="text"
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          placeholder='...query...'
        />,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['id'] }),
        filterAll: true,
      }, {
        Header: 'Name',
        accessor: 'name',
        Filter: ({ filter, onChange }) =>
          <input type='text'
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          placeholder='...query...'
        />,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['name'] }),
        filterAll: true,
        Cell: props => <span className='number'>{props.value}</span>,
      }, {
        Header: 'Address',
        accessor: 'address',
        Filter: ({ filter, onChange }) =>
          <input type='text'
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          placeholder='...query...'
        />,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['address'] }),
        filterAll: true,
      }, {
        Header: 'City',
        accessor: 'city',
        Filter: ({ filter, onChange }) =>
          <input type='text'
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          placeholder='...query...'
        />,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['city'] }),
        filterAll: true,
      },
    ];

    return (
      <div className='bottom'>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={100}
          showPagination={false}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
        />
      </div>
    );
  }
}

