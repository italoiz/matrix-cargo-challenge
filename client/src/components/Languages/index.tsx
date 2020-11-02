import { useLanguages } from '../../hooks';
import React, { ChangeEvent, useCallback, useState } from 'react';

import './styles.scss';
import { useAppContext } from '../../context';
import { Loading } from '../Loading';

export const Languages: React.FC = () => {
  const { languages, loading } = useLanguages();
  const { selectLanguage, selectedLanguage } = useAppContext();
  const [filter, setFilter] = useState('');

  const handleSearch = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.currentTarget.value);
  }, []);

  const handleSelectLanguage = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    selectLanguage(evt.currentTarget.value);
  }, [selectLanguage]);

  return (
    <section className="languages">
      <h3>Available Languages ({languages?.length ?? 0})</h3>
      
      {!loading && !!languages?.length && <input type="search" placeholder="Choose your best language..." onInput={handleSearch} />}

      {loading && <Loading />}
  
      <div className="languages-container">
        {languages && languages.filter(({ name }) => {
          if (filter) {
            const re = new RegExp(filter, 'i');
            return re.test(name);
          }
          return name;
        }).map(({ name }) => (
          <label className="language" key={name} title={name}>
            <input type="radio" name="language" value={name} onChange={handleSelectLanguage} checked={name === selectedLanguage} />
            <span>{name}</span>
          </label>
        ))}
      </div>
    </section>
  );  
}