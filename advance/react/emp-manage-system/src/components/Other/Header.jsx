const Header = () => {
  return (
    <div className="flex item-end justify-between text-white ">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Gaurav 👋🏻</span></h1>
      <button className="bg-red-600 text-lg font-medium text-white px-8 py-1 rounded-sm cursor-pointer">Log Out</button>
    </div>
  )
}

export default Header
