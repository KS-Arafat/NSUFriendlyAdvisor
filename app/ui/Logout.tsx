import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Logout_Action = async (): Promise<void> => {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("jwt");
  cookieStore.delete("PHPSESSID");
  cookieStore.delete("csrf_cookie_name");
  cookieStore.delete("username");
  redirect("/");
};

const Logout = async () => {
  return (
    <form className="" action={Logout_Action}>
      <button
        className="mt-5 rounded-xl bg-rose-600 p-3 px-5 text-white shadow-md shadow-gray-700 transition hover:bg-rose-400 hover:text-rose-700"
        type="submit"
      >
        Log Out
      </button>
    </form>
  );
};

export default Logout;
