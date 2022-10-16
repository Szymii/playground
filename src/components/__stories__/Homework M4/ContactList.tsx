type contact = {
  id: string;
  name: string;
  details: string;
};

interface IProps {
  contacts: contact[];
  selected: { id: string } | null;
  onSelect: (contact: contact) => void;
}

export const ContactList = ({ contacts, selected, onSelect }: IProps) => {
  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <button
          key={contact.id}
          onClick={(e) => onSelect(contact)}
          className={`list-group-item ${
            selected && selected.id === contact.id ? "active" : ""
          }`}
        >
          {contact.name}
        </button>
      ))}
    </div>
  );
};
