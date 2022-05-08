import React from 'react'
import PropTypes from 'prop-types';
import { Table } from 'antd';

const RentInfoTable = ({schemas, data}) => {
    return <Table columns={schemas} dataSource={data}/>
}


RentInfoTable.propTypes = {
    schemas: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object),
  };
export default RentInfoTable






