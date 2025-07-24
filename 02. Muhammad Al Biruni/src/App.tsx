import { useState } from "react";
import "./App.css";
import { useUsers } from "./hooks/users/queries";

function App() {
  const [enableFetching, setEnableFetching] = useState(false);
  const { data, isLoading } = useUsers({ isEnabled: enableFetching });

  const handleFetch = () => {
    setEnableFetching(true);
  };
  return (
    <div className="mx-auto w-full py-12 px-12">
      <div className="flex flex-col gap-4 md:flex-row justify-center items-center">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-lg">Halo</h1>
          <p className="max-w-[300px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni rem
            ipsum pariatur sapiente dolore reprehenderit praesentium fuga
            accusamus perspiciatis voluptate!
          </p>
          <button className="btn btn-primary" onClick={handleFetch}>
            Fetch Data
          </button>
        </div>
        <div>
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-2 gap-2 w-full">
              {data?.map((user) => (
                <div className="p-3 border border-primary w-full">
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
