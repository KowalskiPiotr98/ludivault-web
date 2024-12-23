import GamePlatformEditor from "./gamePlatformEditor.tsx";
import GameOwnedSelector from "./gameOwnedSelector.tsx";
import GameReleasedSelector from "./gameReleasedSelector.tsx";
import GameReleaseDateSelector from "./gameReleaseDateSelector.tsx";

export default function GameEditSidebar() {
    const items = [
        <GamePlatformEditor/>,
        <GameOwnedSelector/>,
        <GameReleasedSelector/>,
        <GameReleaseDateSelector/>
    ]

    return <>
        <div>
            {items.map((item, index) => <div key={index}>{item}</div>)}
        </div>
    </>
}
