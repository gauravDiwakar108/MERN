import { useState } from "react"
import { setLocalStorage } from "../../utils/localStorage"

const Header = ({ data }) => {
  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername('Admin');
  // }
  // else{
  //   setUsername(data.name);
  // }

  const logoutUser = () =>{
    localStorage.setItem('loggedInUser', '');
    window.location.reload();
  }
  return (
    <div className="flex item-end justify-between text-white ">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold"> 👋🏻</span></h1>
      <button 
      onClick={logoutUser}
      className="bg-red-600 text-lg font-medium text-white px-8 py-1 rounded-sm cursor-pointer">Log Out</button>
    </div>
  )
}

export default Header
