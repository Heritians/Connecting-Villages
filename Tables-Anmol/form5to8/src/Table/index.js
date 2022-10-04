import React from 'react';
import { useTable} from 'react-table';

const Table = ({columns, rows}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
    } = useTable({
        columns, rows,
    });

    return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                            {column.render('S. No.')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>

        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
    );
};

export default Table;