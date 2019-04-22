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
  removeItem
}) {
  if (filter !== (match.params.filter || FILTER.SHOW_ALL)) {
    onSetFilter(match.params.filter || FILTER.SHOW_ALL);
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
        removeItem={removeItem}
      />
      <div>
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_ALL)}
          filter={FILTER.SHOW_ALL}
        >
          ALL
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_ACTIVE)}
          filter={FILTER.SHOW_ACTIVE}
        >
          ACTIVE
        </MyLink>{" "}
        |{" "}
        <MyLink
          handleOnClick={() => onSetFilter(FILTER.SHOW_COMPLETED)}
          filter={FILTER.SHOW_COMPLETED}
        >
          COMPLETED
        </MyLink>
      </div>
    </div>
  );
}
