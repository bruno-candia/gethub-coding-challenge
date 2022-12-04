import styles from './styles.module.scss';
import Image from 'next/image'

export function Search() {
  return (
    <form className={styles.formContainer}>
      <input type="text" name="searchTerm" id="searchTerm" placeholder='Procurar por Filmes ou Séries' />
      <button >
        <Image width='24' height='24' src="/icons/search-normal.svg" alt="search icon" />
      </button>
    </form>
  );
}
