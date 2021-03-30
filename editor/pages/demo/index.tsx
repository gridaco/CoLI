import React from "react";
import Link from "next/link";
function DemoListPage() {
  return (
    <div>
      <h1>Hello CoLi 👋</h1>
      <p style={{ display: "flex", flexDirection: "column" }}>
        <Link href="/demo/import">
          <a>import</a>
        </Link>
        <Link href="/demo/comment">
          <a>comment</a>
        </Link>
      </p>
    </div>
  );
}

export default DemoListPage;
