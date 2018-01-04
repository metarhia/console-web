import React, {Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './Table.css'

export default class TableComponent extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: 'Tanner Linsley',
        address: 'Ave Cesaria',
        city: 'Rome'
      }, {
        id: 2,
        name: 'Marcus Aurelius',
        address: 'Senat',
        city: 'Rome'
      }, {
        id: 3,
        name: 'Agent Smith',
        address: 'CIA',
        city: 'Los-Angeles'
      }, {
        id: 4,
        name: 'Typical Lumberjack',
        address: 'Bearland',
        city: 'Toronto'
      }
    ]

    const columns = [
      {
        Header: 'ID',
        accessor: 'id'
      }, {
        Header: 'Name',
        accessor: 'name',
        Cell: props => <span className='number'>{props.value}</span>
      }, {
        Header: 'Address',
        accessor: 'address'
      }, {
        Header: 'City',
        accessor: 'city'
      }
    ]

    return (
      <div className="bottom">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={100}
          showPagination={false}
          style={{
          height: '100%'
        }}/>
      </div>
    )
  }
}