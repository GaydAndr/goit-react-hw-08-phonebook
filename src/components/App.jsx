import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  loadingSelector,
} from 'redux/contacts/contacts-selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const customError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {customError && <p>{customError}</p>}
        {!customError && <ContactList />}
        {loading && <Loader />}
      </Section>
    </>
  );
};
