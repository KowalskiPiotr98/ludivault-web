import GamePlatformEditor from "./gamePlatformEditor.tsx";
import GameOwnedSelector from "./gameOwnedSelector.tsx";

export default function GameEditSidebar() {
    return <>
        <div>
            <div className="my-2"><GamePlatformEditor/></div>
            <div className="my-2"><GameOwnedSelector/></div>
        </div>
    </>
}
