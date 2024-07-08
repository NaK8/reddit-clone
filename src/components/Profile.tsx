"use client";

import { useSession } from "next-auth/react";
import React from "react";

export default function Profile() {
  const session = useSession();
  if (session.data?.user) {
    return <div>From Client {JSON.stringify(session.data.user.name)}</div>;
  } else {
    return <div>From Client User Sign Out</div>;
  }
}
