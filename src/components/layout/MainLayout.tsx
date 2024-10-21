/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout} type="primary" danger>
            Logout
          </Button>

          <Button type="primary" className="mx-2" danger>
            <Link to="/book/edit">Duplicate</Link>
          </Button>
        </Header>
        <Content>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
