import { createContext } from "react";

/**
 * This is the context definition for the all file structure json.
 */
export const DataContext = createContext(null);

/**
 * This is the context definition for the all file data json without structure.
 */
export const DataFileContext = createContext(null);

/**
 * This is the context definition for the recent updated file json.
 */
export const RecentFileContext = createContext(null);
