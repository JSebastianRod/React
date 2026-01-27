import { Filters } from "./Filters.jsx"
/* eslint-disable react/prop-types */

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React shop</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}
