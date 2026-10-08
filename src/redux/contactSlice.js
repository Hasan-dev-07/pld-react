

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",

  initialState,

  reducers: {

    addContact: (state, action) => {

      const newContact = {
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
        message: action.payload.message,
        submittedAt: new Date().toLocaleString(),
      };

      state.contacts.push(newContact);
    },

    deleteContact: (state, action) => {

      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

    },

  },
});

export const {
  addContact,
  deleteContact,
} = contactSlice.actions;

export default contactSlice.reducer;