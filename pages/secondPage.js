import { StyledDiv, StyledButton } from "./styledComponents/StyledComponents";
import Link from "next/link";

export default function secondPage() {
    return (
        <>
            <StyledDiv>
                <p>Login <input type="text" /></p>
                <p>Password <input type="password" /></p>
                <input type="submit" />
            </StyledDiv>
            <Link href={'/'}><StyledButton>Go home</StyledButton></Link>

        </>
    )
}