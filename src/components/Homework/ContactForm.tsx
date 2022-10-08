type contact = {
  id: string;
  name: string;
  details: string;
};

interface IProps {
  contact: contact;
  onCancel: () => void;
  onChange: (contact: contact) => void;
  onSubmit: (contact: contact) => void;
}

export const ContactForm = ({
  contact,
  onSubmit,
  onChange,
  onCancel,
}: IProps) => {
  const onInputChange = (e: any) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    onChange({
      ...contact,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(contact);
      }}
    >
      <div className="form-group">
        <label className="d-block w-100">
          Name:
          <input
            className="form-control"
            name="name"
            value={contact.name}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label className="d-block w-100">
          Contact details:
          <textarea
            className="form-control"
            name="details"
            value={contact.details}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="form-group">
        <input
          type="button"
          id="cancel-contact"
          className="btn btn-default"
          value="Cancel"
          onClick={onCancel}
        />
        <input
          type="submit"
          id="save-contact"
          className="btn btn-primary ml-2"
          value="Save"
        />
      </div>
    </form>
  );
};
