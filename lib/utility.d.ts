export type NextLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => JSX.Element | Promise<JSX.Element>;

export type APIError = { message: string };

export type FormResponse = { error?: string };
