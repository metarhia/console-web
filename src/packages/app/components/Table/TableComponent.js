import React, { Component } from 'react';
import matchSorter from 'match-sorter';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Table.css';

export default class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconId: 'fa fa-sort',
      iconName: 'fa fa-sort',
      iconAddr: 'fa fa-sort',
      iconCity: 'fa fa-sort',
    };

    this.sortCh = this.sortCh.bind(this);
    this.changeIcon = this.changeIcon.bind(this);
  }

  sortCh(sorted) {
    this.changeIcon(sorted[0]);
  }


  changeIcon(sorted) {
    const icons = {
      iconId: 'fa fa-sort',
      iconName: 'fa fa-sort',
      iconAddr: 'fa fa-sort',
      iconCity: 'fa fa-sort',
    };
    const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
    const key = 'icon' + capitalize(sorted.id.slice(0, 4));

    const order = sorted.desc ? 'desc' : 'asc';
    icons[key] = icons[key] + '-amount-' + order;

    this.setState(icons);
  }

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
      {/*----------------------Id column-----------------------*/
        Header: (
          <div>
            <span className="title">ID</span>
            <div className="rating">
              <span
                style={{ float: 'right' }}
                className={this.state.iconId}
              />
            </div>
          </div>
        ),
        accessor: 'id',
        Filter: ({ onChange }) => (
          <div>
            <input
              type="text"
              onChange={event => onChange(event.target.value)}
              style={{ width: '100%' }}
              placeholder="...query..."
            />
          </div>
        ),
        filterMethod: (filter, rows) => (
          matchSorter(rows, filter.value, { keys: ['id'] })
        ),
        filterAll: true,
      },
      {/*------------------------Name column-------------------------------*/
        Header: (
          <div>
            <span className="title">Name</span>
            <div className="rating">
              <span
                style={{ float: 'right' }}
                className={this.state.iconName}
              />
            </div>
          </div>
        ),
        accessor: 'name',
        Filter: ({ onChange }) => (
          <input
            type="text"
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            placeholder="...query..."
          />
        ),
        filterMethod: (filter, rows) => (
          matchSorter(rows, filter.value, { keys: ['name'] })
        ),
        filterAll: true,
        Cell: props => <span className="number">{props.value}</span>,
      },
      {/*----------------------Address column-------------------*/
        Header: (
          <div>
            <span className="title">Address</span>
            <div className="rating">
              <span
                style={{ float: 'right' }}
                className={this.state.iconAddr}
              />
            </div>
          </div>
        ),
        accessor: 'address',
        Filter: ({ onChange }) => (
          <input
            type="text"
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            placeholder="...query..."
          />
        ),
        filterMethod: (filter, rows) => (
          matchSorter(rows, filter.value, { keys: ['address'] })
        ),
        filterAll: true,
      },
      {/*------------------------City column---------------------*/
        Header: (
          <div>
            <span className="title">City</span>
            <div className="rating">
              <span
                style={{ float: 'right' }}
                className={this.state.iconCity}
              />
            </div>
          </div>
        ),
        accessor: 'city',
        Filter: ({ onChange }) => (
          <input
            type="text"
            onChange={event => onChange(event.target.value)}
            style={{ width: '100%' }}
            placeholder="...query..."
          />
        ),
        filterMethod: (filter, rows) => (
          matchSorter(rows, filter.value, { keys: ['city'] })
        ),
        filterAll: true,
      },
    ];

    return (
      <div className="bottom">
        <link
          rel="stylesheet"
          href={
            'https://cdnjs.cloudflare.com/' +
          'ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
          }
        />
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={100}
          showPagination={false}
          onSortedChange={this.sortCh}
          filterable
          defaultFilterMethod={
            (filter, row) => String(row[filter.id]) === filter.value
          }
        />
      </div>
    );
  }
}
