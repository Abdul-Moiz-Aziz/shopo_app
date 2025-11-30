// src/store/users/usersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      original: [],
      sorted: [],
      search: "",
      status: "all",
      field: "name",
      sort: "",
};

const usersSlice = createSlice({
      name: "users",
      initialState,
      reducers: {
            setUsers: (state, action) => {
                  state.original = action.payload;
                  state.sorted = action.payload;
            },
            addUser: (state, action) => {
                  state.original.push(action.payload);
                  state.sorted.push(action.payload);
            },
            deleteUser: (state, action) => {
                  const id = action.payload;
                  state.original = state.original.filter((u) => u.id !== id);
                  state.sorted = state.sorted.filter((u) => u.id !== id);
            },
            changeUserRole: (state, action) => {
                  const { id, role } = action.payload;
                  state.original = state.original.map((u) =>
                        u.id === id ? { ...u, role } : u
                  );
                  state.sorted = state.sorted.map((u) =>
                        u.id === id ? { ...u, role } : u
                  );
            },
            applyUserFiltersAndSort: (state, action) => {
                  const { search, field, status, sort } = action.payload;
                  state.search = search;
                  state.status = status;
                  state.field = field;
                  state.sort = sort;

                  let filtered = state.original.filter((user) =>
                        user[field].toLowerCase().includes(search.toLowerCase())
                  );

                  if (status !== "all") {
                        filtered = filtered.filter(
                              (user) => user.status.toLowerCase() === status.toLowerCase()
                        );
                  }

                  if (sort) {
                        filtered.sort((a, b) => {
                              const valA = a[sort].toLowerCase?.() || a[sort];
                              const valB = b[sort].toLowerCase?.() || b[sort];
                              if (valA < valB) return -1;
                              if (valA > valB) return 1;
                              return 0;
                        });
                  }

                  state.sorted = filtered;
            },
      },
});

export const {
      setUsers,
      addUser,
      deleteUser,
      changeUserRole,
      applyUserFiltersAndSort,
} = usersSlice.actions;

export default usersSlice.reducer;
