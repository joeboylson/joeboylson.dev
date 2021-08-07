import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useShortProject } from "../../hooks/useShortProject";
import { useToggle } from "../../hooks/useToggle";
import { useWindowSize } from "../../hooks/useWindowSize";
import ShortProject from "../ShortProject";

import "./style.scss"

const ProjectsList = () => {
    const shortProjects = useShortProject();

    return (
        <div id="project-list">

            <div id="list-wrapper">
                { shortProjects.map((project, i) => <a href="#" key={i}>{project.name}</a>)}
            </div>
        </div>
    )
};

export default ProjectsList
