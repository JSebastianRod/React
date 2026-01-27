import React from "react"
import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
  {
    userName: "JSebastianRod",
    name: "Sebastian Rodriguez",
    isFollowing: true,
  },
  {
    userName: "sebas679pb",
    name: "Sebastian Piñeros",
    isFollowing: false,
  },
  {
    userName: "DiegoSL26",
    name: "Diego Sanchez",
    isFollowing: false,
  },
]

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
