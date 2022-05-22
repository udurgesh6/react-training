import React from "react";
import { Table } from "antd";

function CommonTable({ columns, data, showExpandable }) {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        expandable={
          showExpandable && {
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.name}</p>
            ),
            rowExpandable: (record) => showExpandable,
          }
        }
      />
    </div>
  );
}

export default CommonTable;
