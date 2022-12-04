import styles from './styles.module.scss';
import Image from 'next/image'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width='40' height='40' src="/images/logo.svg" alt="Logo" />
      </div>
    </header>
  );
}
