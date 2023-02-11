import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";

type contact = {
  id: string;
  name: string;
  details: string;
};

export const Contacts = () => {
  const [state, setState] = useState<{
    contacts: contact[] | [];
    selected: contact | null;
  }>({
    contacts: [],
    selected: null,
  });

  const newContact = () => {
    setState((prev) => ({
      ...prev,
      selected: {
        id: uuidv4(),
        name: "",
        details: "",
      },
    }));
  };

  const onSelect = (contact: contact) => {
    setState((prev) => ({
      ...prev,
      selected: contact,
    }));
  };

  const onSubmit = (contact: contact) => {
    const exist = state.contacts.find(({ id }) => id === contact.id);
    if (exist) {
      setState((prev) => ({
        contacts: prev.contacts.map((item) => {
          if (item.id === contact.id) {
            return contact;
          }

          return item;
        }),
        selected: null,
      }));
    } else {
      setState((prev) => ({
        contacts: [...prev.contacts, contact],
        selected: null,
      }));
    }
  };

  const onCancel = () => {
    setState((prev) => ({
      ...prev,
      selected: null,
    }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ContactList
            contacts={state.contacts}
            selected={state.selected}
            onSelect={onSelect}
          />
        </div>
        <div className="col-md-4">
          {state.selected ? (
            <ContactForm
              contact={state.selected}
              onChange={onSelect}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          ) : (
            <div>
              <button
                id="new-contact"
                onClick={newContact}
                className="btn btn-primary"
              >
                New contact
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
