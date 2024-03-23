import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as colors from "../../../App/standard-colors";

const tableTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: "50vh",
      },
    },
  },
});

const Table = ({ title, columns, data }) => {
  const labeledColumns = columns.map((name) => {
    return {
      name: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      options: {
        filter: true,
        sort: true,
        setCellHeaderProps: (columnMeta) => {
          return {
            style: {
              fontWeight: "bold",
              color: colors.pink,
            },
          };
        },
      },
    };
  });

  let labeledData = [];
  for (let rowIndex in data) {
    let rowDataObject = {};
    for (let rowElementIndex in data[parseInt(rowIndex)]) {
      rowDataObject = {
        ...rowDataObject,
        [labeledColumns[parseInt(rowElementIndex)].name]:
          data[parseInt(rowIndex)][parseInt(rowElementIndex)],
      };
    }
    labeledData = labeledData.concat(rowDataObject);
  }

  const options = {
    // filterType: "checkbox",
    filter: false,
    setRowProps: (row, dataIndex) => {
      let backgroundColor;
      if (row[2] === row[3])
        // if selected answer is same as correct answer
        backgroundColor = "#e0ffd9";
      // Light-green
      else backgroundColor = "#ffe6e6"; // Light-red
      return {
        style: { backgroundColor },
      };
    },
    responsive: "scroll",
  };

  return (
    <ThemeProvider theme={tableTheme}>
      <MUIDataTable
        title={title}
        data={labeledData}
        columns={labeledColumns}
        options={options}
      />
    </ThemeProvider>
  );
};

export default Table;
