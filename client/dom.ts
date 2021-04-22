export function createRoot() {
    document.body.style.margin = '0'
    let root = document.createElement('div');
    root.style.height = "100vmin"
    root.style.width = "100vmin"
    root.style.margin = "auto"
    document.body.appendChild(root)
    return root;
}
