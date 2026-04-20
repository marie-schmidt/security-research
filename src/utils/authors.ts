import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface AuthorData {
  name: string;
  twitter?: string;
  url?: string;
}

interface AuthorsData {
  [key: string]: AuthorData;
}

let authorsData: AuthorsData | null = null;
let authorsLastModified: number = 0;

export function loadAuthors(): AuthorsData {
  try {
    const authorsPath = path.join(process.cwd(), 'src/data/authors.yml');
    const mtime = fs.statSync(authorsPath).mtimeMs;

    if (authorsData && mtime === authorsLastModified) {
      return authorsData;
    }

    const fileContents = fs.readFileSync(authorsPath, 'utf8');
    authorsData = yaml.load(fileContents) as AuthorsData;
    authorsLastModified = mtime;
    return authorsData || {};
  } catch (error) {
    console.warn('Could not load authors.yml:', error);
    return {};
  }
}

export function getAuthor(authorId: string): AuthorData | null {
  const authors = loadAuthors();
  return authors[authorId] || null;
}

