async function GetUser(userID) {
  const res = await fetch(`https://reqres.in/api/users/${userID}`);
  const data = await res.json();

  return data.data;
}

async function User({ params }) {
  try {
    const user = await GetUser(params.id);
    return (
      <div className="min-h-screen pt-10 px-4 md:px-10 lg:px-24 bg-zinc-800">
        <div
          key={user.id}
          className="w-full h-40 flex p-3 bg-zinc-900/50 border border-zinc-700 rounded-xl"
        >
          <img
            src={user.avatar}
            alt={user.first_name}
            className="rounded-full"
          />
          <div className="pl-2">
            <h3 className="text-lg font-medium text-zinc-200 -mb-1">
              {user.first_name} {user.last_name}
            </h3>
            <p className="mb-2 text-sm text-zinc-200/50">{user.email}</p>
            <p className="text-xs text-zinc-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              vestibulum risus. Nunc pretium vulputate eros, quis interdum ex
              euismod nec.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen pt-10 px-4 md:px-10 lg:px-24 bg-zinc-800">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 w-full h-40 flex justify-center items-center p-3 bg-zinc-900/50 border border-zinc-700 rounded-xl">
          <p className="text-zinc-300 text-2xl">Usuario no encontrado</p>
        </div>
      </div>
    );
  }
}

export default User;
