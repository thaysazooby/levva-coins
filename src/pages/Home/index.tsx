import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { HomeWrapper } from "./styles";

export function Home() {
    return <HomeWrapper>
        <Header />
        <Summary />

        <SearchForm />
    </HomeWrapper>
}