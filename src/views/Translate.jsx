import Translation from "../components/Translation/Translation";
import withAuth from "../hoc/withAuth";

const Translate = () => {
    return (
        <>
        <h1>Translate</h1>
        <Translation />
        </>
    )
}
export default withAuth(Translate)