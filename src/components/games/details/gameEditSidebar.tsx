import GamePlatformEditor from "./gamePlatformEditor.tsx";
import GameOwnedSelector from "./gameOwnedSelector.tsx";
import GameReleasedSelector from "./gameReleasedSelector.tsx";
import GameReleaseDateSelector from "./gameReleaseDateSelector.tsx";

export default function GameEditSidebar() {
    const items = [
        <GamePlatformEditor key={0}/>,
        <GameOwnedSelector key={1}/>,
        <GameReleasedSelector key={2}/>,
        <GameReleaseDateSelector key={3}/>
    ]

    return <>
        <div>
            {items.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    </>
}
