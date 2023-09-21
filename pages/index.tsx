import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <div className="flex items-center justify-center h-full text-white font-medium text-3xl">
      <p className="text-white">Logged in as : {user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-5 py-1 rounded-md border border-white"
      >
        !!!
      </button>
    </div>
  );
}
