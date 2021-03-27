import React from "react";
import Link from "next/link";
function DemoListPage() {
  return (
    <div>
      <h1>Hello CoLi 👋</h1>
      <p>
        <Link href="/demo/import">
          <a>import</a>
        </Link>
      </p>
    </div>
  );
}

export default DemoListPage;
