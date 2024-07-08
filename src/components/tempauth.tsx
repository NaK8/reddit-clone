import { auth } from "@/auth";
import React from "react";

export default async function Tempauth() {
  const session = await auth();
  if (session?.user) {
    return <div>{JSON.stringify(session.user)}</div>;
  } else {
    return <div>Sign Out</div>;
  }
}
