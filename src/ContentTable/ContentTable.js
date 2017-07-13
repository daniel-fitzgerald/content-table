import React from 'react'

import './content-table.css'

function Headers({ headers = [] }) {
    return <thead>
        <tr>
            {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
    </thead>
}

function Rows({ rows = [], headers, emptyText }) {
    let result
    if (rows.length === 0) {
        result = <tr><td colSpan={headers.length}>{emptyText}</td></tr>
    } else {
        result = rows.map((row, index) => <tr key={row[0]}>{row.slice(1).map((column, index) => <td key={index}>{column}</td>)}</tr>)
    }
    return <tbody>{result}</tbody>
}

function ContentTable({ headers, rows, emptyText = 'No content' }) {
    return <table className="content-table">
        <Headers headers={headers} />
        <Rows rows={rows} headers={headers} emptyText={emptyText} />
    </table >
}

export default ContentTable