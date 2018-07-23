# Setup

To run this project, you'll need [.NET Core 2.1](https://www.microsoft.com/net/download/dotnet-core/2.1). You will likely want the "Installer". Specifically, if you're running on a regular (64-bit) Windows machine, you will want: **Windows > .Net Core Installer > x64**.

# Minification

Production code uses minified JavaScript and CSS. To update the minified files:

1. Open a command-line interface (e.g. Terminal on Mac or Command Prompt on Windows).
2. Run `dotnet add package BuildBundlerMinifier` if this is your first time doing this.
3. Run `dotnet build`.

If you're having issues, or for more info: https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification