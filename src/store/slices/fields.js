import { createSlice } from "@reduxjs/toolkit";
import { get, set, unset, findKey } from "lodash";

export const slice = createSlice({
  name: "fields",
  initialState: {
    // TODO: Sample data should change!
    // TODO: Add hide ability to fields
    name: { value: "Elon Musk" },
    position: {
      value: "",
      placeholder: "What's your position?",
    },
    phone: { value: "+1 559 343 44" },
    email: { value: "elon@musk.com" },
    location: { value: "Torino, Italy" },
    bio: {
      value:
        "Elon Musk is a South African-born, Canadian/American entrepreneur, business magnate, industrial designer, and engineer. He founded X.com in 1999, which later became PayPal. He is also the founder, CEO, CTO, and chief designer of SpaceX in 2002 and Tesla Motors in 2003.",
    },
    "experiences-header": { value: "Experiences" },
    experiences: {
      0: {
        id: 0,
        orderIndex: 1,
        role: { value: "Senior Frontend Engineer 1" },
        company: { value: "Yocale" },
        companyDescription: {
          value:
            "Yocale is an online calendar for the local businesses which provide a booking platform for them. Businesses are able to manage their customers, check appointment history for every client and manage their resources, providers and etc.",
        },
        date: { value: "2011-2020" },
        location: { value: "Vancouver, British Columbia" },
        activities: {
          0: {
            id: 0,
            orderIndex: 1,
            activity: { value: "Refactor 1" },
          },
          1: {
            id: 1,
            orderIndex: 2,
            activity: { value: "Refactor 2" },
          },
          2: {
            id: 2,
            orderIndex: 3,
            activity: { value: "Refactor 3" },
          },
        },
      },
      1: {
        id: 1,
        orderIndex: 2,
        role: { value: "Senior Frontend Engineer 2" },
        company: { value: "Yocale" },
        companyDescription: {
          value:
            "Yocale is an online calendar for the local businesses which provide a booking platform for them. Businesses are able to manage their customers, check appointment history for every client and manage their resources, providers and etc.",
        },
        date: { value: "2011-2020" },
        location: { value: "Vancouver, British Columbia" },
        activities: {
          0: {
            id: 0,
            orderIndex: 1,
            activity: { value: "Refactor 1" },
          },
          1: {
            id: 1,
            orderIndex: 2,
            activity: { value: "Refactor 2" },
          },
          2: {
            id: 2,
            orderIndex: 3,
            activity: { value: "Refactor 3" },
          },
        },
      },
    },
  },
  reducers: {
    reorder: (state, action) => {
      const { droppablePath: path, startIndex, endIndex } = action.payload;
      const items = get(state, path);
      const sourceIndex = findKey(items, { orderIndex: startIndex });
      const destinationIndex = findKey(items, {
        orderIndex: endIndex,
      });
      set(state, [...path, Number(sourceIndex), "orderIndex"], endIndex);
      set(state, [...path, Number(destinationIndex), "orderIndex"], startIndex);
    },
    save: (state, action) => {
      const { path, value } = action.payload;
      const field = selectField(path)({ fields: state });
      field.value = value;
    },
    add: (state, action) => {
      const { path } = action.payload;
      const date = new Date();
      const id = date.getTime();
      // Just a sample data
      set(state, [...path, id], {
        id,
        activity: { value: "Refactor 1" },
      });
    },
    remove: (state, action) => {
      const { path: listPath } = action.payload;
      unset(state, listPath);
    },
    show: (state, action) => {
      // TODO: Should be refactor
      const { id } = action.payload;
      state[id].hide = false;
    },
    hide: (state, action) => {
      // TODO: Should be refactored
      const { id } = action.payload;
      state[id].hide = true;
    },
  },
});

export const { reorder, save, add, remove, show, hide } = slice.actions;

export const selectField = (path) => (state) => get(state.fields, path);

export const selectFieldsList = (path) => (state) => {
  const items = get(state.fields, path);
  const sortedItems = Object.values(items).sort(
    (a, b) => a.orderIndex - b.orderIndex
  );
  return sortedItems;
};

export default slice.reducer;
