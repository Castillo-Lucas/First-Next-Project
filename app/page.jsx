import Image from "next/image";
import Link from "next/link";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();

  return data.data;
}

async function Home() {
  const users = await fetchUsers();

  return (
    <div className="min-h-screen pt-10 px-4 md:px-10 lg:px-24 bg-zinc-800">
      <h2 className="text-center text-2xl text-zinc-200 mb-8">
        Usuarios Registrados
      </h2>

      <div className="grid grid-cols-12 gap-8">
        {users.map((user) => (
          <Link
            key={user.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 w-full h-40 flex p-3 bg-zinc-900/50 border border-zinc-700 rounded-xl"
            href={`/user/${user.id}`}
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
