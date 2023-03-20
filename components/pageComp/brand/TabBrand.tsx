import Link from "next/link";
import React from "react";

function TabBrand() {
  return (
    <ul className="list_tab en">
      <li className="on">
        <Link href="/brand">
          <h3>OUR STORY</h3>
        </Link>
      </li>
      <li>
        <Link href="/brand/howwemake">
          <span>HOW WE MAKE</span>
        </Link>
      </li>
      <li>
        <Link href="/brand/goglobal">
          <span>GO GLOBAL</span>
        </Link>
      </li>
    </ul>
  );
}

export default TabBrand;
