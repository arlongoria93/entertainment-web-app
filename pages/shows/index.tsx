import Navbar from "../../components/Navbar/Navbar"

const shows = () => {
  return (

    <div className="font-sans flex flex-col md:flex-row">
      <Navbar active="shows" />
      <div className="w-full min-h-screen p-4">
        <div className="border h-full">
          <h1>TV SHOWS</h1>
        </div>
      </div>
    </div>
  )
}
export default shows
