import React from "react";import { useLoaderData } from "remix";
export function meta() {
  return {
    title: "Public Gists",
    description: "View the latest gists from the public"
  };
}
export function loader(){
  return fetch("https://api.github.com/gists");
}
export default function Gists() {
  let data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>Public Gists</h2>
      <ul>
        {data.map((gist) => (
          <li key={gist.id}>
            <a href={gist.html_url}>
              {Object.keys(gist.files)[0]}
            </a>
          </li>
        ))}
        </ul>
    </div>
  );
}