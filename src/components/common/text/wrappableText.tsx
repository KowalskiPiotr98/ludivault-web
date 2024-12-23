class PropTypes {
    text: string = undefined!;
}

export default function WrappableText({text}: PropTypes) {
    //todo: who knows
    return <span>{text}</span>
}
