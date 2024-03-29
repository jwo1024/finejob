import { LogoHorizontal } from "../../../public/svg/svg";
import Image from "next/image";
import styles from "@/styles/container-home/Header.module.scss";
import { IconUser, IconSearch } from "@/components/Icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={LogoHorizontal} alt="FineJob Logo" />
      </Link>
      <SearchBar />
      <div>
        <Link href="/">로그인</Link>
        <span>|</span>
        <Link href="/">회원가입</Link>
        <Link href="/">
          <IconUser />
        </Link>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input type="text" placeholder=" 희망하는 직종을 검색해 보세요!" />
      <button>
        <IconSearch />
      </button>
    </form>
  );
}
