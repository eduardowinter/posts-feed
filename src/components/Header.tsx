import styles from './Header.module.css'

import PostFeedLogo from '../assets/posts-feed-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={PostFeedLogo} alt="Logo"/>
            <h1>Posts Feed</h1>
        </header>
    );
}