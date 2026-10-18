
import React, { useState, useEffect } from 'react'

const API = () => {

  const [api, useapi] = useState([])
  const [loading, setloading] = useState()


  async function FetchApi() {

    try {
      setloading(true)
      let response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error("Oops, Something went Wrong...")
      }

      let data = await response.json()
      useapi(data)

    }
    catch (err) {
      console.log(err)
    }

    finally {
      setloading(false)
    }
  }

  useEffect(() => {
    FetchApi()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-100 px-4 py-10 sm:px-8">

      <h1 className="mb-3 text-center text-4xl font-extrabold text-slate-800 sm:text-5xl">
        Employee{" "}
        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          Directory
        </span>
      </h1>

      <p className="mb-10 text-center text-sm text-slate-500 sm:text-base">
        ✨ Discover our amazing team members
      </p>

      {loading ? (<div className="flex flex-col items-center justify-center gap-4">
        <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400 border-b-violet-400"></div>

        <p className="text-sm text-cyan-400">
          Loading employees...
        </p>
      </div>)
        : (< div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">

          {api.map((user) => (
            <div
              key={user.id}
              className="group relative w-full overflow-hidden rounded-2xl border border-violet-100 bg-white p-6 shadow-lg shadow-violet-100/60 transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-fuchsia-200/60 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >

              {/* Top Gradient */}
              <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400"></div>

              {/* Profile Image */}
              <div className="mb-5 flex items-center gap-4">

                <img
                  src={`https://i.pravatar.cc/150?img=${user.id + 10}`}
                  alt={user.name}
                  className="h-16 w-16 shrink-0 rounded-2xl border-2 border-violet-100 object-cover shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />

                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-500">
                    Employee ID : {user.id}
                  </span>

                  <h1 className="mt-1 break-words text-lg font-extrabold text-slate-800 transition-colors group-hover:text-violet-600">
                    {user.name}
                  </h1>

                  <h2 className="break-words text-sm text-slate-500">
                    @{user.username}
                  </h2>
                </div>

              </div>

              {/* Email and Website */}
              <div className="space-y-3">

                <h3 className="break-words text-sm text-slate-600">
                  <span className="mr-2">📧</span>
                  <b className="text-slate-800">EMAIL :</b> {user.email}
                </h3>

                <p className="break-words text-sm text-slate-600">
                  <span className="mr-2">🌐</span>
                  <b className="text-slate-800">Website :</b> {user.website}
                </p>

              </div>

              <div className="my-5 border-t border-dashed border-violet-200"></div>

              {/* Address, Company and Phone */}
              <div className="space-y-3">

                <p className="break-words text-sm leading-6 text-slate-600">
                  <span className="mr-2">📍</span>
                  <b className="text-slate-800">Address :</b>{" "}
                  {user.address.city + " " + user.address.street}
                </p>

                <p className="break-words text-sm leading-6 text-slate-600">
                  <span className="mr-2">🏢</span>
                  <b className="text-slate-800">Company :</b>{" "}
                  {user.company.catchPhrase}
                </p>

                <p className="break-words text-sm leading-6 text-slate-600">
                  <span className="mr-2">📞</span>
                  <b className="text-slate-800">Phone :</b> {user.phone}
                </p>

              </div>



              {/* Footer */}
              <div className="mt-5 rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 px-4 py-3 text-center text-sm font-semibold text-violet-700 transition-colors group-hover:from-violet-100 group-hover:to-pink-100">
                ✨ Team Member
              </div>
            </div>
          ))}

        </div>
        )}

      <p className="mt-10 text-center text-sm text-slate-500">
        Made with 💜 using React
      </p>

    </div>
  )
}

export default API

