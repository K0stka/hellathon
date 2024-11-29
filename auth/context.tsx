"use client";

import { createContext } from "react";
import { AuthUser } from "@/lib/types";

export const AuthContext = createContext<AuthUser | null>(null);

interface AuthProviderProps {
	children: React.ReactNode;
	user: AuthUser | null;
}

export const AuthProvider = ({ children, user }: AuthProviderProps) => {
	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
