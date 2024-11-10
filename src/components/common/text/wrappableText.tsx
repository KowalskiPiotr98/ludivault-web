class PropTypes {
    text: string = undefined!;
}

export default function WrappableText({text}: PropTypes) {
    return <span className="text-wrap">{text}</span>
}
