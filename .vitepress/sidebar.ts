import { SidebarGenerator } from "./utils/sidebarGenerator"

export const Sidebar = () => {
    let ISidebar = {};
    const dirs = [
        "skyraah/transdeceit/",
        "skyraah/akashic/",
        "private/modpack/",
        "private/modpack/lying_world/",
        "private/mod/",
        "private/mod/assembly_table/",
    ]
    dirs.forEach(dir => {
        ISidebar[dir] = [new SidebarGenerator(`docs/${dir}`, true).sidebar]
    })
    return ISidebar;
}