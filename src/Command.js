const commandMap = new Map([
    ["echo", ["-react-cli: expected: echo [arg]"]],
    ["help", ["React CLI version 0.2.1", "Commands:", "clear", "date", "echo", "help", "man"]],
    ["man", ["React CLI Manual", "DEVELOPER", { href: "https://github.com/wbowers2" }, "DESCRIPTION", "React CLI's goal is for the user to select an OS CLI (macOS Terminal, Ubuntu Terminal, Windows Command Prompt) and render an emulator within the browser using React.", "SEE ALSO", { href: "https://github.com/wbowers2/react-cli" }]],
    ["", [""]]
]);

export default commandMap;
