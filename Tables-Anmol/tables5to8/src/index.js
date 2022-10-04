import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { useForm, useField, splitFormProps } from "react-form";
import { useTable } from "react-table";
import QRCode from "qrcode.react";

const TableInput = props => {
  console.log("TableInput", props);
  const { column, row, cell, updateData } = props;
  const onChange = e => updateData(row.index, column.id, e.target.value);
  return <input type="number" value={cell.value} onChange={onChange} />;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    width: 30%;
    text-align: center;
    border: 1px solid lightgray;
    padding: 5px;
  }
`;
const ReactTable = React.memo(props => {
  console.log("ReactTable", props);
  const { setAmountDue } = props;
  const columns = React.useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: row => row.count ,
        
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: <label>abcs</label>
      },
      {
        Header: "Persons Benefitted \n(in Numbers)",
        accessor: "count",
        Cell: TableInput
      }
    ],
    []
  );
  const initialData = [
    {
      cost: 1,
      quantity: 2,
      count: 1
    },
    {
      cost: 3,
      quantity: 4
    }
  ];
  const [data, setData] = React.useState(initialData);
  const resetData = () => setData(initialData);
  const addRow = () => setData(old => [...old, { cost: 5, quantity: 6 }]);
  const updateData = (rowIndex, columnID, value) => {
    setData(oldData =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...oldData[rowIndex],
            [columnID]: value
          };
        }
        return row;
      })
    );
  };
  const table = useTable({ columns, data, updateData });
  const { getTableProps, headerGroups, rows, prepareRow } = table;
  const tableSum = rows.reduce((sum, row) => sum + row.values.total, 0);
  console.log("setAmountDue", tableSum);
  setAmountDue(tableSum);
  return (
    <>
      <label>5. Information fo Government Schemes:</label>
      <br />
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
          <tr>
            <td colSpan={3}>
              <button type="button" onClick={addRow}>
                Add Row
              </button>
              <button type="button" onClick={resetData}>
                Reset Table
              </button>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
});

const StyledInput = styled.input`
  flex: 1 1 auto;
  margin: 5px;
  padding: 5px;
`;
const FormInput = React.forwardRef((props, ref) => {
  console.log("FormInput", props);
  const [field, fieldOptions, rest] = splitFormProps(props);
  const inputField = useField(field, fieldOptions);
  const { meta, getInputProps } = inputField;
  const { error, isTouched, isValidating } = meta;
  return (
    <>
      <StyledInput key={props.field} {...getInputProps({ ref, ...rest })} />
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  );
});

const FormStyles = styled.div`
  form {
    margin: 10px;
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    aside {
      display: flex;
      justify-content: space-between;
    }
    section {
      flex: 1 1 auto;
      display: flex;
      flex-flow: column nowrap;
    }
    button {
      margin: 5px;
      padding: 5px;
      width: 100px;
      align-self: flex-end;
    }
  }
`;
const AmountDue = styled.label`
  margin: 10px;
  font-size: 1.5em;
  align-self: flex-end;
`;
const PaymentQRCode = styled(QRCode)`
  padding: 5px;
  align-self: flex-end;
`;
const Notes = styled(StyledInput)`
  min-height: 50px;
`;
const ReactForm = props => {
  console.log("ReactForm", props);
  const { amountDue, setAmountDue } = props;
  const defaultValues = React.useMemo(
    () => ({
      name: "Anmol",
      dashAddress: "ABC Address",
      notes: "Payment terms: Net 30"
    }),
    []
  );
  const onSubmit = async (values, instance) => {
    console.log("Form values:", values);
    instance.reset();
  };
  const form = useForm({ defaultValues, onSubmit });
  const { Form, values, meta } = form;
  const { isSubmitting, canSubmit } = meta;
  const required = React.useCallback(
    value => (!value ? "Required!" : false),
    []
  );

  return (
    <FormStyles>
      <Form>
        <aside>
          <section>
            <label>
              Name: <FormInput field="name" />
            </label>
            <label>
              Address:
              <FormInput field="dashAddress" validate={required} />
            </label>
            
          </section>
          <section>
            <AmountDue>Amount Due: {amountDue} DASH</AmountDue>
            <PaymentQRCode
              size={100}
              value={`dash:${values.dashAddress}?amount=${amountDue}`}
            />
          </section>
        </aside>
        <ReactTable setAmountDue={setAmountDue} />
        <br />
        <aside>
          <section>
            <label>
              Notes: <Notes as={FormInput} field="notes" />
            </label>
          </section>
          <section>
            {isSubmitting ? "Submitting..." : null}
            <button type="submit" disabled={!canSubmit}>
              Reset Form
            </button>
          </section>
        </aside>
      </Form>
    </FormStyles>
  );
};

const Main = styled.main`
  border-radius: 5px;
  padding: 10px;
  background: white;
  h1 {
    text-align: center;
  }
`;
const Invoice = props => {
  console.log("Invoice", props);
  const [amountDue, setAmountDue] = React.useState(0);
  return (
    <Main>
      <h1>Invoice</h1>
      <ReactForm amountDue={amountDue} setAmountDue={setAmountDue} />
    </Main>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    font: 1em sans-serif;
    margin: 15px;
    background: lightgray;
  }
`;
const App = props =>
  console.log("App", props) || (
    <>
      <GlobalStyles />
      <Invoice />
    </>
  );

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
