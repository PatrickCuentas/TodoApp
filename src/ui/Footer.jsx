import { FilterLink } from "../components/FilterLink"

export const Footer = ()=>{

    return (
      <div className="px-6 py-4 flex flex-wrap justify-center gap-3 bg-light-theme-bg dark:bg-dark-theme-bg-input mt-5 shadow-md rounded-[8px]">
        <FilterLink filter="ALL">All</FilterLink>
        <FilterLink filter="ACTIVE">Active</FilterLink>
        <FilterLink filter="COMPLETED">Completed</FilterLink>
      </div>
    );
}
// 2E3146