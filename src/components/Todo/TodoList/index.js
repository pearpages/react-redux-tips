import React from "react";

import AddTodo from "../AddTodo";
import FilterButtons from "../FilterButtons";
import VisibleTodoList from "../VisibleTodoList";
import MyLink from "../MyLink";
import FILTER from "../../../reducers/filter.models";
import "./index.scss";

export default function TodoList({
  saveList,
  match,
  onSetFilter,
  title,
  filter,
  hasUrlFilter,
  todos,
  toggle,
  removeItem,
  isLoading
}) {
  if (filter !== (match.params.filter || FILTER.ALL)) {
    onSetFilter(match.params.filter || FILTER.ALL);
  }

  return (
    <div className="todolist">
      <h4>{title}</h4>
      <FilterButtons saveList={saveList} />
      <AddTodo />
      <VisibleTodoList
        hasUrlFilter={hasUrlFilter}
        todos={todos}
        toggle={toggle}
        isLoading={isLoading}
        removeItem={removeItem}
      />

      <div>
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.ALL)}
          filter={FILTER.ALL}
        >
          ALL
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.ACTIVE)}
          filter={FILTER.ACTIVE}
        >
          ACTIVE
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.COMPLETED)}
          filter={FILTER.COMPLETED}
        >
          COMPLETED
        </MyLink>
      </div>
    </div>
  );
}
