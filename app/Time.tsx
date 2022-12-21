"use client";
import React from "react";
import TimeAgo from "react-timeago";
type Props = {
  date: string;
};

function Time({ date }: Props) {
  return <TimeAgo date={date} />;
}

export default Time;
