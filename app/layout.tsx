"use client";

import { FirebaseAppProvider } from "reactfire";
import { PropsWithChildren } from "react";

const firebaseConfig = {
	apiKey: "AIzaSyD008f0ItuM0teA4W2oMGJPSbDU1n_sV98",
	authDomain: "idealmd-34853.firebaseapp.com",
	projectId: "idealmd-34853",
	storageBucket: "idealmd-34853.appspot.com",
	messagingSenderId: "986467448186",
	appId: "1:986467448186:web:94325ad19d1edb59ff12c3",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			{/* <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
			<head />
			<body>
				<FirebaseAppProvider firebaseConfig={firebaseConfig}>
					{children}
				</FirebaseAppProvider>
			</body>
		</html>
	);
}
