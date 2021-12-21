import React, { useContext } from "react";

import mainContext from "../../context/main-context";

export default function Child() {
  const { friends } = useContext(mainContext);
  console.log(friends);
  return <div></div>;
}
