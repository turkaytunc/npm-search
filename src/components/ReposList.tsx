import { FormEvent, useState } from 'react';
import { useActions } from '../hooks/useActions';

export const ReposList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchRepositories } = useActions();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    searchRepositories(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
