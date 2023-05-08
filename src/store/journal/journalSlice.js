import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "ABC123",
    //   title: "",
    //   body: "",
    //   date: 1234567,
    //   imageUrls: [],
    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNote: (state, action) => {},
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNotebyId: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  deleteNotebyId,
  savingNewNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
} = journalSlice.actions;
