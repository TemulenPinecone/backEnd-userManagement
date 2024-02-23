import { useEffect, useState } from "react";

export default function Home() {
  const backURL = "http://localhost:3001/addUsers";
  const newUserURL = `http://localhost:3001/newUsers`;

  const [users, setusers] = useState([]);

  async function importUsers() {
    const FETCHED_USER_DATA = await fetch(newUserURL);
    const FETCHED_USER_JSON = await FETCHED_USER_DATA.json();
    setusers([FETCHED_USER_JSON]);

    console.log(FETCHED_USER_JSON);
  }
  useEffect(() => {
    // console.log(`USERS JUST`, users);
    importUsers();
  }, []);
  console.log(`USERS JUST`, users);

  async function handleSendBtn(element) {
    element.preventDefault();
    const data = {
      name: element.target.userName.value,
      age: element.target.userAge.value,
    };
    // console.log(`data`, data);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(backURL, option);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(`FETCHED_JSON`, FETCHED_JSON);
  }

  return (
    <div>
      <form action="" onSubmit={handleSendBtn}>
        <div className="flex flex-col mx-auto w-[40%] border rounded-lg items-center gap-y-5 my-10 py-5">
          <div className="border rounded-lg">
            <label
              htmlFor="userName"
              className="input input-bordered flex items-center gap-2 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                id="userName"
                type="text"
                className="focus:outline-none"
                placeholder="User name"
                name="userName"
              />
            </label>
          </div>
          <div className="border rounded-lg">
            <label
              htmlFor="userAge"
              className="input input-bordered flex items-center gap-2 px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                name="userAge"
                id="userAge"
                type="text"
                className="focus:outline-none"
                placeholder="User age"
              />
            </label>
          </div>
          <div>
            <input
              className="btn bg-gray-400 rounded-lg py-1 px-5 hover:bg-gray-800 hover:text-white hover:ease-in-out hover:transition-all"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>

      <div>
        {/* <div>
          {users.map((element) => {
            <div>
              <p>{element.name}</p>
              <p>{element.age}</p>
            </div>;
          })}
          ;
        </div> */}
        {/* <div>{users}</div> */}
      </div>
    </div>
  );
}
