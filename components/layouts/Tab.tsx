import Link from "next/link";
import { useRouter } from "next/router";

interface ITab {
  data: {
    link: string;
    menuName: string;
  }[];
}

function Tab({ data }: ITab) {
  const router = useRouter();

  return (
    <ul className="list_tab en">
      {data.map((el) => (
        <li key={el.menuName} className={el.link === router.asPath ? "on" : ""}>
          <Link href={el.link}>{el.link === router.asPath ? <h3>{el.menuName}</h3> : <span>{el.menuName}</span>}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Tab;
