import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { HomeWrapper } from "./styles";

export function Home() {
    return <HomeWrapper>
        <Header />
        <Summary />
    </HomeWrapper>
}