import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';
import { List } from '@mui/material';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';
import { deleteItem, fetchContacts } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useMemo(
    () =>
      items.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      }),
    [items, filter]
  );

  return (
    <List className={s.contact__list}>
      {contacts?.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contact__item}>
            <p>
              <span>{name}: </span>
              <span>{number} </span>
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteItem(id))}
              className={s.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
};
