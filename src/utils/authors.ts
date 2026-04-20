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

export function loadAuthors(): AuthorsData {
  if (authorsData) {
    return authorsData;
  }

  try {
    const authorsPath = path.join(process.cwd(), 'src/data/authors.yml');
    const fileContents = fs.readFileSync(authorsPath, 'utf8');
    authorsData = yaml.load(fileContents) as AuthorsData;
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

