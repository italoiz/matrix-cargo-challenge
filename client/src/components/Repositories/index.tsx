import React from 'react';
import { useRepositories } from '../../hooks';
import { Ghost } from 'react-kawaii';

import './styles.scss';
import { Loading } from '../Loading';

export const Repositories: React.FC = () => {
  const { repositories, loading } = useRepositories();

  return (
    <section className="repositories">
      <h3>Repositories founds ({repositories?.length})</h3>

      {loading && <Loading />}

      {!loading && !repositories?.length && (
        <div className="empty-state">
          <Ghost color="#f4f4f4" mood="blissful" />
          <h2>Sorry, nothing repository was found.</h2>
        </div>
      )}

      <div className="repositories-container">
        {repositories && repositories?.map(({  id, name, full_name, description, owner, html_url }) => (
          <article key={String(id)}>
            <header>
              <img src={owner.avatar_url} alt={owner.login} />
              <div>
                <h4 title={name}>{name}</h4>
                <h5 title={full_name}>{full_name}</h5>
              </div>
            </header>

            {description && <p className="description">{description}</p>}

            <a className="button" role="button" target="_blank" href={html_url}>
              Go to Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
