import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./views/feed";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup/index";
import CreateBlog from "./views/feed/CreateBlog";
import Dashboard from "./views/dashboard";
import EmployeeForm from "./views/employees/Form";
import { Profile } from "./views/employees/Profile";
import { AuthProvider } from "./context/AuthProvider";
import { NavigationProvider } from "./context/NavigationProvider";
import {
  COMPONENT_URL,
  EMPLOYEE_FORM,
  EMPLOYEE_LIST_URL,
  FEED_URL,
  LOGIN_URL,
  PROFILE_URL,
  ROOT_URL,
} from "./config/url";
import { QueryClient, QueryClientProvider } from "react-query";
import { ComponentView } from "./views/components";
import { InputView } from "./views/components/Input";
import { CheckboxView } from "./views/components/Checkbox";
import { RadioView } from "./views/components/Radio/input";

const root = ReactDOM.createRoot(document.getElementById("root"));
let user = localStorage.getItem("user");
user = JSON.parse(user);
const queryClient = new QueryClient();

root.render(
  <AuthProvider userData={user}>
    <NavigationProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path={ROOT_URL} element={<App />} />
              <Route path={EMPLOYEE_LIST_URL} element={<Dashboard />} />
              <Route path={EMPLOYEE_FORM} element={<EmployeeForm />} />
              <Route path={FEED_URL} element={<Feed />} />
              <Route path={PROFILE_URL} element={<Profile />} />
              <Route path={LOGIN_URL} element={<Login />} />
              <Route path={COMPONENT_URL.ROOT} element={<ComponentView />}>
                <Route path={COMPONENT_URL.INPUT} element={<InputView />} />
                <Route path={COMPONENT_URL.RADIO} element={<RadioView />} />
                <Route
                  path={COMPONENT_URL.CHECKBOX}
                  element={<CheckboxView />}
                />
              </Route>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/CreateBlog" element={<CreateBlog />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </React.StrictMode>
    </NavigationProvider>
  </AuthProvider>
);
