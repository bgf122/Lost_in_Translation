const SignSymbol = (props) => {
    const path = "/assets/individual_signs"
    const { letter } = props

    return (
        <>
            <img src={`${path}/${letter}.png`} alt={`${letter}`}></img>
        </>
    )

}

export default SignSymbol