import { createSlice } from "@reduxjs/toolkit";

const SECTIONS = {
  INTRO: "intro",
  EXPERIENCES: "experiences",
};

export const slice = createSlice({
  name: "layouts",
  initialState: {
    selectedLayout: "singleColumn",
    layouts: {
      singleColumn: {
        column1: { grids: 12, items: [SECTIONS.INTRO, SECTIONS.EXPERIENCES] },
      },
      dualColumn: {
        column1: { grids: 7, items: [SECTIONS.INTRO] },
        column2: { grids: 5, items: [SECTIONS.EXPERIENCES] },
      },
      dualColumnWithHeader: {
        column1: { grids: 12, items: [SECTIONS.INTRO] },
        column2: { grids: 7, items: [SECTIONS.EXPERIENCES] },
        column3: { grids: 5, items: [] },
      },
    },
    sections: {
      [SECTIONS.INTRO]: {
        hide: false,
        lock: true,
      },
      [SECTIONS.EXPERIENCES]: {
        hide: false,
        lock: false,
      },
    },
  },
  reducers: {
    reorder: (state, action) => {
      const { droppablePath, startIndex, endIndex } = action.payload;
      const currentLayout = state.selectedLayout;
      const droppable = state.layouts[currentLayout][droppablePath].items;
      const [removed] = droppable.splice(startIndex, 1);
      droppable.splice(endIndex, 0, removed);
    },
    move: (state, action) => {
      const {
        droppableSourceId,
        droppableDestinationId,
        startIndex,
        endIndex,
      } = action.payload;
      const selectedLayout = state.selectedLayout;
      const source = state.layouts[selectedLayout][droppableSourceId].items;
      const destination =
        state.layouts[selectedLayout][droppableDestinationId].items;
      const [removed] = source.splice(startIndex, 1);
      destination.splice(endIndex, 0, removed);
    },
  },
});

export const { reorder, move } = slice.actions;

export const selectCurrentLayout = (state) => {
  const layout = state.layouts.selectedLayout;
  return state.layouts.layouts[layout];
};

export const selectSection = (id) => (state) => {
  return state.layouts.sections[id];
};

export default slice.reducer;
