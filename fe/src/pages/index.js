export default function Home() {
  const frontURL = "http://localhost:3001/addUsers";

  async function handleSendBtn(element) {
    element.preventDefault();
    const data = {
      name: element.target.userName.value,
      age: element.target.userAge.value,
    };
    console.log(data);
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(frontURL, option);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  }
  return (
    <form action="" onSubmit={handleSendBtn}>
      <div className="flex flex-col mx-auto w-[40%] border rounded-lg items-center gap-y-5 my-10 py-5">
        <div className="border rounded-lg">
          <label
            htmlFor="userName"
            className="input input-bordered flex items-center gap-2"
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
              className="grow"
              placeholder="User name"
              name="userName"
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="userAge"
            className="input input-bordered flex items-center gap-2"
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
              className="grow"
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
  );
}
