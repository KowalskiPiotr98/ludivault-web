import {faQuestion} from "@fortawesome/free-solid-svg-icons/faQuestion";
import {Box, Link, Paper} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGitAlt} from "@fortawesome/free-brands-svg-icons/faGitAlt";
import {faDiscord} from "@fortawesome/free-brands-svg-icons/faDiscord";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";
import {faOpenid} from "@fortawesome/free-brands-svg-icons/faOpenid";
import {faSteam} from "@fortawesome/free-brands-svg-icons/faSteam";
import {faTwitch} from "@fortawesome/free-brands-svg-icons/faTwitch";

class PropTypes {
    name: string = undefined!;
}

export default function ProviderDisplay({name}: Readonly<PropTypes>) {
    let icon = faQuestion;
    let description = "Unknown provider";

    switch (name) {
        case "gitea": {
            description = "Gitea";
            icon = faGitAlt;
            break;
        }
        case "discord": {
            description = "Discord";
            icon = faDiscord;
            break;
        }
        case "github": {
            description = "GitHub";
            icon = faGithub;
            break;
        }
        case "google": {
            description = "Google";
            icon = faGoogle;
            break;
        }
        case "oidc": {
            description = "Custom provider";
            icon = faOpenid;
            break;
        }
        case "steam": {
            description = "Steam";
            icon = faSteam;
            break;
        }
        case "twitch": {
            description = "Twitch";
            icon = faTwitch;
            break;
        }
    }

    return <Paper sx={{display: "flex"}}>
        <Link sx={{width: "100%", }} href={`/api/v1/auth?provider=${name}`} title={description}>
            <FontAwesomeIcon width={"100%"} size={"5x"} icon={icon}/>
        </Link>
    </Paper>
}
