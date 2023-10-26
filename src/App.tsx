import "@arco-design/web-react/dist/css/arco.css";
import { useEffect, useState } from "react";
import { Table, Button } from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns:any[] = [
  {
    title: "Name",
    dataIndex: "name",
    width: 200
  },
  {
    title: "Salary",
    dataIndex: "salary"
  },
  {
    title: "Count",
    dataIndex: "count"
  },
  {
    title: "Stars",
    dataIndex: "stars"
  }
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    count: 66,
    stars: 5
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    count: 55,
    stars: 8
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    count: 100,
    stars: 2
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    count: 88,
    stars: 10
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    count: 120,
    stars: 4
  }
];


const App = () => {
  const [tableYScroll, setTableYScroll] = useState<number>();
  function handleWindowSize() {
    setTableYScroll(window.innerHeight > 650 ? window.innerHeight - 350 : 300);
  }
  useEffect(function () {
    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);
  return (
    <div>
      <Table
        style={{
          marginTop: 20
        }}
        columns={columns.concat({
          title: "Operation",
          dataIndex: "operation",
          render: () => (
            <Button type="primary" size="mini">
              Confirm
            </Button>
          ),
          fixed: "right",
          width: 100
        })}
        data={data}
        scroll={{
          x: 1200,
          y: tableYScroll
        }}
        border={{
          wrapper: true,
          cell: true
        }}
      />
    </div>
  );
};

export default App;
