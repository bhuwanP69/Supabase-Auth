import Navbar from './auth/layout'

export default function page() {
  return (
    <main>
        <Navbar/>
        <div className="first text-center pt-10">
        <h2 className='text-2xl pb-10'>Its Just a first Page</h2>
         <p className='text-xl'>This is before the Login Page </p>
        </div>
    </main>
  )
}
