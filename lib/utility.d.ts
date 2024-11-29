export type NextLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => JSX.Element | Promise<JSX.Element>;

export type APIError = { status: "error"; message: string };

export type FormResponse = { error?: string };
