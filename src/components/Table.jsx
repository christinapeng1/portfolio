import React from "react";

// Table Component
const Table = ({ columns, data }) => {
  return (
    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ padding: "10px", textAlign: "left" }}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} style={{ padding: "10px" }}>
                {row[column] || "-"}{" "}
                {/* Default to "-" if no value is present */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
