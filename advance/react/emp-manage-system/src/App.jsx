import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {

    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      
    }
  }, [authData]);




  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      setUser("employee");
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
    }
    else {
      alert("invalid credentials");
    }
  }



  // handleLogin('user@example.com', 123);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App