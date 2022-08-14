import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';

export const Contacts = () => {
  return (
    <>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
};
