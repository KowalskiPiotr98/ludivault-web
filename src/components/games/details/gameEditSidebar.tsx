import GamePlatformEditor from "./gamePlatformEditor.tsx";
import GameOwnedSelector from "./gameOwnedSelector.tsx";
import GameReleasedSelector from "./gameReleasedSelector.tsx";

export default function GameEditSidebar() {
    const items = [
        <GamePlatformEditor/>,
        <GameOwnedSelector/>,
        <GameReleasedSelector/>,
    ]

    return <>
        <div>
            {items.map((item, index) => <div key={index} className="my-2">{item}</div>)}
        </div>
    </>
}
