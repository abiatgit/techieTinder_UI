function Navbar() {
  return (
    <div className="bg-base-100 p-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;