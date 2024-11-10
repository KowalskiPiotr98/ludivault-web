import {describe, it, expect, vitest} from "vitest";
import Platform from "../../models/platform.ts";
import {render, screen} from "@testing-library/react";
import PlatformDataFields from "./platformDataFields.tsx";

describe("PlatformDataFields", ()  => {
    it('should display existing values if set', () => {
        const platform: Platform = {name: "test name", shortName: "test", id: ""};

        render(<PlatformDataFields platform={platform} setPlatform={vitest.fn()}/>);

        expect(screen.getByDisplayValue(platform.name)).toBeInTheDocument();
        expect(screen.getByDisplayValue(platform.shortName)).toBeInTheDocument();
    });
})
