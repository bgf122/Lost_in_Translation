import Translation from "../components/Translation/Translation";
import withAuth from "../hoc/withAuth";

const Translate = () => {
    return (
        <>
        <Translation />
        </>
    )
}
export default withAuth(Translate)