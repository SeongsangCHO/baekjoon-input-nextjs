import type { NextPage } from "next";
import Link from "next/link";
import { BASE_URL } from "utils/constant";

interface INextPage {
  mode: boolean;
  setMode: (prev: any) => void;
}

const Home: NextPage<INextPage> = ({ mode, setMode }) => {
  return (
    <>
      {BASE_URL.map((base) => (
        <Link key={base.url} href={`/main/${base.url}`}>
          <a>
            <div>{base.url}</div>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Home;
