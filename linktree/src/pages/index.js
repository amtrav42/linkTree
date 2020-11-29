import React from "react";
import Avatar from "../components/Avatar";
import UserHandle from "../components/UserHandle";
import ClassicLink from "../components/ClassicLink";
import ShowsLink from "../components/ShowsLink";
import MusicStyle from "../components/MusicStyle";

export default function Home() {
  return (
  	<div>
		<Avatar />
		<UserHandle />
		<ClassicLink />
		<ShowsLink />
		<MusicStyle />
	</div>
  );
}
