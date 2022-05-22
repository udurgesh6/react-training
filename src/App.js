import CommonTable from "./components/CommonTable";
import Component1 from "./components/Component1";
import Parent from "./components/Parent";
import { Tag, Space } from "antd";
import NewParent from "./components/NewParent";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div>
      {/* <Parent />
      <NewParent /> */}
      {/* <CommonTable columns={columns} data={data} /> //App Common Table */}
      <Products />
      <Users />
    </div>
  );
}

export default App;
