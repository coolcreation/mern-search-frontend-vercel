Anyone on a Mac with Xcode:

    Send them this link:
    https://expo.dev/accounts/jeffthecoder/projects/mobile-app/builds/be6cb0fe-7a1e-4a72-87e9-24acad7ec06c
        They should open this link in their web browser on their Mac.

    They will download the Simulator Build:
        On that page, they'll find a button or link to download the build artifact. It will be a file ending in .tar.gz (e.g., simulator-ios.tar.gz).

    Instructions for them to run it (on their Mac):
        Install Xcode: If they don't have it already, they need to download and install Apple's Xcode from the Mac App Store. After installation, they should open it at least once for it to complete its setup.
        Extract the .app file: They should double-click the downloaded .tar.gz file. This will extract a folder, and inside that folder, they will find the actual application file, which ends with .app (e.g., mobile-app.app).
        Open the iOS Simulator: They can open the "Simulator" app directly on their Mac. It's usually found in Applications/Xcode.app/Contents/Developer/Applications or by searching in Spotlight (Cmd + Space) for "Simulator".
        Drag and Drop to Run: Once the Simulator app is open, they can drag the extracted .app file directly onto the open Simulator window. This will install your app on the simulator and launch it.

This development-simulator build will run on their Mac's simulator just like it would on a real iPhone, connecting to your Railway backend.